import { makeStyles } from '@material-ui/core/styles';

export const StudentFooterStyles = makeStyles(theme => ({
    footerLockup: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        padding: '0 3%'
    },
    leftLockup: {
        display: 'flex',
        flexFlow: 'row wrap',
        flexGrow: 2
    },
    linkLockup: {
        display: 'flex',
        flexDirection: 'row'
    },
    link: {
        marginRight: '10px',
    },
    rightLockup: {
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'flex-end',
        flexGrow: 1
    },
    logo: {
        alignSelf: 'flex-end',
        maxWidth: '20%',
        maxHeigt: '20%'
    },
    rightLink: {
        alignSelf: 'flex-end',
        textAlign: 'right'
    } 
}));

export const studentNavbarStyles = makeStyles({
  root: {
    flexGrow: 1,
  }
});