import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch"


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide() {
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

  const buttonStyle = {
    color: "white",
    fontSize: "12px",
    margin: '15px 0 15px 25px',
    borderRadius: 50,
    backgroundColor: 'rgba(0,181,173,1)'
  }
  
  return (
    <div>
      <Button
        style={buttonStyle}
        size="small"
        variant="contained"
        color="primary"
        component="span"
        onClick={handleClickOpen}
      >
        Save
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

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 36,
    height: 20,
    padding: 3,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1.9,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 17,
    height: 17,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))

(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const regions = [
  { value: "Helsinki" },
  { value: "Espoo" },
  { value: "Vantaa" },
  { value: "Porvoo" },
  { value: "Turku" },
  { value: "Tampere" },
  { value: "Oulu" },
  { value: "Jyväskylä" },
];

const useStyles = makeStyles({
  root: {
    height: 'auto',
    minWidth: 300,
    maxWidth: 700,
    position: "relative",
    top: "100px",
    marginBottom: '25px'
  },
  flex: {
    display: "flex",
  },
  flexColumn: {
    display: 'flex',
    flexDirection: "column",
    marginTop: '15px'
  },
  bullet: {
    display: "inline-block",

    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 16,
    color: "#000",
    textAlign: "left",
  },
  pos: {
    fontSize: 12,
    margin: "12px 0",
    float: "left",
  },
  input: {
    display: "none",
  },
  userImage: {
    backgroundImage: 'cover',
    height: '80px',
    width: '80px',
    border: "1px solid white",
    borderRadius: '50%',
    marginRight: "25px",
    marginTop: "25px"
  },
  uploadButton: {
    borderRadius: 25,
    fontSize: "13px",
    float: "left",
  },
  outlinedBasic: {
    borderRadius: 25,
    margin: "0 15px",
    padding: "0 5px",
  },
  typo: {
    fontSize: "12px",
    textAlign: "left",
  },
  inputBox: {
    padding: "0 15px",
    margin: "15px 0",
  },
  hr: {
    margin: "0 15px",
  },
  myClubs: {
    textAlign: "left",
    marginLeft: "15px",
    fontWeight: "500",
    height: '300px'
  },
  toggleButtonText: {
    color: "grey",
    fontSize: "14px",
    height: "20px",
    width: "250px",
    margin: "20px 0 5px 35px",
    textAlign: 'left'
  },
  subAndSave: {
    display: "flex",
  },
  saveButton: {
    margin: '15px 25px 15px 0'
  },
  iosButton: {
    margin: '20px 0 0 15px',
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  const [region, setRegion] = React.useState("Helsinki");
  const [file, setFile] = React.useState(null);

  const handleChange = (e) => {
    setRegion(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <>
      <div className="editPhoto">
        <Card className={classes.root}>
          <CardContent className={classes.flex}>
            <div>
              <img className={classes.userImage} alt="#" src={file} />
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleFileChange}
              />
            </div>
            <label
              htmlFor="contained-button-file"
              className={classes.flexColumn}
            >
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Avatar
              </Typography>
              <Button
                size="small"
                className={classes.uploadButton}
                variant="contained"
                color="primary"
                component="span"
                style={{
                  backgroundColor: 'rgba(0,181,173,1)'}}
              >
                Edit
              </Button>
              <Typography className={classes.pos} color="textSecondary">
                JPG, GIF, or PNG. Max size of 800K
              </Typography>
            </label>
            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
            />
          </CardContent>
          <form className={classes.textField} noValidate autoComplete="off">
            <div className={classes.inputBox}>
              <Typography className={classes.typo} color="textSecondary">
                <PersonOutlineIcon fontSize="small" style={{color: 'rgba(0, 181, 173, 0.9)'}} />
              </Typography>
              <TextField
                fullWidth={true}
                className={classes.name}
                label="First Name"
                variant="standard"
              />
              <TextField
                fullWidth={true}
                className={classes.name}
                label="Last Name"
                variant="standard"
              />
            </div>
            <div className={classes.inputBox}>
              <Typography className={classes.typo} color="textSecondary">
                <PhoneIcon fontSize="small" style={{color: 'rgba(0, 181, 173, 0.9)'}}/>
              </Typography>
              <TextField
                fullWidth={true}
                className="outlinedBasic"
                label="Phone"
                variant="standard"
              />
            </div>
            <div className={classes.inputBox}>
              <Typography className={classes.typo} color="textSecondary">
                <RoomIcon fontSize="small" style={{color: 'rgba(0, 181, 173, 0.9)'}}/>Location
              </Typography>
              <TextField
                fullWidth={true}
                id="standard-select-regions"
                className="outlinedBasic"
                select
                value={region}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
              >
                {" "}
                {regions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </TextField>
            </div>
            <div className={classes.inputBox}>
              <Typography className={classes.typo} color="textSecondary">
                <InsertLinkIcon fontSize="small" style={{color: 'rgba(0, 181, 173, 0.9)'}}/>
              </Typography>
              <TextField
                fullWidth={true}
                className="outlinedBasic"
                label="URL"
                variant="standard"
              />
            </div>
          </form>
          <Divider variant="middle" />
          <div className={classes.flex}>
            <Grid container spacing={3}>
              <Grid item xs={1} className={classes.iosButton}>
                <IOSSwitch />
              </Grid>

              <Grid item xs={7}>
                <Typography className={classes.toggleButtonText}>
                  Subscribe to weekly email updates from your City Manager
                </Typography>
              </Grid>

              <Grid item xs={1} className={classes.saveButton}>
                <AlertDialogSlide />
              </Grid>

            </Grid>

          </div>
          <Divider variant="middle" />
          <div>
            <h3 className={classes.myClubs}>My Clubs</h3>
          </div>
        </Card>
      </div>
    </>
  );
}
