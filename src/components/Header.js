import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { toggleCommentsModal } from "store/slices/view";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
  },

  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const {root, title} = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpen = () => dispatch(toggleCommentsModal()); 
  const navToLeaderBoardHandlr = () => navigate('/leaderboard');

  return (
    <AppBar className={root}>
      <Toolbar>
        <Typography variant="h6" className={title}>
          Commentor
        </Typography> 
        <Button color='inherit' onClick={navToLeaderBoardHandlr}>Leaderboard</Button> 
        <Button color="inherit" onClick={handleOpen}>
          Add Comment
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
