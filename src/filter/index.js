import { includes } from "lodash";

export function formatNumber(value) {
  if (!value) return "0";
  // const val = (value / 1).toFixed(0).replace('.', ',')
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function convertAmountDecimal(amount, currency) {
  if (!amount) return "0";
  const objConvert = {
    LYNK: 2,
    CLM: 2,
    USD: 2,
    USDC: 2,
    USDT: 2,
    BNB: 5,
    ETH: 8,
    BTC: 8,
  };
  amount = amount.toString();
  if (includes(amount, ".")) {
    const afterDot = amount.substr(amount.indexOf("."));
    const _afterDotString = Number(afterDot).toFixed(objConvert[currency]);
    const _afterDot = _afterDotString.substr(
      _afterDotString.lastIndexOf(".") + 1
    );
    let _beforeDot = 0;
    const beforeDot = amount.substring(0, amount.indexOf("."));
    if (Number(_afterDotString) === 1) {
      _beforeDot = +beforeDot + 1;
    } else {
      _beforeDot = +beforeDot;
    }

    const temp = _beforeDot.toLocaleString().replaceAll(".", ",");
    return temp + "." + _afterDot;
  }
  const _value = +amount;
  return _value.toLocaleString("en-US", {
    minimumFractionDigits: objConvert[currency],
  });
}

export function formatDDMMYY(value) {
  if (!value) {
    return "";
  }
  const date = new Date(value);
  return (
    (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
    "/" +
    (date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) +
    "/" +
    date.getFullYear()
  );
}

export function formatDateHourMs(value) {
  if (!value) {
    return "";
  }
  const date = new Date(value);
  return (
    (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
    "/" +
    (date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " " +
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
    ":" +
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    ":" +
    (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds())
  );
}
export function formatMMDDYY(value) {
  if (!value) {
    return "";
  }
  const date = new Date(value);
  return (
    (date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) +
    "/" +
    (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
    "/" +
    date.getFullYear() +
    " " +
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
    ":" +
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    ":" +
    (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds())
  );
}
export function formatMMDDYYWithoutHours(value) {
  if (!value) {
    return "";
  }
  const date = new Date(value);
  return (
    (date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) +
    "/" +
    (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
    "/" +
    date.getFullYear()
  );
}

export function convertCurrency(amount) {
  if (!amount) return 0;
  return Math.abs(amount) > 999
    ? Math.sign(amount) * (Math.abs(amount) / 1000).toFixed(1) + "k"
    : Math.sign(amount) * Math.abs(amount);
}
