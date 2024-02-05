import React from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import './Footer.css';

function Footer() {
  const defaultTheme = createTheme();
  return (
    <>
      <footer>{'Copyright © '}
      {new Date().getFullYear()}
      {' Networking4Greatness'}</footer>
    </>
  );
}

export default Footer;
