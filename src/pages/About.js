import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        This restaurant was built since 1970, and it was initially a small restaurant that included certain meals. 
        Over the years, the place was developed and the meals were developed, taking care of high quality.
         With the passage of time, our reputation increased a
         lot because of the advanced performance and wonderful dealings with customers.
        </p>
        <br />
        <p>
        This restaurant offers a wide variety of items, 
        as well as many types of sweets, salads,
         and appetizers with all kinds of flavors. We also have a service to deliver
          orders to customers as quickly as possible.
Our basic motto is always customer satisfaction and providing the highest quality
        </p>
      </Box>
    </Layout>
  );
};

export default About;
