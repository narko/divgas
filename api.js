function doGet() 
{
	var output = 'Today is '+AppLib.getTodaysDateLongForm()+"\n\n";
	output += "\n\n";
	output += JSON.stringify(AppLib.getDividendInfo("0P000000AV"));

	return ContentService.createTextOutput(output);
}


function getNextDividend(id) {
	return AppLib.getDividendInfo(id);
}