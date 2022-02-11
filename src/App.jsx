import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';

const App = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [isShowModal, setIsShowModal] = useState(false);

  const weekDates = generateWeekRange(getWeekStartDate(currentWeek));

  const toPrevWeek = () => setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() - 7)));

  const toNextWeek = () => setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() + 7)));

  const onToday = () => setCurrentWeek(new Date());

  const handleModal = () => setIsShowModal(!isShowModal);

  return (
    <>
      <Header
        weekDates={weekDates}
        toNextWeek={toNextWeek}
        toPrevWeek={toPrevWeek}
        onToday={onToday}
        handleModal={handleModal}
      />
      <Calendar weekDates={weekDates} handleModal={handleModal} isShowModal={isShowModal} />
    </>
  );
};

export default App;
