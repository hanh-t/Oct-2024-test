import { Injectable } from '@nestjs/common';
import * as customers from '../../data.json';

type Customer = (typeof customers)[number];
type PouchSize = keyof typeof pouchSizePrice;

const pouchSizePrice = {
  A: 55.5,
  B: 59.5,
  C: 62.75,
  D: 66.0,
  E: 69.0,
  F: 71.25,
};

@Injectable()
export class CommsService {
  getCustomer(id: string) {
    return customers.find((customers) => customers.id === id);
  }

  getCatNames(customer: Customer) {
    const cats = customer.cats
      .filter((subscription) => subscription.subscriptionActive === true)
      .map((cat) => cat.name);

    if (cats.length === 1) {
      return cats;
    }

    if (cats.length === 2) {
      return cats.join(' and ');
    }

    if (cats.length > 2) {
      const lastCat = cats.pop();
      return `${cats.join(', ')} and ${lastCat}`;
    }

    return;
  }

  calculateTotalPrice(customer: Customer) {
    return customer.cats
      .filter((subscription) => subscription.subscriptionActive === true)
      .reduce(
        (sum, cat) => sum + pouchSizePrice[cat.pouchSize as PouchSize],
        0,
      );
  }

  formatPrice(price: number) {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    }).format(price);
  }
}
