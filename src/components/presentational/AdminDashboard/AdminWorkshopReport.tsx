import * as React from 'react';
import { Typography, Button, InputLabel } from '@material-ui/core';
import { ISession } from '../../../logic/domains/sessionDetails.domain';
import EditableTable, { EditOptions } from '../EditableTable';
import { Add } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { typography } from '@material-ui/system';
import { Redirect } from 'react-router';


type AvailableSessionsProps = RouteComponentProps<any> & {
    isAdmin: boolean;
} 

const AdminReport: React.FunctionComponent<AvailableSessionsProps> = (props) => {
        return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h3"> Workshop Reports </Typography>
            </div>

            <Typography variant="h6"> Step 1: </Typography>
            <Typography variant="body1"> <ul> Select a period from </ul>
            </Typography>

            <Typography variant="h6"> Step 2: </Typography>
            <Typography variant="body1">
                <ul>
                Select a report
                </ul>

                <form>
                    <div className="BookedSessions">
                        <label>
                            <input type="radio" id="BookedSessions" value="option1" checked={true} />
                            Booked Sessions
                        </label>
                    </div>
                    <div className="CancelledSessions">
                        <label>
                            <input type="radio" value="option1" checked={false} />
                            Cancelled sessions
                        </label>
                    </div>
                    <div className="SessionWaitingList">
                        <label>
                            <input type="radio" value="option1" checked={false} />
                            Sessions having waiting lists
                        </label>
                    </div>
                    <div className="NotAttendedSessions">
                        <label>
                            <input type="radio" value="option1" checked={false} />
                            Not-attended sessions
                        </label>
                    </div>
                    <div className="NonBookedSessions">
                        <label>
                            <input type="radio" value="option1" checked={false} />
                            Non-booked sessions
                        </label>
                    </div>
                    <div className="StudentProfileData">
                        <label>
                            <input type="radio" value="option1" checked={false} />
                            Student profile data
                        </label>
                    </div>
                    <div className="Summary">
                        <label>
                            <input type="radio" value="option1" checked={false} />
                            Summary of students booking the sessions
                        </label>
                    </div>
                    <div className="StudentHistory">
                        <label>
                            <input type="radio" value="option1" checked={false} />
                                Student history:   ID:<input type="text" />
                        </label>
                        
                            
                    </div>
                    <div className="AdvisorsComment">
                        <label>
                            <input type="radio" value="option1" checked={false} />
                                Advisors' comment:  ID:<input type="text" />
                        </label>
                    </div>
                    <div className="StudentWaitingList">
                        <label>
                            <input type="radio" value="option1" checked={false} />
                            Students in the waiting list
                        </label>
                    </div>
                </form>
            </Typography>

            <Typography variant="h6"> Step 3: </Typography>
            <Typography variant="body1"> <ul> Press "Submit" button </ul>
                </Typography>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button id="submit" color="primary" size="large" > Submit</Button>
            </div>
        </div>


    );
};


export default withRouter(AdminReport);