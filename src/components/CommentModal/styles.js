import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
		alignItems: "center",
		justifyContent: "center",
    },
    
    box: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        padding: '15px 50px',
        borderRadius: '10px',
        backgroundColor: theme.palette.primary.dark,
    },

    textArea: {
        backgroundColor: 'transparent',
        width: '100%',
        marginBottom: '10px',
    },

    textField: {
        border: '1px solid #fff',
        marginBottom: '10px',
    },

    labelText: {
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: '10px',
    },

    submitBtn: {
        width: '100px',
        margin: '0 auto',
        height: '30px',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        fontSize: '16px',
    },

    textFieldText: {
        color: theme.palette.primary.light,
    }
}));