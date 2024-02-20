import React, { useState } from "react";
import { toast } from "react-toastify";
import "../../assets/css/style.css";

import {
  Modal,
  Box,
  Typography,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

function ContactModal({ open, handleClose }) {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    selection: "",
    message: "",
    city: "",
    state: "",
    Landmark: "",
    address: "",
    capacity: "",
    harvestingSession: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "mobileNumber" && !/^[0-9]*$/.test(value)) return;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name =
      /^[a-zA-Z ]+$/.test(formData.name) || formData.name === ""
        ? ""
        : "Only characters are allowed.";
    tempErrors.mobileNumber = /^[0-9]*$/.test(formData.mobileNumber)
      ? ""
      : "Only numbers are allowed.";
    tempErrors.email =
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formData.email) ||
      formData.email === ""
        ? ""
        : "Email is not valid.";
    // tempErrors.selection = formData.selection ? "" : "This field is required.";
    // tempErrors.message = formData.message ? "" : "This field is required.";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    const dataToSend = {
      ...formData,
      user_type: formData.selection === "isFarmer" ? "Farmer" : "Consumer/Vendor",
    };

    try {
      const url = "https://sheet.best/api/sheets/fc9acac8-bbcf-449d-9dda-ad477776bd62";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([dataToSend]),
      });

      if (response.ok) {
        setFormData({
          name: "",
          mobileNumber: "",
          email: "",
          selection: "",
          message: "",
          city: "",
          state: "",
          landmark: "",
          address: "",
          capacity: "",
          harvestingSession: "",
        });
        toast.success("Data Saved Successfully!!!", {
          classNames: "toast-message-success",
        });

        handleClose();
      } else {
        toast.error("Error In Saving Data", {
          className: "toast-message-error",
        });
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
          maxHeight: "90vh", // 90% of the viewport height
          overflowY: "auto",
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
            error={!!errors.name}
            helperText={errors.name}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="mobileNumber"
            label="Mobile Number"
            variant="outlined"
            value={formData.mobileNumber}
            onChange={handleChange}
            error={!!errors.mobileNumber}
            helperText={errors.mobileNumber}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="email"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            margin="normal"
            name="city"
            label="City"
            variant="outlined"
            value={formData.city}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="state"
            label="State"
            variant="outlined"
            value={formData.state}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="landmark"
            label="Landmark"
            variant="outlined"
            value={formData.landmark}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="address"
            label="Address"
            variant="outlined"
            value={formData.address}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="harvestingSession"
            label="Harvesting Session"
            variant="outlined"
            value={formData.harvestingSession}
            onChange={handleChange}
            error={!!errors.harvestingSession}
            helperText={errors.harvestingSession}
          />
          <TextField
            fullWidth
            margin="normal"
            name="capacity"
            label="Capacity (in ton)"
            variant="outlined"
            value={formData.capacity}
            onChange={handleChange}
            error={!!errors.capacity}
            helperText={errors.capacity}
          />
          <RadioGroup name="selection" value={formData.selection} onChange={handleChange}>
            <FormControlLabel value="isFarmer" control={<Radio />} label="Farmer" />
            <FormControlLabel
              value="isConsumerVendor"
              control={<Radio />}
              label="Consumer/Vendor"
            />
          </RadioGroup>
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
            error={!!errors.message}
            helperText={errors.message}
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
