import * as React from 'react';
import { Typography, Button } from '@material-ui/core';
import { ISession } from '../../../logic/domains/sessionDetails.domain';
import EditableTable, { EditOptions } from '../EditableTable';
import { Add } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import EnhancedTable from '../SelectableTable'

const icons = {
    Add: () => <Add /> as React.ReactElement<SvgIconProps>
}

type AvailableSessionsProps = RouteComponentProps<any> & {
    advisorData: Array<ISession>;
    isAdmin: boolean;
}

const AvailableAdvisors: React.FunctionComponent<AvailableSessionsProps> = (props) => {

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
        </div>
    );
};
    

export default withRouter(AvailableAdvisors);