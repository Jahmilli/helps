import React from 'react';
import UserContext from '../../../UserContext';
import { ISession } from '../../../logic/domains/sessionDetails.domain';
import getStudentWorkshops from '../../../logic/functions/getStudentWorkshops';
import MaterialTable from 'material-table';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import StudentWorkshopDetail from '../../presentational/StudentDashboard/StudentWorkshopDetails';

interface StudentWorkShopProps { }

let workshopData:any;

const StudentWorkshopRegistration: React.FunctionComponent<StudentWorkShopProps> = () => {

    const [sessions, setSessions] = React.useState<Array<ISession>>([]);
    const context = React.useContext(UserContext);

    React.useEffect(() => {
        async function callGetWorkshops() {
            try {
                workshopData = await getStudentWorkshops(context.userDetails.studentId);
            } catch (err) {
                alert('An error occurred when getting current sessions');
            }
        }
        if (context.userDetails) {
            callGetWorkshops();
        }
    }, []);

    return (      
        <div style={{ margin: '0 3%' }}>
            <h1>Here are some workshops</h1>
            <MaterialTable
                title="Workshops"
                // @ts-ignore
                columns={[
                    { title: 'Id', field: 'id' },
                    { title: 'name', field: 'name' },
                    {render: rowData => <Link to={{
                        pathname: '/student/StudentWorkshopDetail',
                        state: [{id: 1, name: 'Ford', color: 'red'}]
                      }}> Your Page </Link>}
                ]
                }
                data={workshopData}
            />
        </div>
    );
};

export default StudentWorkshopRegistration;