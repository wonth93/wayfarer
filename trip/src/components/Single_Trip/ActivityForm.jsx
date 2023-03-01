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
import { useGlobalContext } from "../../context";

const ActivityForm = () => {
  const { loggedUser } = useGlobalContext();

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
      <TextField
        id="date"
        label="Activity Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
        halfWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
    id="time"
    label="Activity Time"
    type="time"
    defaultValue="07:30"
    InputLabelProps={{
      shrink: true,
    }}
    halfWidth
        margin="normal"
    inputProps={{
      step: 300, // 5 min
    }}
  />
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