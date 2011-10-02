describe("Psalms Reading", function() {
  var lectionary;

  beforeEach(function() {
    lectionary = new Lectionary(new Date(2000,0,01));
  });

  it("should return the 1 Jan reading", function () {
    expect(lectionary.psalmsAm()).toContain("Ps 1-3");
    expect(lectionary.psalmsNoon()).toContain("Ps 4-6");
    expect(lectionary.psalmsPm()).toContain("Ps 7-9");
    expect(lectionary.psalms()).toContain("Ps 1-9");
  });

  it("should return the correct portions for other days of the month", function () {
    expect(lectionary.psalmsAm(new Date(2000,00,16))).toContain("Ps 79-80");
    expect(lectionary.psalmsNoon(new Date(2000,00,16))).toContain("Ps 81");
    expect(lectionary.psalmsPm(new Date(2000,00,16))).toContain("Ps 82");
    expect(lectionary.psalmsAm(new Date(2000,00,30))).toContain("Ps 145-147");
    expect(lectionary.psalmsNoon(new Date(2000,00,30))).toContain("Ps 148");
    expect(lectionary.psalmsPm(new Date(2000,00,30))).toContain("Ps 149-150");
    });

  it("should return empty for pieces without a passage", function () {
    expect(lectionary.psalmsNoon(new Date(2000,00,15))).toBeFalsy();
    });

  it("should return empty for dates out of range", function () {
      expect(lectionary.psalmsAM(new Date(2000,11,31))).toBeFalsy();
      });

  it("should combine whole days into a single span", function () {
      expect(lectionary.psalms(new Date(2000,0,14))).toContain("Ps 72-76");
      expect(lectionary.psalms(new Date(2000,0,15))).toContain("Ps 77-78");
      expect(lectionary.psalms(new Date(2000,0,16))).toContain("Ps 79-82");
      expect(lectionary.psalms(new Date(2000,0,25))).toContain("Ps 119.1-96");
      });
});

