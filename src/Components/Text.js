/** @format */

import React from "react";
import { TextField } from "@material-ui/core";

const Text = ({ text, handleChange, read }) => {
	return (
		<TextField
			id='standard-basic'
			disabled={read}
			label='Factory'
			name='text'
			value={text}
			onChange={handleChange}
		/>
	);
};
export default Text;
