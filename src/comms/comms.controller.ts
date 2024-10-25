import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { CommsService } from './comms.service';

@Controller('comms')
export class CommsController {
  constructor(private readonly commsService: CommsService) {}

  @Get('/your-next-delivery/:id')
  async getNextDelivery(@Param('id', ParseUUIDPipe) id: string) {
    try {
    } catch (error) {
      console.error('Oops!:', error);
    }
  }
}
