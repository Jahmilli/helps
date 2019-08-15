import * as React from 'react';
import { Link, Typography } from '@material-ui/core';
import FooterMainLinks from './__data__/data.studentFooterMainLinks.json';
import FooterSecondaryLinks from './__data__/data.studentFooterSecondaryLinks.json';
import Logo from '../../images/uts-logo.png';
import { StudentFooterStyles } from './styles';


const Footer: React.FunctionComponent = () => {
    const classes = StudentFooterStyles();
    return (
        <div className={classes.footerLockup}>
            <div className={classes.leftLockup}>
                <div className={classes.linkLockup}>
                    {FooterMainLinks.map((link, index) => {
                        return <Link href={link.url} key={index} className={classes.link}>{link.name}</Link>
                    })}
                </div>
                <div>
                    <Typography variant="body1">© Copyright UTS - CRICOS Provider No: 00099F - 27 November 2008 10:34 AM</Typography>
                    <Typography variant="body1">The page is authorised by Director, SSU - Send comments to operations manager</Typography>
                </div>
                <div className={classes.linkLockup}>
                    {FooterSecondaryLinks.map((link, index) => {
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

export default Footer;