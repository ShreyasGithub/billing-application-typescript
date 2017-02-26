export class Item {
	id : number;
	name : string;
	unitPrice : number;
	unitOfMeasurement : string;
	quantity : number;
	
	constructor () {
		
	}
	
	getPrice() : number {
		return (this.quantity * this.unitPrice);
	}
}