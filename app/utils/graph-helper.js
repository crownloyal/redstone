import moment from 'moment';

function compareDates(date, anotherDate) {
	return moment(date).isSame(anotherDate, 'day');			//compare 2 dates - returns bool
}

export function pushTicketCount(preparedArray, array, targetIndex) {
		for (var j = 0; j < preparedArray.length; j++) {				//take all date array entries
			var counter = 0;											//counter scope inside the loop
			for(var k = 0; k < array.length; k++) {						//take all ticket date entries
			//normalize the date format (I thought it is supposed to work anyway but it will do for now)
				if ( compareDates(moment(array[k]).format("DD MMM"), moment(preparedArray[j][0]).format("DD MMM")) ) {
					counter++;
				}
			}
		preparedArray[j][targetIndex] = counter;
		}
	return preparedArray;
}

export function pushDates(array, count) {
																			//get all those dates into a nice array
		for (var i = count; i >= 0; i--) {												//needs to be run first
			var changingDay = moment().subtract(i, 'days').format("DD MMM");
			array.push([changingDay, ]);
			}

}