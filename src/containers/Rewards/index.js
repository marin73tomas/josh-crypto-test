import React, { useState } from "react";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
import CircularProgressBar from "../../components/CircleProgressBar";
//import ProgressLabel from "react-progress-label";

import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
//import MuiInput from "@mui/material/Input";
//import VolumeUp from "@mui/icons-material/VolumeUp";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import { Select, FormControl, MenuItem, Input, Container } from "@mui/material";
const circleIncreaseRate = 26.66;
let cryptoValues = [
  { name: "ETH", color: "#1D87E8", icon: "./assets/img/ethicon.png" },
  { name: "PLX", color: "#31D4EA", icon: "./assets/img/plxicon.png" },
  { name: "BTC", color: "#FFFF59", icon: "./assets/img/ethicon.png" },
  { name: "ADA", color: "#F54B68", icon: "./assets/img/ethicon.png" },
  { name: "DGB", color: "#3BE89C", icon: "./assets/img/ethicon.png" },
  { name: "BNB", color: "#FDA758", icon: "./assets/img/ethicon.png" },
];

const Rewards = ({ classes }) => {
  const [cryptoList, setCryptoList] = useState([]);
  const handleCryptoSliderChange = (event, newValue, name) => {
    setCryptoList(
      cryptoList.map((e) => {
        if (e.name == name) {
          e.value = newValue;
        }
        //console.log(e)
        return e;
      })
    );
  };
  const handleAddCryptoItem = (event) => {
    const name = event.target.value;
    setCryptoList(
      [
        {
          value: 0,
          name,
          color: cryptoValues.filter((e) => e.name == name)[0].color,
        },
        ...cryptoList,
      ].reverse()
    );
    cryptoValues = cryptoValues.filter((e) => e.name != name);
  };
  const renderCryptoValue = () =>
    cryptoValues.map((e) => (
      <MenuItem key={e.name} value={e.name}>
        {e.name}
      </MenuItem>
    ));

  const renderCircles = () =>
    cryptoList.map((e, idx) => {
      let rate;
      let calc;
      let pWidth = 14;
      if (idx == 0) {
        rate = 0;
        calc = 1;
        pWidth = 20;
      }
      if (idx == 1) {
        calc = 4;
      }
      if (idx == 2) {
        calc = 5;
      }

      if (idx == 3) {
        calc = 8;
      }

      if (idx == 4) {
        calc = 8;
      }
      let size =
        idx * (rate == 0 || circleIncreaseRate) + 42.67 + (idx * 3 || 1);
      if (idx == 5) {
        calc = 9;
        size = size + 3;
      }
      return (
        <div
          style={{
            width: size,
            height: size,
            position: "absolute",
            top: `calc(128px - ${size / 2}px)`,
            left: `calc(224px - ${size / 2}px)`,
          }}
          className={classes.circleItem}
          key={e.name}
        >
          <CircularProgressBar
            progress={100}
            startDegree={0}
            progressWidth={pWidth - calc}
            trackWidth={20}
            trackBorderWidth={0}
            cornersWidth={4}
            size={100}
            progressColor="#393b45"
          />
          <CircularProgressBar
            progress={e.value}
            startDegree={0}
            progressWidth={pWidth - calc}
            trackWidth={20}
            trackBorderWidth={0}
            cornersWidth={4}
            size={100}
            progressColor={e.color}
          />
        </div>
      );
    });

  const renderCryptoList = () =>
    cryptoList.map((e, idx) => (
      <ListItem className={classes.cryptoListItem} key={e.name}>
        <ListItemButton>
          <Slider
            value={e.value}
            onChange={(event, newValue) =>
              handleCryptoSliderChange(event, newValue, e.name)
            }
            aria-labelledby="input-slider"
          />
          <span>{e.value}</span>
        </ListItemButton>
      </ListItem>
    ));

  return (
    <Container maxWidth="sm" className={classes.rewards}>
      <section className={classes.rewardsContainer}>
        <div className={classes.circlesSection}>{renderCircles()}</div>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            maxHeight: 300,
            "& ul": { padding: 0 },
          }}
        >
          {renderCryptoList()}
        </List>
        <FormControl fullWidth>
          <Select onChange={handleAddCryptoItem}>{renderCryptoValue()}</Select>
        </FormControl>
      </section>
    </Container>
  );
};

export default Rewards;
