import { makeStyles } from '@material-ui/core/styles';

export const createSessionStyle = makeStyles(theme => ({
    lockup: {
        textAlign: 'center'
    },
}));
export const AvailableSessionsStyle = makeStyles(theme => ({
    displayIconLockup: {
        float: 'right',
        height: '25px',
        width: '25px',
        zIndex: 1,
        position: 'relative'
    },
    displayIcon: {
        height: '25px',
        width: '25px'
    },
    table: {
        clear: 'both'
    }
}));