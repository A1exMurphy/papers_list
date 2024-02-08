import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import {
  TextField,
  Stack,
  Divider,
  FormControl,
  FormLabel,
  ListItemText,
  Input,
} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004986",
    },
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function EditEvent() {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const editEvent = useSelector((store) => store.editEvent);
  const editTag = useSelector((store) => store.editTag);
  const eventForm = new FormData();
  console.log("edit event", editEvent);

  useEffect(() => {
    dispatch({
      type: "FETCH_EVENT_TO_EDIT",
      payload: params.id,
    });
  }, []);
  const handleTagChange = (tag) => {
    dispatch({
      type: "CHANGE_TAG_NAME",
      payload: tag,
    });
  };
  const handleHostNameChange = (host) => {
    dispatch({
      type: "CHANGE_HOST_NAME",
      payload: host,
    });
  };

  const handleEventNameChange = (event_name) => {
    dispatch({
      type: "CHANGE_EVENT_NAME",
      payload: event_name,
    });
  };

  const handleCostChange = (cost) => {
    dispatch({
      type: "CHANGE_COST",
      payload: cost,
    });
  };

  const handleTimeChange = (time) => {
    dispatch({
      type: "CHANGE_TIME",
      payload: time,
    });
  };

  const handleLocationChange = (location) => {
    dispatch({
      type: "CHANGE_LOCATION",
      payload: location,
    });
  };

  const handleDescriptionChange = (description) => {
    dispatch({
      type: "CHANGE_DESCRIPTION",
      payload: description,
    });
  };

  const handleWebsiteChange = (website) => {
    dispatch({
      type: "CHANGE_WEBSITE",
      payload: website,
    });
  };

  const handleEventSizeChange = (event_size) => {
    dispatch({
      type: "CHANGE_EVENT_SIZE",
      payload: event_size,
    });
  };

  const handleImageChange = (image) => {
    dispatch({
      type: "CHANGE_IMAGE",
      payload: image,
    });
  };

  const handleStatusChange = (adminStatus) => {
    dispatch({
      type: "UPDATE_STATUS",
      payload: adminStatus,
    });
  };
  const backToArchive = (e) => {
    history.push("/eventarchive");
  };
  const removeEvent = (e) => {
    dispatch({
      type: "SET_REMOVED_EVENTS",
    });
  };
  const applyEdits = (e) => {
    e.preventDefault();

    dispatch({
      type: "SUBMIT_EVENT_EDIT",
      payload: editEvent,
    });

    history.push("/eventarchive");
    // setAdminStatus("");
  };

  return (
    <>
      <h1 className="admin-event">Admin Edit Event</h1>
      <div className="event-form">
        <form>
          <FormControl>
            <Stack
              spacing={2}
              direction="row"
              sx={{ marginBottom: 4 }}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Input
                id="event-image-input"
                type="text"
                value={editEvent.image || ""}
                onChange={(e) => handleImageChange(e.target.files[0])}
                sx={{
                  width: 230,
                }}
              />
              <TextField
                id="event-description-input"
                helperText="Brief description of event"
                type="text"
                variant="filled"
                label="Description"
                onChange={(e) => handleDescriptionChange(e.target.value)}
                value={editEvent.description || ""}
                sx={{
                  marginBottom: 4,
                  width: 230,
                }}
                multiline
                minRows={8}
                required
              />
             
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              sx={{ marginBottom: 4 }}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <TextField
                id="event-name-input"
                helperText="Name of your event"
                type="text"
                variant="filled"
                label="Event Name"
                onChange={(e) => handleEventNameChange(e.target.value)}
                value={editEvent.event_name || ""}
                fullWidth
                required
              />
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              sx={{ marginBottom: 4 }}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <TextField
                type="text"
                helperText="Organization / Person hosting"
                variant="filled"
                label="Hosted By"
                size="small"
                id="event-host-input"
                onChange={(e) => handleHostNameChange(e.target.value)}
                value={editEvent.host || ""}
                sx={{ width: 230 }}
                required
              />
              <TextField
                id="event-website-input"
                type="text"
                value={editEvent.website || ""}
                onChange={(e) => handleWebsiteChange(e.target.value)}
                sx={{
                  width: 230,
                }}
              />
              <TextField
                type="date"
                helperText="Date of event"
                variant="filled"
                size="small"
                id="event-date-input"
                onChange={(e) => handleTimeChange(e.target.value)}
                value={editEvent.time || ""}
                sx={{ width: 230 }}
                required
              />
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              sx={{ marginBottom: 4 }}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <TextField
                helperText="Where the event will be held (e.g. Merriot Hotel Minneapolis, MN)"
                type="text"
                variant="filled"
                label="Location"
                size="small"
                id="event-location-input"
                onChange={(e) => handleLocationChange(e.target.value)}
                value={editEvent.location || ""}
                sx={{ width: 230 }}
                required
              />
              {/* <Box sx={{ midWidth: 120 }}>
                <FormControl sx={{ width: 200 }}>
                  <InputLabel id="tag-input-label">Tags</InputLabel>
                  <Select
                    multiple
                    input={<OutlinedInput label="Tag" />}
                    id="event-tag-input"
                    onChange={(e) => handleTagChange(e.target.value)}
                    value={editEvent.tag || ""}
                    sx={{ width: 230 }}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {tagData &&
                      tagData.map((tag) => {
                        return (
                          <MenuItem key={tag.id} value={tag.tag_name}>
                            <Checkbox
                              checked={tag.indexOf(tag.tag_name) > -1}
                            />
                            <ListItemText primary={tag.tag_name} />
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Box> */}
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              sx={{ marginBottom: 4 }}
              divider={<Divider orientation="vertical" flexItem />}
            ></Stack>
            <Stack
              spacing={2}
              direction="row"
              sx={{ marginBottom: 4 }}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Box sx={{ midWidth: 230 }}>
                <FormControl sx={{ width: 230 }}>
                  <InputLabel id="event-size-input-label">
                    Event Size
                  </InputLabel>
                  <Select
                    label="Event Size"
                    id="event-size-input"
                    onChange={(e) => handleEventSizeChange(e.target.value)}
                    value={editEvent.event_size || ""}
                    sx={{ width: 230 }}
                  >
                    <MenuItem value={"small"}>Small (5 - 25 people)</MenuItem>
                    <MenuItem value={"medium"}>
                      Medium (26 - 100 people)
                    </MenuItem>
                    <MenuItem value={"large"}>Large (100+ people)</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ midWidth: 120 }}>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel id="event-cost-input-label">Cost</InputLabel>
                  <Select
                    label="Cost"
                    id="event-cost-input"
                    onChange={(e) => handleCostChange(e.target.value)}
                    value={editEvent.cost || ""}
                    sx={{ width: 230 }}
                    required
                  >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>Free</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              sx={{ marginBottom: 4 }}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  onClick={backToArchive}
                  className="discard-btn"
                  sx={{ width: 155 }}
                >
                  <ArrowBackIcon />
                  Back
                </Button>
                <Box sx={{ midWidth: 155 }}>
                  <FormControl sx={{ width: 155 }}>
                    <InputLabel id="event-approval-label">Status</InputLabel>
                    <Select
                      label="Status"
                      id="event-approval"
                      onChange={(e) => handleStatusChange(e.target.value)}
                      value={editEvent.admin_approved || ""}
                      sx={{ width: 155 }}
                    >
                      <MenuItem value={"approved"}>Approve</MenuItem>
                      <MenuItem value={"delete"}>Delete</MenuItem>
                      <MenuItem value={"pending"}>Pending</MenuItem>
                      Apply Changes
                    </Select>
                  </FormControl>
                </Box>
                <Button
                  variant="contained"
                  type="onClick"
                  onClick={applyEdits}
                  sx={{ width: 155 }}
                >
                  Save Changes
                </Button>
              </ThemeProvider>
            </Stack>
          </FormControl>
        </form>
      </div>
    </>
  );
}
