import { areas } from "./data/idCard";
import { getParityBit } from "./internal/idCard";

function randomAreaCode(): string {
  const areaCodes = Object.keys(areas);
  const length = areaCodes.length;
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
  minDate?: Date;
  maxDate?: Date;
};

/**
 * 生成一个18位身份证号码
 * @param options 可选配置项
 * @returns
 */
function generateIdCard(options?: Options): string {
  const { minDate = new Date(0), maxDate = new Date() } = options || {};

  let idCardNo =
    randomAreaCode() + randomBirthday(minDate, maxDate) + randomSeriesNo();
  idCardNo = idCardNo + getParityBit(idCardNo);

  return idCardNo;
}

export default generateIdCard;
