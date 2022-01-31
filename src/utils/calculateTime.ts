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

const getTime = (str: string) => {
  const month = getMonth(str);
  const day = getDay(str);
  const hour = getHour(str);
  const min = getMin(str);

  return { month, day, hour, min };
};

export const calculateLeftTime = (time: string) => {
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();
  const todayHour = today.getHours();
  const todayMin = today.getMinutes();

  const endTime = getTime(time);

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
    if (endTime.month - todayMonth === 0) {
      if (endTime.day - todayDay === 0) {
        if (endTime.hour - todayHour === 0) {
          leftTime = `${endTime.min - todayMin}분`;
          break;
        } else {
          leftTime = `${endTime.hour - todayHour}시간`;
          break;
        }
      } else {
        leftTime = `${endTime.day - todayDay}일`;
        break;
      }
    } else {
      leftTime = `${endTime.day - todayDay + dayOfMonth}일`;
      break;
    }
  }
  return leftTime;
};
