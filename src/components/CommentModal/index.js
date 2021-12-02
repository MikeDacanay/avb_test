import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Box, TextField, InputLabel} from "@material-ui/core";
import { addComment } from "store/slices/comments";
import { useStyles } from "./styles";
import {
    toggleCommentsModal,
    getViewCommentsModalOpen,
} from "store/slices/view";

const CommentModal = () => {
	const {modal, box, textArea, textFieldText, labelText, submitBtn} = useStyles();
	const dispatch = useDispatch();
	const isOpen = useSelector(getViewCommentsModalOpen);
	const handleClose = () => dispatch(toggleCommentsModal());

	const formSubmitHandlr = e => {
		e.preventDefault();
		const commentObj = {};
		commentObj.name = e.target[0].value;
		commentObj.body = e.target[2].value; 

		dispatch(addComment(commentObj));
		handleClose();
	};

	return (
		<Modal
		open={isOpen}
		onClose={handleClose}
		className={modal}
		aria-labelledby="simple-modal-title"
		aria-describedby="simple-modal-description"
		>
			<Box
				component="form"
				className={box}
				noValidate
				autoComplete="off"	
				onSubmit={formSubmitHandlr}>
				<InputLabel htmlFor="name__field" className={labelText}>Name:</InputLabel>
				<TextField
					id='name__field'
					placeholder='Enter Name Here...'
					variant="outlined"
					className={textArea}
					InputProps={{
						className: textFieldText
					}}
					/>
				<InputLabel htmlFor="comment__field" className={labelText}>Comment:</InputLabel>
				<TextField
					id="comment__field"
					placeholder="Enter Comment Here..."
					multiline
					rows={4}
					variant="outlined"
					InputProps={{
						className: textFieldText
					}}
					/>
				<input 
					type='submit'
					value='Submit'
					className={submitBtn}
					variant="outlined"/>
			</Box>
		</Modal>
	);
};

export default CommentModal;
