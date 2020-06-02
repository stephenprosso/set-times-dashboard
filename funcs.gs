

function getEventTableData() {
  
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("setTimes");
  var data = ws.getRange(2,1,ws.getLastRow()-1,7).getDisplayValues();
  Logger.log(data);
  return data;

}