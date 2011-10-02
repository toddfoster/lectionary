describe("Lectionary", function() {
  var lectionary;

  beforeEach(function() {
    lectionary = new Lectionary(new Date(2000,0,01));
  });

  it("should initialize", function () {
    expect(lectionary).not.toBeNull();
  });

  it("should run", function () {
    expect(lectionary.gospel()).not.toBeNull();
  });

  it("should accurately discern the last day of the month", function () {
    expect(lectionary.lastDayOfMonth(new Date(2010,0,30))).toBeFalsy();
    expect(lectionary.lastDayOfMonth(new Date(2010,0,31))).toBeTruthy();

    expect(lectionary.lastDayOfMonth(new Date(2010,1,27))).toBeFalsy();
    expect(lectionary.lastDayOfMonth(new Date(2010,1,28))).toBeTruthy();

    expect(lectionary.lastDayOfMonth(new Date(2010,11,30))).toBeFalsy();
    expect(lectionary.lastDayOfMonth(new Date(2010,11,31))).toBeTruthy();
    });

});
