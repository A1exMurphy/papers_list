import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004986",
    },
  },
});

function LoginPage() {
  const history = useHistory();

  return (
    <div>

      <center>
      <LoginForm />
        <ThemeProvider theme={theme}>
        <Button
          type="button"
          className="btn btn_asLink"
          variant="contained"
          sx={{ width: 100 }}
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
        </ThemeProvider>
      </center>
    </div>
  );
}

export default LoginPage;
