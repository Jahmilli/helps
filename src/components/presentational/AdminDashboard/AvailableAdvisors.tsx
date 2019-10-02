import * as React from 'react';
import { Typography, Button } from '@material-ui/core';
import { ISession } from '../../../logic/domains/sessionDetails.domain';
import EditableTable, { EditOptions } from '../EditableTable';
import { Add } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import EnhancedTable from '../SelectableTable'
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const icons = {
    Add: () => <Add /> as React.ReactElement<SvgIconProps>
}

type AvailableSessionsProps = RouteComponentProps<any> & {
    advisorData: Array<ISession>;
    isAdmin: boolean;
}

interface State {
    name: string;
  }
  
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  }),
);

const AvailableAdvisors: React.FunctionComponent<AvailableSessionsProps> = (props) => {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
      name: ''
    });
  
    const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: event.target.value });
    };
  
    return (
        <div>
            <EnhancedTable tableTitle = "Available Advisors" rows = {[]}/>
            <Typography variant="h6">
                    Please Note:
            </Typography>
            <Typography variant="body1">
                <ul>If you delete an advisor, all sessions run by that advisor will be deleted</ul>
                <ul>Inactive advisors will not be able to log in, and their names will be removed from the drop down</ul>
            </Typography>
            
            <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>   
                <Button id="delete" color="primary" size="large" >Delete</Button>
                <Button id="update" color="primary" size="large" >Update</Button>
                <Button id="inactive" color="primary" size="large" >Inactive</Button>
            </div>

            <Typography variant="h6">
                    Add new Advisor
            </Typography>
            <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>   
                <TextField
                    id="name"
                    label="Name"
                    className={classes.textField}
                    defaultValue={""}
                    onChange={handleChange('name')}
                    margin="normal"
                />
                <TextField
                    id="first-name"
                    label="First Name"
                    className={classes.textField}
                    defaultValue={""}
                    onChange={handleChange('name')}
                    margin="normal"
                />
                <TextField
                    id="last-name"
                    label="Last Name"
                    className={classes.textField}
                    defaultValue={""}
                    onChange={handleChange('name')}
                    margin="normal"
                />
                <TextField
                    id="email"
                    label="Email"
                    className={classes.textField}
                    defaultValue={""}
                    onChange={handleChange('name')}
                    margin="normal"
                />
                <Button id="addAdvisor" color="primary" size="large" >Add Advisor</Button>
            </div>
        </div>
    );
};
    

export default withRouter(AvailableAdvisors);