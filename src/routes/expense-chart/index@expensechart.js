

export const get = () => {
  return {
    status: 200,
    body: {
      account: {
        currentBalance: 92148
      },
      transactions: createTransactions()
    }
  }
}

function createDates() {
  const randomHour = () => Math.floor(Math.random() * (16 - 8 + 1) + 8);
  const randomMin = () => Math.floor(Math.random() * 60)

  const D = new Date()
  let [y, m, d] = [
    D.getFullYear(),
    D.getMonth(),
    D.getDate()
  ];
  const lastDate = new Date(y, m, 0).getDate();
  m -= 1;
  d += lastDate;

  const res = [];

  for (let _d = 1; _d <= d; _d++) {
    res.push(new Date(y, m, _d, randomHour(), randomMin()).getTime())
  }

  return res;
}

function randomCharge() {
  let str = '';

  while (str.length < 4) {
    str += Math.floor(Math.random() * 10);
  }

  return parseInt(str);
}

function createTransactions() {
  const dates = createDates();

  return dates.reduce((res, date) => {
    res.push({
      date,
      amount: randomCharge()
    });
    return res;
  }, [])
}