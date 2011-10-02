describe("Proverbs Reading", function() {
  var lectionary;

  beforeEach(function() {
    lectionary = new Lectionary(new Date(2000,0,01));
  });

  it("should return the reading for 1 Jan", function () {
    expect(lectionary.proverbs()).toContain("Prov 1");
  });

  it("should return the remaining days on the last day of the month", function () {
    expect(lectionary.proverbs(new Date(2000,00,31))).toContain("Prov 31");
    expect(lectionary.proverbs(new Date(2010,01,27))).toContain("Prov 27");
    expect(lectionary.proverbs(new Date(2010,01,28))).toContain("Prov 28-31");
    expect(lectionary.proverbs(new Date(2010,05,29))).toContain("Prov 29");
    expect(lectionary.proverbs(new Date(2010,05,30))).toContain("Prov 30-31");
    });

  it("should work with either plural or singular form", function () {
    expect(lectionary.proverbs()).toContain("Prov 1");
    expect(lectionary.proverb()).toContain("Prov 1");
    });
});

