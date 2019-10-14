import * as React from 'react';
import { Typography, Button } from '@material-ui/core';
import { ISession } from '../../../logic/domains/sessionDetails.domain';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import EnhancedTable from '../SelectableTable'
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

type AvailableSessionsProps = RouteComponentProps<any> & {
    advisorData: Array<ISession>;
    isAdmin: boolean;
}

interface Data {
  staffNum: string;
  firstName: string;
  lastName: string;
  email: string;
}

const dataStuff = [
  createData('12903909', "Ethan", "Goh", "ethanemail@email.com"),
  createData('20098844', "Jane", "Citizen", "20098844@email.com"),
  createData('30185872', "Christiana", "Sherman", "sherman@email.com"),
  createData('76424730', "Anais", "Xiong", "aiong@email.com"),
  createData('60551318', "Persephone", "Walters", "walters@email.com"),
  createData('83979354', "Andy", "Millar", "mandy@email.com"),
  createData('77639826', "Veronika", "Yang", "veroniang@email.com"),
  createData('55489167', "Dhruv", "Pena", "dhena@email.com"),
  createData('19309107', "Kimora", "Blaese", "kiilaese@email.com"),
];  

const inactiveUsers = [
  createData('76677413', "Austin", "Moreno", "aoreno@email.com"),
];

function createData(staffNum :string, firstName :string, lastName :string, email :string) {
  return { staffNum, firstName, lastName, email };
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
    const [values, setValues] = React.useState<Data>({
      staffNum: "",
      firstName: "",
      lastName: "",
      email: "",
    });

    const handleUpdateIdNum = (event: any) => {
      setValues(event.target.value);
    }
    const handleUpdateFirstName= (event: any) => {
      setValues(event.target.value);
    }
    const handleUpdateLastName = (event: any) => {
      setValues(event.target.value);
    }
    const handleUpdateEmail = (event: any) => {
      setValues(event.target.value);
    }

    function addStuff(){
      dataStuff.push(createData(values.staffNum, values.firstName, values.lastName, values.email));
    }

    return (
        <div>
            <EnhancedTable tableTitle = "Available Advisors" rows = {dataStuff}/>
            <Typography variant="h6">
                    Please Note:
            </Typography>
            <Typography variant="body1">
                <ul>If you delete an advisor, all sessions run by that advisor will be deleted</ul>
                <ul>Inactive advisors will not be able to log in, and their names will be removed from the drop down</ul>
            </Typography>
            
            <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>   
                <Button id="update" color="primary" size="large" >Update</Button>
                <Button id="inactive" color="primary" size="large" >Inactive</Button>
            </div>

            <Typography variant="h6">
                    Add new Advisor
            </Typography>
            <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>   
                <TextField
                    id="idNum"
                    label="ID Number"
                    className={classes.textField}
                    value={values.staffNum}
                    onChange={handleUpdateIdNum}
                    defaultValue={""}
                    margin="normal"
                />
                <TextField
                    id="first-name"
                    label="First Name"
                    className={classes.textField}
                    value={values.firstName}
                    defaultValue={""}
                    onChange={handleUpdateFirstName}
                    margin="normal"
                />
                <TextField
                    id="last-name"
                    label="Last Name"
                    className={classes.textField}
                    value={values.lastName}
                    defaultValue={""}
                    onChange={handleUpdateLastName}
                    margin="normal"
                />  
                <TextField
                    id="email"
                    label="Email"
                    className={classes.textField}
                    value={values.email}
                    defaultValue={""}
                    onChange={handleUpdateEmail}
                    margin="normal"
                />
                <Button id="addAdvisor" color="primary" size="large" onClick={addStuff}>Add Advisor</Button>
            </div>
            <EnhancedTable tableTitle = "Inactive Advisors" rows = {inactiveUsers}/>
            <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>   
              <Button id="makeActive" color="primary" size="large" >Active</Button>
            </div>
        </div>
    );
};
    

export default withRouter(AvailableAdvisors);