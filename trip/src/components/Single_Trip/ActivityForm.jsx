// import React from 'react';

// const ActivityForm = () => {
//   return (
//     <section>
//       Activity form:
//     </section>
//   )
// }

// export default ActivityForm;

import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const ActivityForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cost, setCost] = useState(0);
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, such as sending it to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Activity Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Activity Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Activity Cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        type="number"
        fullWidth
        margin="normal"
      />
      {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          label="Activity Date and Time"
          value={date}
          onChange={(newDate) => setDate(newDate)}
          fullWidth
          margin="normal"
        />
      </MuiPickersUtilsProvider> */}
      <TextField
        label="Activity Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default ActivityForm;