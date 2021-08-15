import React from "react";
import PropTypes from "prop-types";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const withDrawalType = [
  {
    value: "retrait",
    label: "Withdrawal",
  },
  {
    value: "envoi",
    label: "Sending",
  },
];
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const theme = createTheme({
  breakpoints: {
    values: {
      ip5:328,
      xs: 500,
      sm: 600,
      md: 768,
      lg: 1280,
      xl: 1920,
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "0 1px 3px rgba(8, 28, 21, 0.5)",
    borderRadius: "10px",
    backgroundColor: theme.palette.background.paper,
  },
  tabItemO: {
    background: "#d8f3dc",
    width: 600,
    color: "#000",
    "&:hover": {
      background: "#F3722C",
      color: "#fff",
      borderBottom: "white",
    },
    "&$selected": {
      backgroundColor: "#F3722C",
      color: "white",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      backgroundColor: "#F3722C",
      color: "white",
    },

    [theme.breakpoints.down("sm")]: {
      width: 200,
    },
    [theme.breakpoints.down("xs")]: {
      width: 100,
    },
  },
  tabItemE: {
    width: 600,
    background: "#d8f3dc",
    color: "#000",
    "&:hover": {
      background: "#fdc500",
      color: "#fff",
      borderBottom: "white",
    },
    [theme.breakpoints.down("sm")]: {
      width: 200,
    },
    [theme.breakpoints.down("xs")]: {
      width: 100,
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      backgroundColor: "#fdc500",
      color: "white",
    },
  },
  tabItemY: {
    width: 400,
    background: "#d8f3dc",
    color: "000",
    "&:hover": {
      background: "red",
      color: "#fff",
      borderBottom: "black",
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      backgroundColor: "red",
      color: "white",
    },
    [theme.breakpoints.down("sm")]: {
      // eslint-disable-line no-useless-computed-key
      width: 200,
    },
    [theme.breakpoints.down("xs")]: {
      width: 100,
    },
  },
  tab: {
    borderRadius: "10px",
  },
  form: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "10px !important",
    [theme.breakpoints.down("sm")]: {
      // eslint-disable-line no-useless-computed-key
      padding: "0px !important",
      display: "grid",
    },
  },
  text: {
    marginLeft: "30px",
    [theme.breakpoints.down("sm")]: {
      // eslint-disable-line no-useless-computed-key
      margin: 0,
      width: "420px",
    },
    [theme.breakpoints.down("xs")]: {
      // eslint-disable-line no-useless-computed-key
      margin: 0,
      width: "220px",
    },
  },
  buttonO: {
    background: "#F3722C",
    marginLeft: "30px",
    width: 200,
    height: 50,
    "&:hover": {
      background: "orange",
      color: "#fff",
    },
    [theme.breakpoints.down("sm")]: {
      // eslint-disable-line no-useless-computed-key
      margin: 0,
      padding: 0,
    },
  },
  buttonM: {
    background: "#fdc500",
    marginLeft: "30px",

    width: 200,
    height: 50,
    "&:hover": {
      background: "orange",
      color: "#fff",
    },
    [theme.breakpoints.down("sm")]: {
      // eslint-disable-line no-useless-computed-key
      margin: 0,
      padding: 0,
    },
  },
  buttonR: {
    background: "red",
    marginLeft: "30px",

    width: 200,
    height: 50,
    "&:hover": {
      background: "orange",
      color: "#fff",
    },
    [theme.breakpoints.down("md")]: {
      // eslint-disable-line no-useless-computed-key
      margin: 0,
      padding: 0,
    },
  },
  heading: {
    maxWidth: "420px",
    margin: "10px",
    fontSize: "24px",
    color: "#F3722C",
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      maxWidth: "220px",
      fontSize: "18px",
    },
  },
  headingY: {
    maxWidth: "420px",

    margin: "10px",
    fontSize: "24px",
    color: "orange",
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      maxWidth: "220px",
      fontSize: "18px",
    },
  },
}));

export default function SimpleTab(props) {
  const classes = useStyles(props);
  const [value, setValue] = React.useState(0);
  const [amount, setAmount] = React.useState();
  const [amountError, setAmountError] = React.useState(false);
  const [amountError1, setAmountError1] = React.useState(false);

  const [calculatedValue, setCalculatedValue] = React.useState("");
  const [finalValue, setFinalValue] = React.useState(amount);
  const [amount1, setAmount1] = React.useState("");
  const [calculatedValue1, setCalculatedValue1] = React.useState("");
  const [finalValue1, setFinalValue1] = React.useState(amount1);
  const [isSubmitted, setSubmitted] = React.useState(false);
  const [isSubmitted1, setSubmitted1] = React.useState(false);

  const [withdrawal, setWithdrawal] = React.useState("retrait");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleWithdraw = (event) => {
    setWithdrawal(event.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    e.preventDefault();
  };
  const handleAmountChange1 = (e) => {
    setAmount1(e.target.value);
    e.preventDefault();
  };

  const calculateOrangeMoney = (e) => {
    e.preventDefault();
    setAmountError(false);
    if (amount == "") {
      setAmountError(true);
    }
    if (amount && withdrawal === "retrait") {
      if (amount >= 50 && amount <= 6500) {
        setCalculatedValue(amount * (3 / 100));
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
        setSubmitted(true);
      } else if (amount >= 6501 && amount <= 10000) {
        setCalculatedValue(180);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue);
        setSubmitted(true);
      } else if (amount >= 10001 && amount <= 13500) {
        setCalculatedValue(300);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
        setSubmitted(true);
      } else if (amount >= 13501 && amount <= 25000) {
        setCalculatedValue(350);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
        setSubmitted(true);
      } else if (amount >= 25001 && amount <= 50000) {
        setCalculatedValue(700);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
        setSubmitted(true);
      } else if (amount >= 50001 && amount <= 80000) {
        setCalculatedValue(1350);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
        setSubmitted(true);
      } else if (amount >= 80001 && amount <= 100000) {
        setCalculatedValue(1800);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
        setSubmitted(true);
      } else if (amount >= 100001 && amount <= 200000 && withdrawal) {
        setCalculatedValue(2150);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
        setSubmitted(true);
      } else if (amount >= 200001 && amount <= 300000) {
        setCalculatedValue(3100);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
        setSubmitted(true);
      } else if (amount >= 300001 && amount <= 400000) {
        setCalculatedValue(3600);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
        setSubmitted(true);
      } else if (amount >= 400001 && amount <= 500000) {
        setCalculatedValue(3600);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
        setSubmitted(true);
      }
    }
  };
  const calculateMobileMoney = (e) => {
    e.preventDefault();

    setAmountError1(false);
    if (amount1 == "") {
      setAmountError1(true);
    }
    if (amount1 && withdrawal === "retrait") {
      console.log(amount1, withdrawal);
    }
    if (amount1 && withdrawal === "retrait") {
      if (amount1 >= 100 && amount1 <= 5500) {
        setCalculatedValue1(amount1 * (3 / 100));
        setFinalValue1(parseInt(amount1) + parseInt(calculatedValue1));
        console.log(finalValue1, calculatedValue1);
        setSubmitted1(true);
      } else if (amount1 >= 5551 && amount1 <= 10050) {
        setCalculatedValue1(180);
        setFinalValue1(parseInt(amount1) + parseInt(calculatedValue1));
        console.log(finalValue1);
        setSubmitted1(true);
      } else if (amount1 >= 10051 && amount1 <= 13550) {
        setCalculatedValue1(300);
        setFinalValue1(parseInt(amount1) + parseInt(calculatedValue1));
        console.log(finalValue1, calculatedValue1);
        setSubmitted1(true);
      } else if (amount1 >= 13551 && amount1 <= 25050) {
        setCalculatedValue1(350);
        setFinalValue1(parseInt(amount1) + parseInt(calculatedValue1));
        console.log(finalValue1, calculatedValue1);
        setSubmitted1(true);
      } else if (amount1 >= 25051 && amount1 <= 50050) {
        setCalculatedValue1(700);
        setFinalValue1(parseInt(amount1) + parseInt(calculatedValue1));
        console.log(finalValue1, calculatedValue1);
        setSubmitted1(true);
      } else if (amount1 >= 50051 && amount1 <= 75100) {
        setCalculatedValue1(1350);
        setFinalValue1(parseInt(amount1) + parseInt(calculatedValue1));
        console.log(finalValue1, calculatedValue1);
        setSubmitted1(true);
      } else if (amount1 >= 75101 && amount1 <= 100100) {
        setCalculatedValue1(1800);
        setFinalValue1(parseInt(amount1) + parseInt(calculatedValue1));
        console.log(finalValue1, calculatedValue1);
        setSubmitted1(true);
      } else if (amount1 >= 100101 && amount1 <= 200500 && withdrawal) {
        setCalculatedValue1(2150);
        setFinalValue1(parseInt(amount1) + parseInt(calculatedValue1));
        console.log(finalValue1, calculatedValue1);
        setSubmitted1(true);
      } else if (amount1 >= 200501 && amount1 <= 300500) {
        setCalculatedValue1(2600);
        setFinalValue1(parseInt(amount1) + parseInt(calculatedValue1));
        console.log(finalValue1, calculatedValue1);
        setSubmitted1(true);
      } else if (amount1 >= 300501 && amount1 <= 400500) {
        setCalculatedValue1(3100);
        setFinalValue1(parseInt(amount1) + parseInt(calculatedValue1));
        console.log(finalValue1, calculatedValue1);
        setSubmitted1(true);
      } else if (amount1 >= 400501 && amount1 <= 500000) {
        setCalculatedValue1(3500);
        setFinalValue1(parseInt(amount1) + parseInt(calculatedValue1));
        console.log(finalValue1, calculatedValue1);
        setSubmitted1(true);
      }
    }
    if (amount && withdrawal === "retrait") {
      if (amount >= 100 && amount <= 5999) {
        setCalculatedValue(amount * (3 / 100));
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
      } else if (amount >= 6000 && amount <= 10050) {
        setCalculatedValue(175);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue);
      } else if (amount >= 10051 && amount <= 13550) {
        setCalculatedValue(300);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
      } else if (amount >= 25051 && amount <= 50050) {
        setCalculatedValue(700);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
      } else if (amount >= 50001 && amount <= 75100) {
        setCalculatedValue(1350);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
      } else if (amount >= 75101 && amount <= 100100) {
        setCalculatedValue(1800);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
      } else if (amount >= 100101 && amount <= 200500) {
        setCalculatedValue(2150);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
      } else if (amount >= 200501 && amount <= 300500 && withdrawal) {
        setCalculatedValue(2600);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
      } else if (amount >= 300501 && amount <= 400500) {
        setCalculatedValue(3100);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
      } else if (amount >= 400501 && amount <= 500000) {
        setCalculatedValue(3500);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
      } else if (amount >= 500000 && amount <= 1000000) {
        setCalculatedValue(4000);
        setFinalValue(parseInt(amount) + parseInt(calculatedValue));
        console.log(finalValue, calculatedValue);
      }
    }
  };
  const calculateExpressUnion = (e) => {
    e.preventDefault();
    if (amount && withdrawal) {
      console.log(amount, withdrawal);
    }
  };

  return (
    <div className={classes.root}>
      <Tabs
        TabIndicatorProps={{
          style: {
            backgroundColor: "#000",
          },
        }}
        className={classes.tab}
        varriant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Orange Money Calculator"
      >
        <Tab
          className={classes.tabItemO}
          label="Orange Money"
          {...a11yProps(0)}
        />
        <Tab
          className={classes.tabItemE}
          label="MTN Mobile Money"
          {...a11yProps(1)}
        />
        <Tab
          className={classes.tabItemY}
          label="Express Union"
          {...a11yProps(2)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <form className={classes.form}>
          <TextField
            value={amount}
            onChange={handleAmountChange}
            id="outlined-basic"
            helperText="Enter Amount"
            label="XAF"
            variant="outlined"
            error={amountError}
          />

          <TextField
            className={classes.text}
            id="outlined-select-currency-native"
            select
            value={withdrawal}
            onChange={handleWithdraw}
            SelectProps={{
              native: true,
            }}
            helperText="Please select your currency"
            variant="outlined"
          >
            {withDrawalType.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <Button
            onClick={calculateOrangeMoney}
            className={classes.buttonO}
            variant="contained"
            color="primary"
          >
            Calculate
          </Button>
        </form>
        <h3 className={classes.heading}>
          {isSubmitted ? "Charges: " + calculatedValue : finalValue}
        </h3>
        <h3 className={classes.heading}>
          {isSubmitted ? "Amount To Be Sent: " + finalValue : calculatedValue}
        </h3>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <form className={classes.form}>
          <TextField
            value={amount1}
            onChange={handleAmountChange1}
            id="outlined-basic"
            helperText="Enter Amount"
            label="XAF"
            variant="outlined"
            error={amountError1}
          />

          <TextField
            className={classes.text}
            id="outlined-select-currency-native"
            select
            value={withdrawal}
            onChange={handleWithdraw}
            SelectProps={{
              native: true,
            }}
            helperText="Please select your currency"
            variant="outlined"
          >
            {withDrawalType.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <Button
            onClick={calculateMobileMoney}
            className={classes.buttonM}
            variant="contained"
            color="primary"
          >
            Calculate
          </Button>
        </form>
        <h3 className={classes.headingY}>
          {isSubmitted1 ? "Charges: " + calculatedValue1 : finalValue1}
        </h3>
        <h3 className={classes.headingY}>
          {isSubmitted1
            ? "Amount To Be Sent: " + finalValue1
            : calculatedValue1}
        </h3>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <form className={classes.form}>
          <TextField
            value={amount}
            onChange={handleAmountChange}
            id="outlined-basic"
            helperText="Enter Amount"
            label="XAF"
            variant="outlined"
          />

          <TextField
            className={classes.text}
            id="outlined-select-currency-native"
            select
            value={withdrawal}
            onChange={handleWithdraw}
            SelectProps={{
              native: true,
            }}
            helperText="Please select your currency"
            variant="outlined"
          >
            {withDrawalType.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <Button
            onClick={calculateExpressUnion}
            className={classes.buttonR}
            variant="contained"
            color="primary"
          >
            Calculate
          </Button>
        </form>
        <h3>{isSubmitted ? calculatedValue : finalValue}</h3>
        <h3>{isSubmitted ? finalValue : calculatedValue}</h3>
      </TabPanel>
    </div>
  );
}
