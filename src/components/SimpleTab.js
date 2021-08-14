import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "0 1px 3px rgba(8, 28, 21, 0.5)",
    borderRadius: "10px",
    backgroundColor: theme.palette.background.paper,
  },
  tabItemO: {
    background: "#d8f3dc",
    width: 400,
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

    ["@media (max-width:768px)"]: {
      width: 100,
    },
  },
  tabItemE: {
    width: 400,
    background: "#d8f3dc",
    color: "#000",
    "&:hover": {
      background: "#fdc500",
      color: "#fff",
      borderBottom: "white",
    },
    ["@media (max-width:768px)"]: {
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
    ["@media (max-width:768px)"]: {
      // eslint-disable-line no-useless-computed-key
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
    ["@media (max-width:768px)"]: {
      // eslint-disable-line no-useless-computed-key
      padding: "0px !important",
      display: "grid",
    },
  },
  text: {
    marginLeft: "30px",
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
    ["@media (max-width:768px)"]: {
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
    ["@media (max-width:768px)"]: {
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
    ["@media (max-width:768px)"]: {
      // eslint-disable-line no-useless-computed-key
      margin: 0,
      padding: 0,
    },
  },
}));

export default function SimpleTab(props) {
  const classes = useStyles(props);
  const [value, setValue] = React.useState(0);
  const [amount, setAmount] = React.useState("");
  const [amountError, setAmountError] = React.useState(false);
  const [calculatedValue, setCalculatedValue] = React.useState("");
  const [finalValue, setFinalValue] = React.useState(amount);
  const [isSubmitted, setSubmitted] = React.useState(false);

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

	const calculateOrangeMoney = (e) => {
		e.preventDefault();
		setAmountError(false);
		if (amount == "") {
			setAmountError(true);
		}
		if (amount && withdrawal === 'retrait') {
			if (amount >= 50 && amount <= 6500) {
				setCalculatedValue(amount * (3 / 100));
				setFinalValue(parseInt(amount) + parseInt(calculatedValue));
				console.log(finalValue, calculatedValue);
			}
			else if (amount >= 6501 && amount <= 10000) {
				setCalculatedValue(180);
				setFinalValue(parseInt(amount) + parseInt(calculatedValue));
				console.log(finalValue);
			} else if (amount >= 10001 && amount <= 13500) {
				setCalculatedValue(300);
				setFinalValue(parseInt(amount) + parseInt(calculatedValue));
				console.log(finalValue, calculatedValue);
			} else if (amount >= 13501 && amount <= 25000) {
				setCalculatedValue(350);
				setFinalValue(parseInt(amount) + parseInt(calculatedValue));
				console.log(finalValue, calculatedValue);
			} else if (amount >= 25001 && amount <= 50000) {
				setCalculatedValue(700);
				setFinalValue(parseInt(amount) + parseInt(calculatedValue));
				console.log(finalValue, calculatedValue);
			} else if (amount >= 50001 && amount <= 80000) {
				setCalculatedValue(1350);
				setFinalValue(parseInt(amount) + parseInt(calculatedValue));
				console.log(finalValue, calculatedValue);
			} else if (amount >= 80001 && amount <= 100000) {
				setCalculatedValue(1800);
				setFinalValue(parseInt(amount) + parseInt(calculatedValue));
				console.log(finalValue, calculatedValue);
			} else if (amount >= 100001 && amount <= 200000 && withdrawal) {
				setCalculatedValue(2150);
				setFinalValue(parseInt(amount) + parseInt(calculatedValue));
				console.log(finalValue, calculatedValue);
			} else if (amount >= 200001 && amount <= 300000) {
				setCalculatedValue(3100);
				setFinalValue(parseInt(amount) + parseInt(calculatedValue));
				console.log(finalValue, calculatedValue);
			} else if (amount >= 300001 && amount <= 400000) {
				setCalculatedValue(3600);
				setFinalValue(parseInt(amount) + parseInt(calculatedValue));
				console.log(finalValue, calculatedValue);
			} else if (amount >= 400001 && amount <= 500000) {
				setCalculatedValue(3600);
				setFinalValue(parseInt(amount) + parseInt(calculatedValue));
				console.log(finalValue, calculatedValue);
			}
		};
	}
  const calculateMobileMoney = (e) => {
    e.preventDefault();
    if (amount && withdrawal === "retrait") {
      console.log(amount, withdrawal);
    }
  };
  const calculateExpressUnion = (e) => {
    e.preventDefault();
    if (amount && withdrawal) {
      console.log(amount, withdrawal);
    }
  }

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
        <h3>{isSubmitted ? calculatedValue : finalValue}</h3>
        <h3>{isSubmitted ? finalValue : calculatedValue}</h3>
      </TabPanel>
      <TabPanel value={value} index={1}>
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
            onClick={calculateMobileMoney}
            className={classes.buttonM}
            variant="contained"
            color="primary"
          >
            Calculate
          </Button>
        </form>
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
      </TabPanel>
    </div>
  );
}
