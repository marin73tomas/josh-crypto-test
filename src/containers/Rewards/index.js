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
const CRYPTOS = [
  { name: "ETH", color: "#1D87E8", icon: "assets/img/ethicon.png" },
  { name: "PLX", color: "#31D4EA", icon: "assets/img/plxicon.png" },
  { name: "BTC", color: "#FFFF59", icon: "assets/img/ethicon.png" },
  { name: "ADA", color: "#F54B68", icon: "assets/img/ethicon.png" },
  { name: "DGB", color: "#3BE89C", icon: "assets/img/ethicon.png" },
  { name: "BNB", color: "#FDA758", icon: "assets/img/ethicon.png" },
];
function hexToRgbA(hex, opacity) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
      `,${opacity})`
    );
  }
  throw new Error("Bad Hex");
}

const Rewards = ({ classes }) => {
  const [cryptoList, setCryptoList] = useState([]);
  const [cryptoValues, setCryptoValues] = useState(CRYPTOS);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
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
          icon: cryptoValues.filter((e) => e.name == name)[0].icon,
        },
        ...cryptoList,
      ].reverse()
    );
    setCryptoValues(cryptoValues.filter((e) => e.name != name));
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
        idx * (rate == 0 || circleIncreaseRate) + 42.67 + (idx || 1);
      if (idx == 5) {
        calc = 8.8;
        size = size + 1.8;
      }
      console.log(classes.track);
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
          <div
            className={classes.sliderIcon}
            style={{
              width: "108px",
              height: "60px",
              background: hexToRgbA(e.color, 0.4),
              borderRadius: "12px 0px 0px 12px",
            }}
          >
            <img className="img-name" src={e.icon} alt={`${e.name}-icon`} />
            <h4>{e.name}</h4>
            <img
              className="img-chevron"
              src="assets/img/Chevron.svg"
              alt="chevron"
            />
          </div>
          <div className={classes.trackWrapper}>
            <Slider
              value={e.value}
              onChange={(event, newValue) =>
                handleCryptoSliderChange(event, newValue, e.name)
              }
              aria-labelledby="input-slider"
              id={`custom-track${e.name}`}
              sx={{
                "& .MuiSlider-thumb": {
                  "&:hover, &.Mui-focusVisible": {
                    boxShadow: "initial !important",
                  },
                },
              }}
            />
            <span>{`${e.value}%`}</span>
          </div>
        </ListItemButton>
      </ListItem>
    ));

  return (
    <Container maxWidth="sm" className={classes.rewards}>
      <h2>Your Rewards</h2>
      <section className={classes.rewardsContainer}>
        <div className={classes.removeIcon}>
          <img src="assets/img/Trash.svg" alt="trash-icon" style={{"width":"20px","height":"20px"}}/>
        </div>
        <div className={classes.circlesSection}>{renderCircles()}</div>
        <div className={classes.selectorContainer}>
          <List
            className={classes.multiList}
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              position: "relative",
              overflow: "auto",
              maxHeight: 600,
              "& ul": { padding: 0 },
            }}
          >
            {renderCryptoList()}
          </List>

          <FormControl fullWidth style={{ display: "none" }}>
            <Select
              onClose={handleClose}
              open={open}
              onChange={handleAddCryptoItem}
            >
              {renderCryptoValue()}
            </Select>
          </FormControl>
          <a onClick={handleOpen} className={classes.addNewItem}>
            <div className={classes.plusIcon}>
              <img src="assets/img/Plus.png" alt="plus-icon" />
            </div>
            <span>Add another token</span>
          </a>
        </div>
      </section>
    </Container>
  );
};

export default Rewards;
