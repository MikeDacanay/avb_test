import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { addComment } from "store/slices/comments";

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
	const {modal} = useStyles();
	const dispatch = useDispatch();
	const isOpen = useSelector(getViewCommentsModalOpen);
	const handleClose = () => dispatch(toggleCommentsModal());

	const formSubmitHandlr = e => {
		e.preventDefault();
		const commentObj = {};
		commentObj.name = e.target[0].value;
		commentObj.body = e.target[1].value; 
		dispatch(addComment(commentObj));
	};

	return (
		<Modal
		open={isOpen}
		onClose={handleClose}
		className={modal}
		aria-labelledby="simple-modal-title"
		aria-describedby="simple-modal-description"
		>
			<form onSubmit={formSubmitHandlr}>
				<p>Name:</p>
				<input type="text" id='name--input' name='name--input'/>
				<p>Comment:</p>
				<input type="textarea" id='comment--input' name='comment--input' style={{'width': '200px', 'height': '150px'}}/>
				<input type="submit" value='Submit'/>
			</form>
		</Modal>
	);
};

export default CommentModal;
