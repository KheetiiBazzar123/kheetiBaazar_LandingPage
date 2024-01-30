import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
// spreadsheetId
// 1Eo3rgmy10jKsZXQi9N83zQSJ8XmNt8940rB05p455VE
// https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0
function ContactModal({ open, handleClose }) {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    isFarmer: false,
    isConsumerVendor: false,
    message: "",
  });

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = "https://sheetdb.io/api/v1/stmc2ym9veha5";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Wrap formData in an array
        body: JSON.stringify([formData]),
      });

      if (response.ok) {
        console.log("Data successfully saved to Google Sheet");
        handleClose();
      } else {
        console.error("Error saving data: ", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            name="name"
            label="Name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="mobileNumber"
            label="Mobile Number"
            variant="outlined"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="email"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Checkbox checked={formData.isFarmer} onChange={handleChange} name="isFarmer" />
            }
            label="Farmer"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.isConsumerVendor}
                onChange={handleChange}
                name="isConsumerVendor"
              />
            }
            label="Consumer/Vendor"
          />
          <TextField
            fullWidth
            margin="normal"
            name="message"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            value={formData.message}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
            style={{ backgroundColor: "#6750A4", color: "#fff" }}
          >
            Submit
          </Button>
          <Button variant="text" onClick={handleClose}>
            Close
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

ContactModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ContactModal;
