# divgas
A JS library for dividend investors targeting Google Apps Script

### How to deploy as a Google Apps Script
1. Create a new Google Sheets document under your Google Drive account or use an existing one.
2. Open the Google Sheets document and click on Tools -> Script Editor. This will create a new Google Apps Script (GAS) project associated with your document. Give your GAS project a name and save it.
3. Within the GAS editor, click on File -> Properties. Then copy the **Script ID** associated with the GAS project.
4. Open **.class.json** in this repo and replace the **scriptId** value with the one from step 3.
5. Install **clasp** (see link below) and log in with your Google account by using: `clasp login`.
6. Use the following command from the repo root directory: `npm run gas`. This will generate a unique javascript file named **lib.bundle.js** containing this lib code and all the internal dependencies.  
7. Execute `npm run deploy` to push the code to your GAS project.

### Sample usage from a Google Sheets document
Once the code has been deployed to your GAS project, you can use it from your Google Sheets document. The following functions are available to use:

* `getNextDividend(id)`: This function scrapes Morningstar and retrieves dividend information for the given company identified by **id**. This id is an internal Morningstar id and you will need to find it out for any company of your interest. For example for $BATS, the id is "0P00007O1O", which can be extracted from the following URL: `http://tools.morningstar.es/es/stockreport/default.aspx?SecurityToken=0P00007O1O%5D3%5D0%5DE0WWE%24%24ALL`.
You can use the function like this within a cell: `=getNextDividend("0P00007O1O")`. The function returns an array with the following elements:
    
    * ticker: the ticker of company, e.g., "BATS".
    * declarationDate: the declaration date of the last known dividend, e.g., "18/12/20". 
    * exDate: the Ex-date of the last known dividend, e.g., "17/12/20".
    * paymentDate: the payment date of the last known dividend, e.g., "03/02/21".
    * amount: the declared dividend amount in the local currency of the company's main market, e.g., "52,60" (GPX).

### Acknowledgements
This project's setup relies on:
- [AppsCurryStep2](https://github.com/gsmart-in/AppsCurryStep2)
- [clasp](https://github.com/google/clasp)
- [www.herramientasdeinversor.com](https://www.herramientasdeinversor.com/2020/01/calendario-de-dividendos.html)