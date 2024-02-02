import React from "react";
import { Button } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { 
        main: '#004986',
    }
  },
});
export default function UploadButton() {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        fullWidth
        color="primary"
        sx={{ 
            height: 150, 
            width: 150
        }}
        startIcon={<AddPhotoAlternateIcon />}
      >
        Image Upload
      </Button>
    </ThemeProvider>
  );
}
