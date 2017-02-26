import { Item } from './item';
import EasyTable = require('easy-table');

export class BillingService {
	
	printBill (itemList : Item[]) {
		console.log('=========== bill ==========');
		
		var total = 0.00;
		var item = null;
		var easyTable = new EasyTable();
		for(var i = 0; i < itemList.length; i++) {
			item = itemList[i];
			
			easyTable.cell('item-name', item.name);
			easyTable.cell('quantity', item.quantity);
			easyTable.cell('unit-of-measurement', item.unitOfMeasurement);
			easyTable.cell('unit-price', item.unitPrice);
			easyTable.cell('price', item.getPrice());
			easyTable.newRow();
			
			total = total + item.getPrice();
		}
		
		console.log(easyTable.toString());
		console.log('total = ' + total);
		console.log('=========== thanks ==========');
	}
}