// need to standardize date to standardize log tests
var OrigDate = Date;
var testTime = 0;
global.Date = class Date {
  constructor() {
    return new OrigDate(testTime);
  }
}
