//https://docs.google.com/spreadsheets/d/1hR6Axig-Ku-deHkqb5_3-t1MatvO9jmaq9znxjgENfo/edit#gid=0

var url ="//https://docs.google.com/spreadsheets/d/1hR6Axig-Ku-deHkqb5_3-t1MatvO9jmaq9znxjgENfo/edit#gid=0";
var Route = {};
Route.path = function(route,callback){
   Route[route] = callback;
}


function doGet(e) {
  
  Route.path("Page1",loadPageOne);
  //Route.path("listDetail",loadListDetail);
  //Route.path("editList",loadEditList);
  //Route.path("addEvent", loadAddEvent);
  var params = Object.keys(e.parameters).filter(function(p){return p != "v"});
  
  var viewParameters = {};
  params.forEach(function(p){
  
    viewParameters[p] = e.parameters[p];
  
  });
  if(Route[e.parameters.v]) {
    if(params.length == 0){
     return Route[e.parameters.v]();
    
    } else {
      return Route[e.parameters.v](viewParameters);
    }
  
  }else {
   return render("Dashboard");
  }
}

function loadPageOne() {

    return render("page1");


}

/* 

function loadListDetail(params) {  
  console.log(params);
  return render("ListDetail");
  
  
}
*/


/*function loadAddGuest() {
  
  var spreadSheet = SpreadsheetApp.openByUrl(url);
  var workSheet = spreadSheet.getSheetByName("Options");
  var list = workSheet.getRange(1,1,workSheet.getRange("A1").getDataRegion().getLastRow(),1).getValues();
  var htmlListArray = list.map(function(r){return '<option>' + r[0] + '</option>'; }).join('');  
  
  var eventws = spreadSheet.getSheetByName("Event");
  var eventList = eventws.getRange(2,1,eventws.getLastRow()-1,4).getValues();
 
  // var eventList = eventws.getRange(2,1,workSheet.getRange("A2").getDataRegion().getLastRow(),4).getValues();
  
  var htmlEventListArray = eventList.map(function(r){return '<option value=\"' + r[0] + '\">'+ r[2] + ' @ '+ r[1] +'</option>'; }).join('');  
  //var htmlEventListArray = eventList.map(function(r){return '<option>'+ ' ' + r[0] + ' ' + r[1] + ' '+ r[2] +' '+ r[3] + '</option>'; }).join('');  
  //var ids = workSheet.getRange(2, 1,workSheet.getLastRow()-1,1).getValues().map(function(r){return r[0]});
  
  Logger.log(htmlEventListArray);
  return render("AddGuest", {list: htmlListArray, glist: htmlEventListArray })

} */
