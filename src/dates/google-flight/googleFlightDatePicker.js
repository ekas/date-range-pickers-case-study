import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";

import "./googleFlightDatePicker.css";

const GoogleFlightDatePicker = () => {
  return (
    <div className="google-flight-datepicker">
      <RangeDatePicker
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 1)}
      />
    </div>
  );
};

export default GoogleFlightDatePicker;
