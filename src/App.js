/** @format */

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import Text from "./Components/Text";
import Selector from "./Components/Selector";
import Text2 from "./Components/Text2";
import Upload from "./Components/Upload";
const useStyles = makeStyles(theme => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 220,
	},
	paper: {
		backgroundColor:
			theme.palette.background.paper,
		outline: "none",
		width: "40vh",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(7, 7, 7),
	},
	form: {
		marginTop: "5vh",
		marginBottom: "5vh",
	},
	input: { display: "none" },
}));

export default function App() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const [read, setRead] = useState(false);
	const [activeIndex, setActiveIndex] = useState(
		0
	);
	const [data, setData] = React.useState({
		text: "",
		select: "",
		text2: "",
		upload: "",
	});
	//opens the modal
	const handleOpen = () => {
		setOpen(true);
	};
	//closes the modal

	const handleClose = () => {
		setOpen(false);
		setActiveIndex(0);
		setRead(false);
	};
	//next button
	const handleNext = () => {
		setActiveIndex(activeIndex + 1);
		if (activeIndex === 3) {
			setRead(true);
		}
	};
	//back button
	const handdleBack = () => {
		setActiveIndex(activeIndex - 1);
		if (activeIndex <= 4 && read === true) {
			setRead(false);
		}
	};
	//assign the factory button
	const handleSubmit = () => {
		console.log(data);
		handleClose();
	};
	//handle value in form
	const handleChange = e => {
		const { name, value } = e.target;

		if (name === "text") {
			setData({ ...data, text: value });
		} else if (name === "text2") {
			setData({ ...data, text2: value });
		} else if (name === "select") {
			setData({ ...data, select: value });
		} else {
			setData({ ...data, upload: value });
		}
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignContent: "space-between",
			}}>
			<Button
				variant='outlined'
				color='secondary'
				type='button'
				onClick={handleOpen}>
				{" "}
				Click Me!
			</Button>

			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<div>
						<div className={classes.paper}>
							<div
								style={{
									display:
										activeIndex >= 0
											? "block"
											: "none",
								}}>
								<Text
									read={read}
									text={data.ext}
									handleChange={handleChange}
								/>
							</div>
							<div
								style={{
									display:
										activeIndex > 0
											? "block"
											: "none",
								}}>
								<Selector
									read={read}
									select={data.select}
									handleChange={handleChange}
								/>
							</div>
							<div
								style={{
									display:
										activeIndex > 1
											? "block"
											: "none",
								}}>
								<Text2
									read={read}
									text2={data.text2}
									handleChange={handleChange}
								/>
							</div>
							<div
								style={{
									display:
										activeIndex > 2
											? "block"
											: "none",
								}}>
								<Upload
									upload={data.upload}
									handleChange={handleChange}
									read={read}
								/>
								<p>{data.upload}</p>
							</div>
							<div
								style={{
									display: "flex",
									justifyContent: "flex-end",
								}}>
								{activeIndex < 4 && (
									<Button
										variant='outlined'
										color='secondary'
										onClick={handleNext}>
										Next
									</Button>
								)}
								{activeIndex > 0 && (
									<Button
										style={{
											marginLeft: "1vh",
										}}
										onClick={handdleBack}
										variant='outlined'
										color='secondary'>
										Back
									</Button>
								)}
								{activeIndex === 4 && (
									<div>
										<Button
											onClick={handleSubmit}
											style={{
												marginLeft: "1vh",
											}}
											variant='outlined'
											color='secondary'>
											Assign To Factory
										</Button>
									</div>
								)}
							</div>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
