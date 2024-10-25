import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CommsService } from './comms.service';

@Controller('comms')
export class CommsController {
  constructor(private readonly commsService: CommsService) {}

  @Get('/your-next-delivery/:id')
  async getNextDelivery(@Param('id', ParseUUIDPipe) id: string) {
    try {
      const user = this.commsService.getCustomer(id);

      if (!user) {
        throw new NotFoundException('User not found');
      }

      const catNames = this.commsService.getCatNames(user);

      const totalPrice = this.commsService.calculateTotalPrice(user);

      const hasFreeGift = totalPrice > 120.0;

      return {
        title: `Your next delivery for ${catNames}`,
        message: `Hey ${user.firstName}! In two days' time, we'll be charging you for your next order for ${catNames}'s fresh food.`,
        totalPrice: this.commsService.formatPrice(totalPrice),
        freeGift: hasFreeGift,
      };
    } catch (error) {
      console.error('Oops!:', error);
    }
  }
}
