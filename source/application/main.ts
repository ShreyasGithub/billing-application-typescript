import { Toothpaste } from './toothpaste';
import { Tomato } from './tomato';
import { BillingService } from './billingService';


var items = [];

items.push(new Toothpaste(1));
items.push(new Tomato(2));

var billingService = new BillingService();
billingService.printBill(items);