/** @format */

import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	input: { display: "none" },
	root: { marginTop: "2vh" },
}));
const Upload = ({
	read,
	upload,
	handleChange,
}) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<input
				accept='application/pdf, application/vnd.ms-excel'
				value={upload}
				disabled={read}
				name='upload'
				onChange={handleChange}
				className={classes.input}
				id='contained-button-file'
				multiple
				type='file'
			/>
			<label htmlFor='contained-button-file'>
				<Button
					disabled={read}
					variant='contained'
					color='primary'
					component='span'>
					Upload
				</Button>
			</label>
		</div>
		// accept='application/pdf, application/vnd.ms-excel'
	);
};
export default Upload;
