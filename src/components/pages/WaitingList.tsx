import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { RouteComponentProps, withRouter } from 'react-router';
import { ISession, ISessionDetails } from '../../logic/domains/sessionDetails.domain';
import { Session } from 'inspector';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import EditableTable from '../presentational/EditableTable';
import { AvailableSessionsStyle } from '../presentational/AdminDashboard/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  }),
);

type WaitingListProps = RouteComponentProps<any> & {
  sessionData: Array<ISession>;
  
}

const WaitingList: React.FunctionComponent<WaitingListProps> = (props) => {
  
  const [state, setState] = React.useState({});
  const [isAdminDisplay, setIsAdminDisplay] = React.useState(false);
  const classes = AvailableSessionsStyle();

  const handleAdminDisplayChange = (event: any) => {
      setIsAdminDisplay(!isAdminDisplay);
  }

  

  React.useEffect(() => {
      if (props.sessionData) {
          setState({
              columns: [
                
                  { title: 'Booked by', field: 'studentId'}, 
                 
              ],

              data: props.sessionData.map((waitingList: ISession) => waitingList)
          });
      }
  }, [props.sessionData, isAdminDisplay]);




  return (
      <div>
          <Typography variant="h2">Sessions available</Typography>
          <div className={classes.displayIconLockup} onClick={handleAdminDisplayChange}>
              <FontAwesomeIcon className={classes.displayIcon} icon={ isAdminDisplay ? faEye : faEyeSlash } />
          </div>

          <EditableTable state={state} setState={setState} actions={[{
                  
          
              }
          ]}
      />
      </div>
  );
};
  

export default withRouter(WaitingList);



// function createData(studentId: number, name: string, date: string, startTime: string, room: string,type:string) {
//   return { studentId,name,date,startTime,room,type};
// }

// const rows = [
//   createData(12000000,"Jack","01/01/2019","12:00:00","CB11.01.01","	Random Type"),

// ];
// // export default withRouter(WaitingList);

// export default function WaitingList() {
//   const classes = useStyles();

//   return (
//     <Paper className={classes.root}>
//       <Table className={classes.table}>
//         <TableHead>
//           <TableRow>
//             <TableCell>StudentID</TableCell>
//             <TableCell align="right">Name</TableCell>
//             <TableCell align="right">Date&nbsp;(g)</TableCell>
//             <TableCell align="right">StartTime&nbsp;(g)</TableCell>
//             <TableCell align="right">Room&nbsp;(g)</TableCell>
//             <TableCell align="right">Type&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.studentId}
//               </TableCell>
//               <TableCell align="right">{row.name}</TableCell>
//               <TableCell align="right">{row.date}</TableCell>
//               <TableCell align="right">{row.startTime}</TableCell>
//               <TableCell align="right">{row.room}</TableCell>
//               <TableCell align="right">{row.type}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// }