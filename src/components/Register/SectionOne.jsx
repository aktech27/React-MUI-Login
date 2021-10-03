import React from "react";
import { Grid, Typography } from "@material-ui/core";
import RegisterInput from "./RegisterInput";
const SectionOne = ({ setSection1Details, section1Details }) => {
  return (
    <>
      <div>
        <Typography variant="h4" align="center">
          Registration
        </Typography>
        <Typography variant="subtitle1" align="center">
          Enter Personal Details
        </Typography>
      </div>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
          <RegisterInput
            id="firstName"
            label="First Name"
            placeholder="Enter first name"
            type="text"
            validationType="name"
            setState={setSection1Details}
            defaultValue={section1Details.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
          <RegisterInput
            id="lastName"
            label="Last Name"
            placeholder="Enter last name"
            type="text"
            validationType="name"
            setState={setSection1Details}
            defaultValue={section1Details.lastName}
          />
        </Grid>
        <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
          <RegisterInput
            id="email"
            label="Email"
            placeholder="Enter email"
            type="text"
            validationType="email"
            setState={setSection1Details}
            defaultValue={section1Details.email}
          />
        </Grid>
        <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
          <RegisterInput
            id="phone"
            label="Phone"
            placeholder="Enter phone number"
            type="text"
            validationType="phone"
            setState={setSection1Details}
            defaultValue={section1Details.phone}
          />
        </Grid>
        <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
          <RegisterInput
            id="password"
            label="Password"
            placeholder="Enter password"
            type="password"
            validationType="password"
            setState={setSection1Details}
            defaultValue={section1Details.password}
          />
        </Grid>
        <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
          <RegisterInput
            id="confirmPassword"
            label="Confirm Password"
            placeholder="Re-enter password"
            type="password"
            validationType="confirmpassword"
            setState={setSection1Details}
            defaultValue={section1Details.confirmPassword}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SectionOne;
