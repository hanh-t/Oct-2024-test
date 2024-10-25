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

  it('getCustomer() should return a customer by id', () => {
    const customer = service.getCustomer('1');
    expect(customer).toBe(mockCustomers[0]);
  });
});
