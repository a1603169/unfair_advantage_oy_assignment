import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Slide from "@material-ui/core/Slide";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";
import "./MainComp2.css";
import TextField from "@material-ui/core/TextField";
import { create } from "jss";
import { color } from "@material-ui/system";
import ClearIcon from "@material-ui/icons/Clear";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{
          color: "white",
          fontSize: "12px",
          margin: "15px 0 15px 25px",
          borderRadius: 50,
          propcolor: "white",
          fontSize: "12px",
          margin: "15px 0 15px 25px",
          borderRadius: props.name === "SAVE" ? 50 : 5,
          backgroundColor:
            props.name === "SAVE"
              ? "rgba(0,181,173,1)"
              : "rgba(251, 189, 8, 1)",
        }}
        size="small"
        variant="contained"
        color="primary"
        component="span"
        onClick={handleClickOpen}
      >
        {props.name}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Your profile data has been saved"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Profile Updated!
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function valuetext(value) {
  return `${value}`;
}

function CheckSlider(props) {
  return (
    <div className="oneDayContainer">
      <FormControlLabel
        value="top"
        control={<Checkbox color="primary" />}
        label={props.date}
        labelPlacement="left"
        className="checkBox"
      />
      <RangeSlider />
    </div>
  );
}

const times = [
  { value: 8, label: "8" },
  { value: 9, label: "" },
  { value: 10, label: "" },
  { value: 11, label: "" },

  { value: 12, label: "12" },
  { value: 13, label: "" },
  { value: 14, label: "" },
  { value: 15, label: "" },
  { value: 16, label: "16" },
  { value: 17, label: "" },
  { value: 18, label: "" },
  { value: 19, label: "" },
  { value: 20, label: "20" },
  { value: 21, label: "" },
  { value: 22, label: "" },
];

function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([12, 18]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 600 }} className={classes.sliderRoot}>
      <Slider
        step={1}
        marks={times}
        min={7}
        max={22}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <span style={{ marginLeft: "30px" }}>hr</span>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    marginTop: "100px",
    minWidth: "300px",
    maxWidth: "850px",
  },
  sliderRoot: {
    marginTop: "25px",
    display: "flex",
    justifyItems: "space-between",
    minWidth: "300px",
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    color: "rgba(0, 181, 173, 1)",
  },
  subTitle: {
    marginTop: "15px",
  },
  pos: {
    marginBottom: 12,
  },
});

class InputSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [], value: "", randomColor: "", cards2: [] };
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }

  deleteList() {
    this.setState([
      this.state.cards.filter(
        (card, index) => card[index] === this.state.cards2[index]
      )])
  }

  handleChange(e) {
    this.setState({
      randomColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
    });
    this.setState({ value: e.target.value });
  }

  addCard() {
    const card = React.createElement(
      "div",
      {
        className: "card",
        style: {
          backgroundColor: `${this.state.randomColor}`,
          borderColor: `${this.state.randomColor}`,
          color: "white",
          fontSize: "15px",
          borderRadius: 5,
          boxSizing: "inherit",
          padding: "5px 10px",
          verticalAlign: "middle",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
      },
      this.state.value,
      <ClearIcon onClick={this.deleteList} />
    );
    this.setState({ cards: [...this.state.cards, card] });
    this.setState({ cards2: [...this.state.cards2, this.state.value] });
  }

  keyPress(e) {
    let toggleCards = false;
    for (let i = 0; i < this.state.cards.length; i++) {
      if (this.state.cards[i].props.children[0] === this.state.value) {
        return (toggleCards = true);
      }
    }

    if (e.keyCode == 13 && e.target.value !== "" && toggleCards === false) {
      console.log(e.target.value, this.state.randomColor);
      this.setState({ value: "" });
      this.addCard();
    }
  }

  render() {
    return (
      <>
        <TextField
          fullWidth={false}
          className="outlinedBasic"
          label="Add Interests"
          variant="standard"
          value={this.state.value}
          onKeyDown={this.keyPress}
          onChange={this.handleChange}
        />
        <div className="cards">{this.state.cards}</div>
      </>
    );
  }
}

export default function MainComp2() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          I'M WEEKLY AVAILABLE AT
        </Typography>
        <CheckSlider date="Mon" />
        <CheckSlider date="Tue" />
        <CheckSlider date="Wed" />
        <CheckSlider date="Thu" />
        <CheckSlider date="Fri" />
        <CheckSlider date="Sat" />
        <CheckSlider date="Sun" />
        <div className="updateButtons">
          <div className="tooltip">
            <AlertDialogSlide name="Copy Profile Link" />
            <span className="tooltiptext">
              Copy Profile link and share it with others to let them know about
              your availability schedule
            </span>
          </div>
          <AlertDialogSlide name="SAVE" />
        </div>
        <Divider />
        <Typography className={classes.subTitle} gutterBottom>
          Activities I'm interested in
        </Typography>
        <p className="subPara">
          Type your favourite sport and press enter button to add it your
          activities list
        </p>
        <InputSubmit />
      </CardContent>
    </Card>
  );
}
