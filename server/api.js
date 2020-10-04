/**
 * Retrieves information for the next company dividend
 * 
 * @param {String} id The Morningstar company id
 * @return {Array} An array with the following fields: [ticker, declarationDate, exDate, paymentDate, amount]
 */
function getNextDividend(id) {
	return AppLib.getDividendInfo(id);
}