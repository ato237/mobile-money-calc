import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

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
		color: '#F3722C',
		"&:hover": {
			background: "#F3722C",
			color: "#000",
			borderBottom: "white",
		},
		
		['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
			width: 100
		  }
	},
	tabItemE: {
		width: 400,
		background: "#d8f3dc",
		color: "#fdc500",
		"&:hover": {
			background: "#fdc500",
			color: "#000",
			borderBottom: "white",
		},
		['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
			width: 100
		  }
	},
	tabItemY: {
		width: 400,
		background: "#d8f3dc",
		color: "red",
		"&:hover": {
			background: "red",
			color: "#000",
			borderBottom: "white",
		},
		['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
			width: 100
		  }
	},
	tab: {
		borderRadius: "10px",
	},
}));

export default function SimpleTab() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
				<Tabs
				TabIndicatorProps={{
					style: {
					  backgroundColor: "#D97D54",
					 }
					}}
				className={classes.tab}
					varriant="fullWidth"
					value={value}
					onChange={handleChange}
					aria-label="Orange Money Calculator">
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
				<h3>Amount:</h3>
				<input type="" />
				<h3>Fee Typle:</h3>
				<select name="cars" id="cars">
					<option value="Withdrawal">Withdrawal</option>
					<option value="Deposit">deposit</option>
				</select>
			</TabPanel>
			<TabPanel value={value} index={1}>
				Item Two
			</TabPanel>
			<TabPanel value={value} index={2}>
				Item Three
			</TabPanel>
		</div>
	);
}
