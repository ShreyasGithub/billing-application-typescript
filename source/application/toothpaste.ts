import { Item } from './item';

export class Toothpaste extends Item{
		
	constructor(quantity : number) {
		super();
		this.unitPrice = 30.00;
		this.unitOfMeasurement = 'packet';
		this.id = 300;
		this.name = 'tooth-paste-100g';
		this.quantity = quantity;
	}
}