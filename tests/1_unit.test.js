const Business = require("../components/business");
describe("1. Testes de unidade", () => {
  describe("1.1 Função de média de notas", () => {
    test("Uma média aí", () => {
      expect(parseFloat(Business.average(6.5, 7.2, 8.4))).toBe(7.7);
    });
    test("Uma média aí", () => {
      expect(parseFloat(Business.average(5.0, 6.0, 7.0))).toBe(6.3);
    });
    test("Uma média aí", () => {
      expect(parseFloat(Business.average(5.0, 10.0, 10.0))).toBe(9.0);
    });
    test("Uma média aí", () => {
      expect(parseFloat(Business.average(10.0, 10.0, 5.0))).toBe(7.5);
    });
  });
  describe("1.2 Função de diferença de tempo", () => {
    test("Um tempo ai", () => {
      expect(Business.time_delta(7, 8, 9, 10)).toStrictEqual({
        deltaH: 2,
        deltaM: 2,
      });
    });
    test("Um tempo ai", () => {
      expect(Business.time_delta(7, 7, 7, 7)).toStrictEqual({
        deltaH: 24,
        deltaM: 0,
      });
    });
    test("Um tempo ai", () => {
      expect(Business.time_delta(7, 10, 8, 9)).toStrictEqual({
        deltaH: 0,
        deltaM: 59,
      });
    });
  });
});
