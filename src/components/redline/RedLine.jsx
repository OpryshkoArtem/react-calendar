import React, { useEffect, useState } from "react";
import "./redLine.scss";

const RedLine = () => {
  const [timeLine, setTimeLine] = useState({
    marginTop: new Date().getMinutes() + new Date().getHours() * (60 - 1),
  });

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimeLine({
        marginTop: new Date().getMinutes() + new Date().getHours() * (60 - 1),
      });
    }, 60000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="red-line" style={timeLine}>
      <div className="circle"></div>
    </div>
  );
};

export default RedLine;
