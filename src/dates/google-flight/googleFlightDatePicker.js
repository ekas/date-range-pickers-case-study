import { useState } from "react";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";

import "./googleFlightDatePicker.css";

const GoogleFlightDatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div className="google-flight-datepicker">
      <RangeDatePicker
        startDate={startDate}
        endDate={endDate}
        onChange={(startDate, endDate) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        highlightToday={true}
      />
    </div>
  );
};

export default GoogleFlightDatePicker;
