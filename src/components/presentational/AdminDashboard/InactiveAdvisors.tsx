import * as React from 'react';
import { Typography, Button } from '@material-ui/core';
import { ISession } from '../../../logic/domains/sessionDetails.domain';
import EditableTable, { EditOptions } from '../EditableTable';
import { createNewSessions } from '../../../logic/functions/createNewSessions';
import { createSessionStyle } from './styles';
import { Add } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';


interface CreateSessionsProps {};

const icons = {
  Add: () => <Add /> as React.ReactElement<SvgIconProps>
}

// Column headings in the table used in this component
const InactiveAdvisors: React.FunctionComponent<CreateSessionsProps> = () => {
    const classes = createSessionStyle();
    const editOptions = {
      canAdd: true,
      canUpdate: false
    } as EditOptions;

    const [state, setState] = React.useState({
      columns: [
        { title: 'Staff Number', field: 'staffNum' },
        { title: 'First Name', field: 'firstName' },
        { title: 'Last Name', field: 'lastName' },
        { title: 'Email', field: 'email' },
        
      ],
      data: [{} as ISession],
    });

    const isEmpty = (str: string): boolean => {
      return (!str || 0 === str.length);
    }

    return (
        <div>
            <Typography variant="h2">Inactive Advisors</Typography>
            <EditableTable state={state} setState={setState} options={{ toolbar: false, paging: true }} editOptions={editOptions}/>
            <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>   
              <Button id="makeActive" color="primary" size="large" >Active</Button>
            </div>
        </div>
    );
};
    

export default InactiveAdvisors;