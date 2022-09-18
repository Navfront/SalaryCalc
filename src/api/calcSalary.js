import { MONTHS } from './../mocks/mocks';

const calcSalary = (monthNumber = 0, { defaultRate, extraRate, holidayRate, sickRate } = null) => {
  // eslint-disable-next-line no-undef
  const result = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!localStorage.getItem('calendar') || !defaultRate) {
        reject(`Ошибка подсчета ${MONTHS[monthNumber]}`);
      }
      const workCalendar = JSON.parse(localStorage.getItem('calendar'));
      let salary = 0;

      workCalendar[monthNumber].forEach((dayItem) => {
        if (dayItem.activity > 0) {
          switch (dayItem.activity) {
            case 1:
              if (dayItem.hDay && !dayItem.extra) {
                salary = salary + Math.round(8 * holidayRate);
                break;
              }
              if (dayItem.hDay && dayItem.extra) {
                salary = salary + Math.round((8 + dayItem.extra) * holidayRate);
              }
              salary =
                dayItem.extra > 0
                  ? salary + Math.round(8 * defaultRate + dayItem.extra * extraRate)
                  : Math.round(salary + 8 * defaultRate);
              break;

            case 2:
              //болезнь
              salary = salary + Math.round(((8 * defaultRate) / 100) * sickRate);
              break;

            case 3:
              //отпуск
              salary = salary + Math.round(8 * defaultRate);
              break;

            case 4:
              //простой
              salary = salary + Math.round(((8 * defaultRate) / 3) * 2);
              break;

            default:
              break;
          }
        }
      });

      resolve(`Зарплата за ${MONTHS[monthNumber]}:${salary}`);
    }, 0);
  });

  return result;
};

export default calcSalary;
