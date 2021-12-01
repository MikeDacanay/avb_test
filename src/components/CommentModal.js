import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import {
    toggleCommentsModal,
    getViewCommentsModalOpen,
} from "store/slices/view";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}));

const CommentModal = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const isOpen = useSelector(getViewCommentsModalOpen);
	const handleClose = () => dispatch(toggleCommentsModal());



	return (
		<Modal
		open={isOpen}
		onClose={handleClose}
		className={classes.modal}
		aria-labelledby="simple-modal-title"
		aria-describedby="simple-modal-description"
		>
			<form onSubmit={e => {
				e.preventDefault();
				// formPayloader(e);
			}}>
				<input type="text" id='name--input' name='name--input'/>
				<input type="textarea" id='comment--input' name='comment--input'/>
				<input type="submit" value='Submit'/>
			</form>
		</Modal>
	);
};

export default CommentModal;
