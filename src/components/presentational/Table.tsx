import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

interface CustomizedTablesProps {
  headRows: Array<string>;
  children?: any;
}

// interface TableData {
//   headRows: Array<string>;
//   // bodyRows: Array<Session>;
// }

const CustomizedTables: React.FunctionComponent<CustomizedTablesProps> = ({ headRows, children }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {headRows.map((title: string, index: number) => {
              return <StyledTableCell>{title}</StyledTableCell> 
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          { children }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default CustomizedTables;