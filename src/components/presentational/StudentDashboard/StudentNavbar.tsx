import * as React from 'react';
import { Paper, Tab, Tabs} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import navbarTabs from './__data__/data.studentNavbarTabs.json';

interface StudentNavbarProps {
    path: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

const StudentNavbar: React.FunctionComponent<StudentNavbarProps> = ({ path }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    function handleChange(event: any, newValue: any) {
        setValue(newValue);
    }

    return (
        <div>
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    {navbarTabs.map((tab, index) => {
                        return <Tab key={index} label={tab.name} component={Link} to={`${path}${tab.path}`} />
                    })}
                </Tabs>
            </Paper>
        </div>
    );
}

export default StudentNavbar;



