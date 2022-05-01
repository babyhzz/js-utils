import { areas } from "./data/idCard";
import { getParityBit } from "./internal/idCard";

function randomAreaCode(): string {
  const areaCodes = Object.keys(areas);
  const { length } = areaCodes;
  return areaCodes[Math.floor(Math.random() * length)];
}

function randomBirthday(minDate: Date, maxDate: Date): string {
  const beginTime = minDate.getTime();
  const endTime = maxDate.getTime();

  const time = beginTime + (endTime - beginTime) * Math.random();
  const date = new Date(time);

  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}${month}${day}`;
}

function randomSeriesNo() {
  return Math.ceil(Math.random() * 999)
    .toString()
    .padStart(3, "0");
}

type Options = {
  /* 默认为 1970-01-01T00:00:00 时间 */
  minDate?: Date;
  /* 默认为当前时间 */
  maxDate?: Date;
};

/**
 * 生成一个18位身份证号码
 * @param options 可选配置项
 * @returns
 */
function generateIdCard(options?: Options): string {
  const { minDate = new Date(0), maxDate = new Date() } = options || {};

  let idCardNo = randomAreaCode();
  idCardNo += randomBirthday(minDate, maxDate);
  idCardNo += randomSeriesNo();
  idCardNo += getParityBit(idCardNo);

  return idCardNo;
}

export default generateIdCard;
