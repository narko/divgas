import * as moment from 'moment';
import _ from 'lodash';
import { parse } from 'node-html-parser';


function getTodaysDateLongForm() {
	return moment().format('LLLL');
}

function getDaysToAnotherDate(y,m,d) {
	return moment().to([y,m,d]);
}


function scrapeMorningstarById(morningstarId) {
	var response = UrlFetchApp.fetch(`http://tools.morningstar.es/es/stockreport/default.aspx?SecurityToken=${morningstarId}%5D3%5D0%5DE0WWE%24%24ALL`);
	var root = parse(response.getContentText());
	
	const dates = root.querySelectorAll('td.date.colLatest');
	const amount = root.querySelector('td.number.colLatest');
	const ticker = root.querySelector('span.securitySymbol');

	let divInfo = {
		ticker: isNullOrUndefined(ticker) ? '' : ticker.rawText,
		declarationDate: isNullOrUndefined(dates) ? '' : dates[0].rawText,
		exDate: isNullOrUndefined(dates) ? '' : dates[1].rawText,
		paymentDate: isNullOrUndefined(dates) ? '' : dates[2].rawText,
		amount: isNullOrUndefined(dates) ? '' : amount.rawText 
	}

	return divInfo;
}

function isNullOrUndefined(value) {
	return value === null || value === undefined;
}

function getDividendInfo(morningstarId) {
	var result = [];
	const info = scrapeMorningstarById(morningstarId);
	result.push([info.ticker, info.declarationDate, info.exDate, info.paymentDate, info.amount]);
	
	return result;
}

export {
    getTodaysDateLongForm,
    getDaysToAnotherDate,
	getDividendInfo
}; 
