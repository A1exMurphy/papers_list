import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import {
  TextField,
  Stack,
  Divider,
  FormControl,
  FormLabel,
  ListItemText,
} from "@mui/material";
import "./LoginForm.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004986",
    },
  },
});

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: "LOGIN",
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
       
      <Stack
        spacing={2}
        direction="column"
        sx={{ marginBottom: 4 }}
        divider={<Divider orientation="vertical" flexItem />}
      >
          <h2 className="login-head">Admin Login</h2>
       
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}

        <TextField
          type="text"
          label="username"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <TextField
          type="password"
          label="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
<center>
        <ThemeProvider theme={theme}>
          <Button type="submit" name="submit" variant="contained"
          sx={{ width: 100 }}>
            Log In
          </Button>
        </ThemeProvider>
        </center>
      </Stack>
    </form>
  );
}

export default LoginForm;
