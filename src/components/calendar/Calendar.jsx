import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import { getEvents, deleteEvents } from '../../gateway/events';
import Modal from '../modal/Modal';
import './calendar.scss';
import PropTypes from 'prop-types';

const Calendar = ({ weekDates, handleModal, isShowModal }) => {
  const [events, setEvents] = useState([]);

  const getEventsList = () => {
    getEvents().then(events => {
      const weekDate = weekDates.map(el => moment(el).format('MMMM DD YYYY'));
      const newEvents = events.filter(({ dateFrom }) =>
        weekDate.includes(moment(dateFrom).format('MMMM DD YYYY')),
      );
      setEvents(newEvents);
    });
  };

  const removeEventHandler = id => {
    deleteEvents(id).then(() => getEventsList());
  };

  useEffect(() => {
    getEventsList();
  }, []);

  return (
    <section className="calendar">
      <header className="calendar__header">
        {weekDates.map(dayDate => (
          <Navigation key={dayDate.getDay()} dayDate={dayDate} />
        ))}
      </header>
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />

          <Week weekDates={weekDates} events={events} removeEventHandler={removeEventHandler} />
        </div>
      </div>
      {isShowModal && <Modal modalWindow={handleModal} getEventsList={getEventsList} />}
    </section>
  );
};

Calendar.propTypes = {
  isShowModal: PropTypes.bool,
  handleModal: PropTypes.func.isRequired,
  weekDates: PropTypes.array.isRequired,
};

export default Calendar;
