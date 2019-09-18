import * as React from 'react';
import { Typography, Button } from '@material-ui/core';
import { ISession } from '../../../logic/domains/sessionDetails.domain';
import EditableTable, { EditOptions } from '../EditableTable';
import { Add } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

const icons = {
    Add: () => <Add /> as React.ReactElement<SvgIconProps>
}

type AvailableSessionsProps = RouteComponentProps<any> & {
    advisorData: Array<ISession>;
    isAdmin: boolean;
}

const AvailableAdvisors: React.FunctionComponent<AvailableSessionsProps> = (props) => {
    const BOOK_SESSION = 'Book this session';
    const BOOKED = 'Booked';
    const editOptions = {
        canUpdate: true,
        canDelete: true
    } as EditOptions;

    const [state, setState] = React.useState({});

    const displayStudentId = (session: ISession) => {
        if (session.currentBooking === undefined) {
            return BOOK_SESSION;
        }
        return props.isAdmin ? session.currentBooking.studentId : BOOKED;
    }

    const renderWaitingList = (session: ISession) => {
        if (session.waitingList.length === 0) {
            return <Button onClick={addToWaitingList(session)}>Add</Button>
        }
        return <Button onClick={addToWaitingList(session)}>{session.waitingList.length} Student(s)</Button>
    }

    React.useEffect(() => {
        if (props.advisorData) {
            setState({
                columns: [
                    { title: 'Staff Number', field: 'staffNum' },
                    { title: 'First Name', field: 'firstName' },
                    { title: 'Last Name', field: 'lastName' },
                    { title: 'Email', field: 'email' },
                ],
                data: props.advisorData.map((session: ISession) => session)
            });
        }
    }, [props.advisorData]);

    const addToWaitingList = (eventData: ISession) => (event: React.MouseEvent) => {
        props.history.push({
            pathname: `/admin/bookSession`,
            state: {
                eventData,
                isCurrentBooking: false
            }
        });
    }

    return (
        <div>
            <Typography variant="h2">Advisors available</Typography>
            <EditableTable state={state} setState={setState} actions={[{
                    icon: icons.Add,
                    tooltip: 'Select advisor'
                    //onClick: (event: any, rowData: ISession) => handleBookSession(rowData)
                }
            ]}options={{ toolbar: false, paging: true }} editOptions={editOptions} />
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