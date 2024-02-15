import React from "react";
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Box from "@mui/material/Box";
import { FormControl } from "@mui/material";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import './MuiSelect.css';
export default function MuiSelect() {
    let [tagInput, setTagInput] = useState('')

    return (
        <>
            <div className="pls-work">
            <Box sx={{ midWidth: 120 }}>
                <FormControl variant="filled" sx={{ width: 200 }}>
                  <InputLabel id="event-size-input-label">
                    Tags
                  </InputLabel>
                  <Select
                    label="Tags"
                    id="event-size-input"
                    onChange={(e) => setTagInput(e.target.value)}
                    value={tagInput}
                    sx={{ backgroundColor: "white", width: 200 }}
                  >
                    <MenuItem value={"tech"}>Tech</MenuItem>
                    <MenuItem value={"women only"}>Women Only</MenuItem>
                    <MenuItem value={"others"}>Others</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
        </>
    )
}