import React from 'react';
import Event from '../event/Event';
import PropTypes from 'prop-types';

const Hour = ({ dataHour, hourEvents, removeEventHandler }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {hourEvents.map(({ id, ...hourEvent }) => {
        return <Event key={id} id={id} {...hourEvent} removeEventHandler={removeEventHandler} />;
      })}
    </div>
  );
};

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
  removeEventHandler: PropTypes.func.isRequired,
};
export default Hour;
