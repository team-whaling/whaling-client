const getMonth = (str: string) => {
  return parseInt(str.substr(5, 5));
};

const getDay = (str: string) => {
  return parseInt(str.substr(8, 8));
};

const getHour = (str: string) => {
  return parseInt(str.substr(11, 11));
};

const getMin = (str: string) => {
  return parseInt(str.substr(14, 14));
};

export const calculateTime = (array: any) => {
  const finishedAt = array.finished_at;

  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();
  const todayHour = today.getHours();
  const todayMin = today.getMinutes();

  const finishedMonth = getMonth(finishedAt);
  const finishedDay = getDay(finishedAt);
  const finishedHour = getHour(finishedAt);
  const finishedMin = getMin(finishedAt);

  let leftTime = '';
  let dayOfMonth = 0;

  switch (todayMonth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      dayOfMonth = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      dayOfMonth = 30;
      break;
    case 2:
      dayOfMonth = 28;
      break;
  }

  while (true) {
    if (finishedMonth - todayMonth === 0) {
      if (finishedDay - todayDay === 0) {
        if (finishedHour - todayHour === 0) {
          leftTime = `${finishedMin - todayMin}분`;
          break;
        } else {
          leftTime = `${finishedHour - todayHour}시간`;
          break;
        }
      } else {
        leftTime = `${finishedDay - todayDay}일`;
      }
    } else {
      leftTime = `${finishedDay - todayDay + dayOfMonth}일`;
    }
  }
  return leftTime;
};
