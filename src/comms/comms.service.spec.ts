import { Test, TestingModule } from '@nestjs/testing';
import { CommsService } from './comms.service';

describe('CommsService', () => {
  let service: CommsService;

  const mockCustomers = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@email.com',
      cats: [
        {
          name: 'Whiskers',
          subscriptionActive: true,
          breed: 'British Blue',
          pouchSize: 'A',
        },
        {
          name: 'Fluffy',
          subscriptionActive: false,
          breed: 'Domestic Shorthair',
          pouchSize: 'B',
        },
        {
          name: 'Smokey',
          subscriptionActive: true,
          breed: 'Siamese',
          pouchSize: 'F',
        },
      ],
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommsService,
        {
          provide: 'CUSTOMERS',
          useValue: mockCustomers,
        },
      ],
    }).compile();

    service = module.get<CommsService>(CommsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('getCatNames() should return formatted cat names for active subscriptions', () => {
    const catNames = service.getCatNames(mockCustomers[0]);
    expect(catNames).toBe('Whiskers and Smokey');
  });

  it('calculateTotalPrice() should return total price of active subscriptions', () => {
    const totalPrice = service.calculateTotalPrice(mockCustomers[0]);
    expect(totalPrice).toBe(126.75);
  });

  it('formatPrice() should format the price correctly', () => {
    const price = service.formatPrice(100.123);
    expect(price).toBe('£100.12');
  });
});
