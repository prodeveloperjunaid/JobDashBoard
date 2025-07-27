import React from "react";
import JobChart from "./dash_component/JobChart";
import Calender from "./dash_component/Calender";
import { Grid } from "@mui/material";
import ListInterview from "./dash_component/ListInterview";
import { PieChart } from "./dash_component/PieChart";
import { Cards } from "./dash_component/Cards";
import { Application } from "./dash_component/Application";

const Dashboard = () => {
  return (
    <>
      <Grid container>
        <Grid item container size={{ xs: 12, sm: 12, md: 9 }} sx={{ mb: 2 }}>
          <Grid item size={{ xs: 12, sm: 12, md: 4 }} sx={{ mb: 2 }}>
            <Cards />
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 4 }} sx={{ mb: 2 }}>
            <Cards />
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 4 }} sx={{ mb: 2 }}>
            <Cards />
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 8 }} sx={{ mb: 2 }}>
            <Application />
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 4 }} sx={{ mb: 2 }}>
            <PieChart />
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
            <JobChart />
          </Grid>
        </Grid>
        <Grid item container size={{ xs: 12, sm: 12, md: 3 }} sx={{ mb: 2 }}>
          <Grid item size={{ xs: 12, sm: 12, md: 12 }} sx={{ mb: 2 }}>
            <ListInterview />
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
            <Calender />
          </Grid>
        </Grid>
      </Grid> 
    </>
  );
};

export default Dashboard;
