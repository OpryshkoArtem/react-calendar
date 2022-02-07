import React, { Component } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
// import moment from "moment";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";
class App extends Component {
  state = {
    weekStartDate: new Date(),
  };

	onToday = () => {
		this.setState({
			weekStartDate: new Date(),
		});
	};

  nextMonth = () => {
    const { weekStartDate } = this.state;
    this.setState({
      weekStartDate: new Date(weekStartDate.setDate(weekStartDate.getDate() + 7)),
    });
  };

  prevMonth = () => {
    const { weekStartDate } = this.state;
    this.setState({
      weekStartDate: new Date(weekStartDate.setDate(weekStartDate.getDate() - 7)),
    });
  };

  render() {
    const { weekStartDate } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    return (
      <>
        <Header next={this.nextMonth} prev={this.prevMonth} onToday={this.onToday} weekDates={weekDates} />
        <Calendar weekDates={weekDates} />
      </>
    );
  }
}

export default App;
