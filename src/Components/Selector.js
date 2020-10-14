/** @format */

import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import { makeStyles } from "@material-ui/core/styles";
import { MenuItem } from "@material-ui/core";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 220,
	},
}));
const Selector = ({
	select,
	handleChange,
	read,
}) => {
	const classes = useStyles();

	return (
		<FormControl className={classes.formControl}>
			<InputLabel id='demo-simple-select-label'>
				Assign Designer
			</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				label='Assign Designer'
				disabled={read}
				name='select'
				id='demo-simple-select'
				value={select}
				onChange={handleChange}>
				<MenuItem value={10}>Ten</MenuItem>
				<MenuItem value={20}>Twenty</MenuItem>
				<MenuItem value={30}>Thirty</MenuItem>
			</Select>
		</FormControl>
	);
};
export default Selector;
