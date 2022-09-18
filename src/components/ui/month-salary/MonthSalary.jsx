import { StyledMonthSalary } from './styled';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import calcSalary from './../../../api/calcSalary';


function MonthSalary({month}) {
  const ratesObject = useSelector((state) => state.ratesReducer);
  const app = useSelector((state) => state.appReducer);
  const [monthSalary, setMonthSalary] = useState({ loading: false, data: 'Загрузка...' });


  useEffect(() => {
    setMonthSalary({ ...monthSalary, loading: true });
    calcSalary(month, ratesObject)
      .then((res) => {
        setMonthSalary({ loading: false, data: res });
      })
      .catch((err) => {
        setMonthSalary({ loading: false, data: err });
      });

  }, [app.popup.isOpen, ratesObject]);

  return <StyledMonthSalary>{monthSalary.data}</StyledMonthSalary>;
}

export default MonthSalary;
