import { isIdCard, getIdCardInfo, generateIdCard } from "../src/index";

describe("idcard", () => {
  test("check idcard", () => {
    expect(isIdCard("434432198099887761")).toBe(false);
  });

  test("generate idcard", () => {
    const idCardNo = generateIdCard();
    expect(isIdCard(idCardNo)).toBe(true);
  });

  test("get idcard info", () => {
    const info = getIdCardInfo("610927201106046693");
    console.log(info);
    expect(info).toBeTruthy();
  });
});
