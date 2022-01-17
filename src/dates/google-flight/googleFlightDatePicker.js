import { useState } from "react";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";

import "./googleFlightDatePicker.css";

const GoogleFlightDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date(2020, 0, 15));
  const [endDate, setEndDate] = useState(new Date(2020, 1, 1));
  return (
    <div className="google-flight-datepicker">
      <RangeDatePicker startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default GoogleFlightDatePicker;
