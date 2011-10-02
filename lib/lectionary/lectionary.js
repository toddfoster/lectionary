"use strict";

function Lectionary(defaultDate) { 
  this.defaultDate = defaultDate;

  this.tables = {
    "monthlyGospel" : [ "Jn", "Jn", "Jn", "Mt", "Mt", "Mt", "Mk", "Mk", "Mk", "Lk", "Lk", "Lk" ],
    "numChaptersInGospel" : { "Mt":"28", "Mk":"16", "Lk":"24", "Jn":"21" },
    "dailyPsalms" : [
        { "AM":"1-3",	"Noon":"4-6",	"PM":"7-9" },
        { "AM":"10-11",	"Noon":"12-14",	"PM":"15-17" },
        { "AM":"18",	"Noon":"19-20",	"PM":"21-22" },
        { "AM":"23-24",	"Noon":"25-26",	"PM":"27-28" },
        { "AM":"29-30",	"Noon":"31-32",	"PM":"33-34" },
        { "AM":"35-36",	"Noon":"37",	"PM":"38" },
        { "AM":"39-40",	"Noon":"41",	"PM":"42-43" },
        { "AM":"44-45",	"Noon":"46",	"PM":"47-48" },
        { "AM":"49-50",	"Noon":"51-52",	"PM":"53-54" },
        { "AM":"55-56",	"Noon":"57",	"PM":"58-59" },
        { "AM":"60-62",	"Noon":"63",	"PM":"64-65" },
        { "AM":"66",	"Noon":"67",	"PM":"68" },
        { "AM":"69",	"Noon":"70",	"PM":"71" },
        { "AM":"72-73",	"Noon":"74",	"PM":"75-76" },
        { "AM":"77",	"Noon":"",	"PM":"78" },
        { "AM":"79-80",	"Noon":"81",	"PM":"82" },
        { "AM":"83-84",	"Noon":"85",	"PM":"86-87" },
        { "AM":"88",	"Noon":"",	"PM":"89" },
        { "AM":"90-92",	"Noon":"93",	"PM":"94-96" },
        { "AM":"97-99",	"Noon":"100",	"PM":"101-103" },
        { "AM":"104",	"Noon":"",	"PM":"105" },
        { "AM":"106",	"Noon":"",	"PM":"107" },
        { "AM":"108-109",	"Noon":"110",	"PM":"111-112" },
        { "AM":"113-115",	"Noon":"116",	"PM":"117-118" },
        { "AM":"119.1-72",	"Noon":"",	"PM":"119.73-96" },
        { "AM":"119.97-131",	"Noon":"",	"PM":"119.132-176" },
        { "AM":"120-124",	"Noon":"125-129",	"PM":"130-134" },
        { "AM":"135-136",	"Noon":"137",	"PM":"138-139" },
        { "AM":"140-141",	"Noon":"142",	"PM":"143-144" },
        { "AM":"145-147",	"Noon":"148",	"PM":"149-150" }]};

  // ------- Gospel ----------
  this.gospel = function (overrideDate) {
    var day = this.date(overrideDate).getDate();
    var book = this.tables.monthlyGospel[this.date(overrideDate).getMonth()];
    return (day <= this.tables.numChaptersInGospel[book]) ? book + " " + day : "";
  };
  this.gospels = this.gospel;

  // ------- Proverbs ----------
  this.proverbs = function (overrideDate) { 
    var day = this.date(overrideDate).getDate();
    return "Prov " + day + ((day != 31 && this.lastDayOfMonth(overrideDate)) ? "-31" : "");
  };
  this.proverb = this.proverbs;

  // ------- Psalms ----------
  this.psalmPortion = function (time, overrideDate) {
    var day = this.date(overrideDate).getDate();
    return (day != 31) ? this.tables.dailyPsalms[day-1][time] : "";
  };

  this.psalmsAt = function (time, overrideDate) {
    var portion = this.psalmPortion(time, overrideDate);
    return (portion ? "Ps " + portion : "");
  }; 

  this.psalmsAm = function (overrideDate) { return this.psalmsAt("AM", this.date(overrideDate)); }; 
  this.psalmsNoon = function (overrideDate) { return this.psalmsAt("Noon", this.date(overrideDate)); };
  this.psalmsPm = function (overrideDate) { return this.psalmsAt("PM", this.date(overrideDate)); };
  this.psalmsAM = this.psalmsAm;
  this.psalmsPM = this.psalmsPM;

  this.psalms = function (overrideDate) {
    var leftPortion = this.psalmPortion("AM", overrideDate).replace(/-.*/,"");
    var rightPortion = this.psalmPortion("PM", overrideDate).replace(/.*-/,"");
    if (leftPortion && rightPortion) {
      return "Ps " + leftPortion + "-" + rightPortion;
    }
    return;
  };

  // ------- Utilities ----------
  this.lastDayOfMonth = function (overrideDate) {
    this.overrideDate = overrideDate;
    var tomorrow = new Date(this.date().toString());
    tomorrow.setDate(this.date().getDate() + 1);
    return this.date().getMonth() != tomorrow.getMonth();
  };

  this.date = function (ultimateOverrideDate) { return ultimateOverrideDate || this.overrideDate || this.defaultDate; };
}
