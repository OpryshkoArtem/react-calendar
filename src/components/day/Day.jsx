import React from 'react';
import moment from 'moment';
import Hour from '../hour/Hour.jsx';

import PropTypes from 'prop-types';
import RedLine from '../redline/RedLine.jsx';

const Day = ({ dayEvents, removeEventHandler, dayStart }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);
  const redLineCurrentDay =
    moment(dayStart).format('MMMM DD YYYY') == moment(new Date()).format('MMMM DD YYYY');
  const dataDay = dayStart.getDate();

  return (
    <div className="calendar__day" data-day={dataDay}>
      {redLineCurrentDay && <RedLine />}
      {hours.map(hour => {
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            removeEventHandler={removeEventHandler}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dayEvents: PropTypes.array.isRequired,
  removeEventHandler: PropTypes.func.isRequired,
};

export default Day;
