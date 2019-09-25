import * as React from 'react';
import { Typography, Button } from '@material-ui/core';
import { ISession } from '../../../logic/domains/sessionDetails.domain';
import EditableTable, { EditOptions } from '../EditableTable';
import { createNewSessions } from '../../../logic/functions/createNewSessions';
import { createSessionStyle } from './styles';
import { Add } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import EnhancedTable from '../SelectableTable'


interface CreateSessionsProps {};

const icons = {
  Add: () => <Add /> as React.ReactElement<SvgIconProps>
}

// Column headings in the table used in this component
const InactiveAdvisors: React.FunctionComponent<CreateSessionsProps> = () => {

  return (
        <div>
            <EnhancedTable tableTitle = "Inactive Advisors" rows = {[]}/>
            <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>   
              <Button id="makeActive" color="primary" size="large" >Active</Button>
            </div>
        </div>
    );
};
    

export default InactiveAdvisors;