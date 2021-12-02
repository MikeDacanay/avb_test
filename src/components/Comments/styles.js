import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    listItemText: {
        display: "flex",
		alignItems: "center",
    },
    
    commentLabel: {
        fontWeight: 'bold',
        marginRight: '10px',
        color: theme.palette.secondary.light,
    },

    commentText: {
        color: theme.palette.secondary.light,
    },

    listItem0: {
        backgroundColor: theme.palette.secondary.dark,
    },
    listItem1: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    avatar: {
        width: '100px',
        height: '100px',
    }
}));