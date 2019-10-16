import { makeStyles } from '@material-ui/core/styles';

export const createWorkshopSessionDetailStyle = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    // paper: {
    //     height: 140,
    //     width: 100,
    // },
    control: {
        padding: theme.spacing(2),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        width: 600,
        height: 1000
    },
    paperBooking: {
        padding: theme.spacing(2),
        margin: 'auto',
        width: 100,
        height: 30
    },
    paperBookingTitle: {
        padding: theme.spacing(2),
        margin: 'auto',
        width: 100,
        height: 20,
        textAlign: "center",
        textAlignVertical: "center"
    },
    paperWaiting: {
        padding: theme.spacing(1),
        margin: 'auto',
        width: 150,
        height: 35,
        textAlign: "center",
        textAlignVertical: "center"
    },
    column: {
        float: "left",
        width: 33.33
    },
    row: {
        content: "",
        display: "table",
        clear: "both"
    }
}));