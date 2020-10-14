/** @format */

import React from "react";
import { TextField } from "@material-ui/core";

const Text2 = ({ text2, handleChange, read }) => {
	return (
		<TextField
			id='standard-basic'
			disabled={read}
			label='Assign Quantity'
			name='text2'
			value={text2}
			onChange={handleChange}
		/>
	);
};
export default Text2;
