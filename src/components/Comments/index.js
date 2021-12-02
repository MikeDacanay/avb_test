import React from "react";
import { useSelector } from "react-redux";
import { useGetCommentsOnInit } from "./customHooks";
import { getComments } from "store/slices/comments";
import { setInitial } from "shared/helpers";
import { useStyles } from "./styles";
import { ListItem, ListItemAvatar, ListItemText, Typography} from '@material-ui/core';
import { Avatar, Stack } from '@mui/material';

export const Comments = () => {
	useGetCommentsOnInit();
	const comments = useSelector(getComments);
	const { listItemText, commentLabel, commentText, listItem1, listItem0 } = useStyles(); 

	return (
		<>
			<Typography
				style={{'marginTop': '40px'}}
				variant='h3'
				align='center'>
				Comments
			</Typography>
			<Stack spacing={4} sx={{'marginTop': '48px'}}>
				{comments.map(({id, name: fullName, body}) => (
					<ListItem 
						alignItems="center" 
						key={id}
						className={listItem0}>
						<ListItemAvatar>
							<Avatar  
								{...setInitial(fullName)}/>
						</ListItemAvatar>
						<ListItem className={listItem1}>
							<ListItemText
								className={listItemText}
								primary={
									<Typography
										component='span'
										variant='subtitle2'
										className={commentLabel}>
										Name: 
									</Typography>
								}
								secondary={
									<Typography
										component="div"
										variant="body2"
										color="textPrimary"
										className={commentText}
									>
										{fullName}
									</Typography>
								}
							/>
							<ListItemText
								className={listItemText}
								primary={
									<Typography
										component='span'
										variant='subtitle2'
										className={commentLabel}>
										Comment: 
									</Typography>
								}
								secondary={
									<Typography
										component="div"
										variant="body2"
										color="textPrimary"
										className={commentText}
									>
										{body}
									</Typography>
								}
							/>
						</ListItem>
					</ListItem>
				))}
			</Stack>
		</>
	)
}; 