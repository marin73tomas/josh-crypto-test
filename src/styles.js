const blackDark = "#191B20";
const darkDarker = "#1F2128";
const darkLighter = "#242731";
const gray = "#E4E4E4";

export default {
  rewards: {
    backgroundColor: "#1F2128",
    "& h2": {
      position: "absolute",
      width: "168px",
      height: "40px",
      left: "40px",
      top: "160px",
      fontFamily: "Aeonik",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "26px",
      lineHeight: "40px",
      color: "#FFFFFF",
    },
  },
  rewardsContainer: {
    position: "absolute",
    width: "448px",
    height: "840px",
    left: "40px",
    top: "208px",
    background: "#242731",
    backdropFilter: "blur(16px)",
    borderRadius: "24px",
  },
  cryptoOptions: {
    position: "absolute",
    left: "5.94%",
    right: "92.71%",
    top: "48.15%",
    bottom: "50%",
    fontFamily: "Aeonik",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#FFFFFF",
    "& li": {
      position: "absolute",
      width: "1px",
      height: "24px",
      left: "188px",
      top: "518px",
      background: "#FFFFFF",
      opacity: "0.1",
    },
  },
  circleItem : {
     "& svg": {
          position: "absolute",
     }
  },
  circlesSection: {
    height: "256px",
    width: "100%",
    "& svg": {
      height: "initial !important",
      width: "initial !important",
    },
    "& circle": {
      display: "none !important"
    }
  },
  removeIcon: {
    position: "absolute",
    width: "48px",
    height: "48px",
    left: "416px",
    top: "232px",
    background: "#1C1F29",
  },
  cryptoList: {
    "& li": {
      position: "absolute",
      width: "400px",
      height: "60px",
      left: "64px",
      top: "624px",
      background: "#1C1F29",
      borderRadius: "12px",
    },
  },

  dropDown: {
    position: "absolute",
    width: "148px",
    height: "56px",
    left: "340px",
    top: "136px",
    background: "#191B20",
    borderRadius: "12px",
    "& span": {
      position: "absolute",
      width: "52px",
      height: "24px",
      left: "356px",
      top: "152px",
      fontFamily: "Aeonik",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "14px",
      lineHeight: "24px",
      color: "#FFFFFF",
    },
  },
};
