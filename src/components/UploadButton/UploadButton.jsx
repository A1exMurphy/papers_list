import React from 'react';
import { Button } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function UploadButton() {
    return (
      <Button       
      variant="contained"
      color="primary"
      fullWidth
      sx = {{ height: 50 }}
      startIcon={<AddPhotoAlternateIcon/>}>
        Image Upload
      </Button>
    );
  }
  