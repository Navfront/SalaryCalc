import moment from 'moment';

export default class DaysDataGenerator {

  async getData() {
    const year = new Date().getFullYear();
    return this._getDataArrayWithHDays(this._getWorkDaysDataArray(year), await this._getLocalHolidaysData(new Date().getFullYear()));
  }

  async _getHolidaysFetch(year) {
    const fData = await fetch(`https://isdayoff.ru/api/getdata?date1=${year}0101&date2=${year}1231`);
    const result = await fData.text();
    return result;


  }


  async _getLocalHolidaysData(year) {
    const localName = `holidays-${year}`;
    const localData = localStorage.getItem(localName);
    if (localData) {
      return localData;
    } else {
      const fetchData = await this._getHolidaysFetch(year);
      localStorage.setItem(localName, fetchData);
      return fetchData;
    }

  }

  _getOffsetFirstDayInMonth (year, month) {
    const result = moment(`${year}${month < 10 ? `0${month}` : month}`).day();
    return result === 0 ? 7 : result;
  }

  _getCountOfDaysInMonth = (year, month) =>
    moment(`${year}${month < 10 ? `0${month}` : month}`, 'YYYYMM').daysInMonth();

  _isNotWorkingDay = (year, month, day) => {
    if (day < 1) {
      return false;
    }
    const fYear = `${year}`;
    const fMonth = `${month < 10 ? `0${month}` : month}`;
    const fDay = `${day < 10 ? `0${day}` : day}`;

    if (moment(`${fYear}${fMonth}${fDay}`).day() === 0 || moment(`${fYear}${fMonth}${fDay}`).day() === 6) {
      return true;
    }
    return false;
  }

 _getWorkDaysDataArray = (year) => {
   let dayCounter = 0;
   const initArray = new Array(12).fill(new Array(42).fill({ hDay: null }), 0, 12);
   const result = initArray.map((arrMonth, monthIndex) => {
     let dayNumber = 1;
     const maxDays = this._getCountOfDaysInMonth(year, monthIndex + 1);
     const offSetDays = this._getOffsetFirstDayInMonth(year, monthIndex + 1);
     return arrMonth.map((objDay, index) => {
       if (index < offSetDays - 1 || index > maxDays + offSetDays - 2) {
         return { ...objDay, day: null };
       } else {
         return {
           ...objDay,
           day: dayNumber++,
           hDay: this._isNotWorkingDay(year, monthIndex + 1, index - offSetDays + 2),
           dayIndex: ++dayCounter,
         };
       }
     });
   });

   return result;
 };

  _getDataArrayWithHDays = (array, holydaysString) => {
    const hDaysArray = [...holydaysString].map((item) => item !== '0');
    let counter = 0;
    const result = array.map((arr) =>
      arr.map((item) => {
        if (item.dayIndex) {
          return { ...item, hDay: hDaysArray[counter++] };
        }
        return item;
      })
    );
    return result;
  };

}
