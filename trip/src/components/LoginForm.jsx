import React from 'react';
import { TextField } from "@material-ui/core";

const LoginForm = () => {
  return (
    <div>
      <form>
        <TextField label="Email Address" margin="normal" fullWidth />
        <TextField label="Password" margin="normal" fullWidth type="password" />
      </form>
    </div>
  )
}

export default LoginForm;
