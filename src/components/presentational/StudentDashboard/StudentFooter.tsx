import * as React from 'react';
import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import studentFooterMainLinks from './__data__/data.studentFooterMainLinks.json';
import studentFooterSecondaryLinks from './__data__/data.studentFooterSecondaryLinks.json';
import Logo from '../../../images/uts-logo.png';

const useStyle = makeStyles(theme => ({
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
        // height: '20%',
        alignSelf: 'flex-end',
        maxWidth: '20%',
        maxHeigt: '20%'
        // width: '20%'
    },
    rightLink: {
        alignSelf: 'flex-end',
        textAlign: 'right'
    }
}))

const StudentFooter: React.FunctionComponent = () => {
    const classes = useStyle();
    return (
        <div className={classes.footerLockup}>
            <div className={classes.leftLockup}>
                <div className={classes.linkLockup}>
                    {studentFooterMainLinks.map((link, index) => {
                        return <Link href={link.url} key={index} className={classes.link}>{link.name}</Link>
                    })}
                </div>
                <div>
                    <Typography variant="body1">© Copyright UTS - CRICOS Provider No: 00099F - 27 November 2008 10:34 AM</Typography>
                    <Typography variant="body1">The page is authorised by Director, SSU - Send comments to operations manager</Typography>
                </div>
                <div className={classes.linkLockup}>
                    {studentFooterSecondaryLinks.map((link, index) => {
                        return <Link href={link.url} key={index} className={classes.link}>{link.name}</Link>
                    })}
                </div>
            </div>
            <div className={classes.rightLockup}>
                <img src={Logo} className={classes.logo} alt="UTS Logo" />
                <Link href="http://www.atn.edu.au/" className={classes.rightLink}>
                    UTS is a member of the <br />Australian Technology Network of <br />Universities
                </Link>
            </div>
        </div>
    );
};

export default StudentFooter;