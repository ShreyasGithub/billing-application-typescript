import { Item } from './item';

export class Tomato extends Item{
		
	constructor(quantity : number) {
		super();
		this.unitPrice = 30.00;
		this.unitOfMeasurement = 'kilogram';
		this.id = 400;
		this.name = 'vegetable-tomato';
		this.quantity = quantity;
	}
}