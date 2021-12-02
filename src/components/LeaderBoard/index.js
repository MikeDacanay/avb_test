import React from "react";
import { useSelector } from "react-redux";
import { useStartup } from './customHooks';
import { getTopCommentors } from "store/slices/comments";
import { useStyles } from "components/CommentModal/styles";
import { Avatar, Stack } from '@mui/material';
import { setInitial } from "shared/helpers";
import { ListItem, ListItemAvatar, ListItemText, Typography} from '@material-ui/core';

export const LeaderBoard = props => {
    const top3Commentors = useSelector(getTopCommentors); 
    const { listItem0 } = useStyles();
    useStartup(top3Commentors);
    
    return (
        <>
            <Typography
                style={{'marginTop': '40px'}}
                variant='h3'
                align='center'>
                Top 3 Commentors
            </Typography>
            <Stack spacing={4} sx={{'marginTop': '48px'}}>
                {top3Commentors.map(commentor => {
                    const [fullName, commentCount] = commentor;
                    return (
                        <ListItem 
                            alignItems="center" 
                            key={fullName}
                            className={listItem0}>
                            <ListItemAvatar>
                                <Avatar  
                                    {...setInitial(fullName)}/>
                            </ListItemAvatar>           

                            <ListItemText
                                primary={
                                    <Typography
                                        component="div"
                                        variant="h5"
                                        color="textPrimary"
                                    >
                                        Name: {fullName}
                                    </Typography>
                                }
                                secondary={
                                    <Typography
                                        component="div"
                                        variant="h6"
                                        color="textPrimary"
                                    >
                                        Comments: {commentCount}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    )
                })}
            </Stack>
        </>
    )
}; 