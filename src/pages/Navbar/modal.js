import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Modal,
  Box,
  Typography,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  useMediaQuery,
  useTheme,
  Backdrop,
} from "@mui/material";
import PropTypes from "prop-types";

function ContactModal({ open, handleClose: close }) {
  const initialFormData = {
    name: "",
    mobileNumber: "",
    email: "",
    selection: "Farmer",
    message: "",
    city: "",
    state: "",
    landmark: "",
    address: "",
    capacity: "",
    harvestingSession: "",
  };

  const requiredFields = ["name", "mobileNumber", "selection"];

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value.trim() !== "" && errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleClose = () => {
    setFormData(initialFormData);
    setErrors({});
    close();
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!/^\d+$/.test(formData.mobileNumber) || !formData.mobileNumber.trim())
      tempErrors.mobileNumber = "Mobile number is required and must be valid.";
    if (!formData.selection.trim()) tempErrors.selection = "Please select a role.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) {
      toast.warning("Please correct the errors before submitting.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          fontSize: "13px",
        },
      });
      return;
    }

    const formBody = Object.keys(formData)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(formData[key]))
      .join("&");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxpTApiOCO0eJQpyyII-KE4nGI0LIX3JILlxSojWbH8iir-Ejm1kMPl1OT5fxizyWGd/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formBody,
        }
      );

      if (response.ok) {
        toast.success("Data saved successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            fontSize: "13px",
          },
        });
        handleClose();
      } else {
        toast.error("Failed to save data. Please try again.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            fontSize: "13px",
          },
        });
      }
    } catch (error) {
      toast.error("Network error, Failed to save data. Please try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          fontSize: "13px",
        },
      });
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      fullScreen={fullScreen}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        style: { backgroundColor: "rgba(255, 255, 255, 0.4)", backdropFilter: "blur(3px)" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "100%", sm: "100%", md: 600 },
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          overflowY: "auto",
          maxHeight: "90vh",
        }}
      >
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) =>
            key !== "selection" ? (
              <TextField
                key={key}
                fullWidth
                margin="normal"
                name={key}
                label={
                  key.charAt(0).toUpperCase() +
                  key
                    .slice(1)
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                }
                variant="outlined"
                value={formData[key]}
                onChange={handleChange}
                error={!!errors[key]}
                helperText={errors[key]}
                required={requiredFields.includes(key)}
              />
            ) : (
              <RadioGroup key={key} name={key} value={formData[key]} onChange={handleChange} row>
                <FormControlLabel value="isFarmer" control={<Radio />} label="Farmer" />
                <FormControlLabel
                  value="Consumer/Vendor"
                  control={<Radio />}
                  label="Consumer/Vendor"
                />
              </RadioGroup>
            )
          )}
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, mb: 2, backgroundColor: "#6750A4", color: "#fff" }}
          >
            Submit
          </Button>
          <Button variant="text" onClick={handleClose} sx={{ ml: 2 }}>
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
