import React from "react";
import Bill from "../../ui-components/bill-dialog";
import GridView from "../../ui-components/grid";
import Grid from "@material-ui/core/Grid";
import "./styles.scss";

const Home = () => {
  const mockArrayOfJsons = [
    {
      title: "First bill",
      description: "First bill description",
      date: "11/11/20",
      amount: 100.0,
    },
    {
      title: "Second bill",
      description: "Second bill description",
      date: "15/11/20",
      amount: 120.0,
    },
    {
      title: "Third bill",
      description: "Third bill description",
      date: "15/11/20",
      amount: 900.0,
    },
    {
      title: "Fourth bill",
      description: "Fourth bill description",
      date: "15/11/20",
      amount: 720.0,
    },
  ];

  return (
    <div className="home-div">
      <Grid container spacing={5}>
        {mockArrayOfJsons.map((jsonObject, idx) => {
          return (
            <GridView
              key={idx}
              content={<Bill {...jsonObject} key={idx} />}
            ></GridView>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
