import { isMobilePhone } from "../src/index";

describe("isMobilePhone", () => {
  test("it should be true", () => {
    expect(isMobilePhone("+8613998773333")).toBe(true);
    expect(isMobilePhone("008613998773333")).toBe(true);
    expect(isMobilePhone("19298773333")).toBe(true);
  });

  test("it should be false", () => {
    expect(isMobilePhone("+008613998773333")).toBe(false);
    expect(isMobilePhone("1234567890")).toBe(false);
  });
});
