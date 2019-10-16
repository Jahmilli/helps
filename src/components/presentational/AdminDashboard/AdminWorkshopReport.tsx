import * as React from 'react';
import { Typography, Button, InputLabel} from '@material-ui/core';
import { ISession } from '../../../logic/domains/sessionDetails.domain';
import EditableTable, { EditOptions } from '../EditableTable';
import { Add, ArrowDropDown } from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { typography } from '@material-ui/system';
import { Redirect } from 'react-router';


type AvailableSessionsProps = RouteComponentProps<any> & {
    isAdmin: boolean;
} 

const AdminWorkShopReport: React.FunctionComponent<AvailableSessionsProps> = (props) => {
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
                    <div className="SessionWaitingList">
                        <label>
                            <input type="radio" value="option1" checked={false} />
                            Workshop skill-sets details
                        </label>
                            <div>
                            Workshop skill-sets
                                <select>
                                    <option value="1"> Improve Your Writing </option>
                                    <option value="2"> Improve Your Grammar </option>
                                    <option value="3"> Improve Your Speaking </option>
                                    <option value="4"> WriteNow! Writing Support Sessions</option>
                                    <option value="5"> U:PASS </option>
                                    <option value="6"> Conversations@UTS </option>
                                    <option value="7"> Academic Writing Boot Camp Feb 2019</option>
                                    <option value="7"> Summer Special Workshops 2018-2019</option>
                                </select>
                            </div>

                            <div>
                                Workshop Topics
                                <select>
                                    <option value="1"> Starting Your Assignment </option>
                                    <option value="2"> What is Academic Writing? </option>
                                    <option value="3"> How to Communicate Effectively? </option>
                                    <option value="4"> Time Management </option>
                                    <option value="5"> U:PASS </option>
                                </select>
                            </div>

                            <div>
                                <input type='checkbox' name='test' /> Booking
                                <input type='checkbox' name='test' /> Waiting
                                <input type='checkbox' name='test' /> Include student profiles
                            </div>
                    </div>
                </form>
                <form>
                    <div className="NotAttendedSessions">
                        <label>
                            <input type="radio" value="option1" checked={false} />
                            Workshop skill-sets summary
                        </label>
                    </div>
                </form>
            </Typography>

            <Typography variant="body1"> <ul> Press "Submit" button </ul>

             </Typography>


            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button id="submit" color="primary" size="large" > Submit</Button>
            </div>
        </div>


    );
};


export default withRouter(AdminWorkShopReport);