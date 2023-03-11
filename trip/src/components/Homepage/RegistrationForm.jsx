import React from 'react';
import { TextField } from "@material-ui/core";

const RegistrationForm = () => {
  return (
    <div>
      <form>
        <TextField label="Name" margin="normal" fullWidth />
        <TextField label="Email Address" margin="normal" fullWidth />
        <TextField label="Password" margin="normal" fullWidth type="password" />
        <TextField label="Confirm Password" margin="normal" fullWidth type="password" />
      </form>
    </div>
  )
}

export default RegistrationForm;
