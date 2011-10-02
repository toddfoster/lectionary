describe("Gospel Reading", function() {
  var lectionary;

  beforeEach(function() {
    lectionary = new Lectionary(new Date(2000,0,01));
  });

  it ("should return Jn 1 for date set in constructor (1 Jan)", function () {
    expect(lectionary.gospel()).toContain("Jn 1");
    });

  it("check date representations", function () {
    expect(new Date(2000,0,01).toString()).toContain("Jan");
    expect(new Date(2000,11,01).toString()).toContain("Dec");
    expect(new Date(2000,11,01).getMonth()).toEqual(11);
    expect(new Date(2010,07,04).toString()).toContain("Wed");
    });

  it("should return correct book for correct months (Jn, Mt, Mk, Lk)", function () {
      expect(lectionary.gospel(new Date(2000,00,01))).toContain("Jn 1");
      expect(lectionary.gospel(new Date(2000,01,01))).toContain("Jn 1");
      expect(lectionary.gospel(new Date(2000,02,01))).toContain("Jn 1");
      expect(lectionary.gospel(new Date(2000,03,01))).toContain("Mt 1");
      expect(lectionary.gospel(new Date(2000,04,01))).toContain("Mt 1");
      expect(lectionary.gospel(new Date(2000,05,01))).toContain("Mt 1");
      expect(lectionary.gospel(new Date(2000,06,01))).toContain("Mk 1");
      expect(lectionary.gospel(new Date(2000,07,01))).toContain("Mk 1");
      expect(lectionary.gospel(new Date(2000,08,01))).toContain("Mk 1");
      expect(lectionary.gospel(new Date(2000,09,01))).toContain("Lk 1");
      expect(lectionary.gospel(new Date(2000,10,01))).toContain("Lk 1");
      expect(lectionary.gospel(new Date(2000,11,01))).toContain("Lk 1");
      });
  
  it("should return blank for ends of months past gospel lengths", function () {
      expect(lectionary.gospel(new Date(2000,00,21))).toBeTruthy();
      expect(lectionary.gospel(new Date(2000,00,22))).toBeFalsy();
      expect(lectionary.gospel(new Date(2000,03,28))).toBeTruthy();
      expect(lectionary.gospel(new Date(2000,03,29))).toBeFalsy();
      expect(lectionary.gospel(new Date(2000,06,16))).toBeTruthy();
      expect(lectionary.gospel(new Date(2000,06,17))).toBeFalsy();
      expect(lectionary.gospel(new Date(2000,09,24))).toBeTruthy();
      expect(lectionary.gospel(new Date(2000,09,25))).toBeFalsy();
      });
});
