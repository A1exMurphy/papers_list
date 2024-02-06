import React from "react";
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import Input from "@mui/material/Input";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004986",
    },
  },
});
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
export default function UploadButton() {
  return (
    <ThemeProvider theme={theme}>
      <Button
        type="file"
        variant="contained"
        color="primary"
        sx={{
          height: 220,
          width: 190
        }}
        startIcon={<AddPhotoAlternateIcon />}
      >
        Image Upload
        <VisuallyHiddenInput type="file" />
      </Button>
    </ThemeProvider>
  );
}
