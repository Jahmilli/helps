import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { createNewSessions } from "../../logic/functions/createNewSessions";
import { TextField, NativeSelect, Button, FormGroup } from '@material-ui/core';
import { ISession } from '../../logic/domains/sessionDetails.domain';


interface EditableTableProps {
  workshop: any;
  state: any;
  setState: any;
  editOptions?: EditOptions;
  tableTitle: any;
}
export interface EditOptions {
  canAdd?: boolean;
  canUpdate?: boolean;
  canDelete?: boolean;
}

export interface TableState {
  columns: Array<Column>
  data: any;
}

interface Column {
  title: string;
  field: string;
  type?: string;
  lookup?: any
}

 interface Data {
    startDate: string,
    weeks: string,
    days: string,
    room: string,
    max: string,
    co: string,
    reminder: string,
}

const EditableTable: React.FunctionComponent<EditableTableProps> = ({ workshop, state, setState, editOptions, tableTitle }) => {
    let editOptionsObj: any = {};
    let data: Data = {
        startDate: "",
        co: "",
        days: "",
        max: "",
        reminder: "",
        room: "",
        weeks: ""
    };

    const isEmpty = (str: string): boolean => {
        return 0 === str.length;
    };

    const validateSessions = (): boolean => {
            if (
                isEmpty(data.co) ||
                isEmpty(data.max) ||
                isEmpty(data.room) ||
                isEmpty(data.startDate) ||
                isEmpty(data.weeks)
            ) {
                return false;
            }
        return true;
    };

    const submitNewSessions = async () => {
        if (validateSessions()) {
            const tempData = state.data as Array<ISession>;
            tempData[0] = { ...tempData[0], advisor: "current advisor" };
            try {
                await createNewSessions(tempData);
                alert("Sessions created");
            } catch (err) {
                alert("An error occurred when creating the sessions");
            }
        } else {
            alert("Please fill in all fields for your new sessions");
        }      
    };

    const handleChange = (name: keyof typeof state) => (event: React.ChangeEvent<HTMLInputElement>) => {

        if (name === "start-date") {
            data.startDate = event.target.value;
        } else if (name === "weeks") {
            data.weeks = event.target.value;
        } else if (name === "room") {
            data.room = event.target.value;
        } else if (name === "max") {
            data.max = event.target.value;
        } else if (name === "co") {
            data.co = event.target.value;
        } else if (name === "reminder") {
            data.reminder = event.target.value;
        } else if (name.toString().includes("checked")) {
            setState({ ...state, [name]: event.target.checked });
        }
    };

  if (editOptions) {
    if (editOptions.canAdd) {
      editOptionsObj.onRowAdd = (newData: any) =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            const data = [...state.data];
            data.push(newData);
            setState({ ...state, data });
          }, 600);
        })
    }
    if (editOptions.canUpdate) {
      editOptionsObj.onRowUpdate = (newData: any, oldData: any) =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            const data = [...state.data];
            data[data.indexOf(oldData)] = newData;
            setState({ ...state, data });
          }, 600);
        })
    }
    if (editOptions.canDelete) {
      editOptionsObj.onRowDelete = (oldData: any) =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            const data = [...state.data];
            data.splice(data.indexOf(oldData), 1);
            setState({ ...state, data });
          }, 600);
        })
    }
  }
  return (
    <div>
        <h4>{tableTitle}</h4>
        <Table className="multipleSessionTable" aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Start Date</TableCell>
                    <TableCell >Weeks</TableCell>
                    <TableCell >Days</TableCell>
                    <TableCell >Room</TableCell>
                    <TableCell >Max</TableCell>
                    <TableCell >C/O</TableCell>
                    <TableCell >Reminder</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <TextField
                            id="start-date"
                            className="start-date"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleChange('start-date')}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            id="weeks"
                            className="weeks"
                            placeholder="2"
                            onChange={handleChange('weeks')}
                        />
                    </TableCell>
                      <TableCell>
                          <FormGroup row>
                              <FormControlLabel control={<Checkbox value="checkedA" onChange={handleChange('checkedA')} color="primary" />} label="Mon" />
                              <FormControlLabel control={<Checkbox value="checkedB" onChange={handleChange('checkedB')} color="primary" />} label="Tue" />
                              <FormControlLabel control={<Checkbox value="checkedC" onChange={handleChange('checkedC')} color="primary" />} label="Wed" />
                              <FormControlLabel control={<Checkbox value="checkedD" onChange={handleChange('checkedD')} color="primary" />} label="Thu" />
                              <FormControlLabel control={<Checkbox value="checkedE" onChange={handleChange('checkedE')} color="primary" />} label="Fri" />
                              <FormControlLabel control={<Checkbox value="checkedF" onChange={handleChange('checkedF')} color="primary" />} label="Sat" />
                              <FormControlLabel control={<Checkbox value="checkedG" onChange={handleChange('checkedG')} color="primary" />} label="Sun" />
                          </FormGroup>
                    </TableCell>
                    <TableCell>
                        <TextField
                            id="room"
                            className="room"
                              placeholder="B11.8.101"
                              onChange={handleChange('room')}
                        />
                    </TableCell>
                    <TableCell>
                          <TextField
                              id="max"
                              className="max"
                              placeholder="35"
                              onChange={handleChange('max')}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            id="co"
                            className="co"
                              placeholder="24"
                              onChange={handleChange('co')}
                        />
                    </TableCell>
                    <TableCell>
                        <NativeSelect
                              defaultValue="All"
                              className="reminder"
                              name="reminder"
                              onChangeCapture={handleChange('reminder')}
                            inputProps={{
                                name: 'reminder',
                                id: 'reminder',
                            }}
                        >
                            <option value="All">All</option>
                            <option value="None">None</option>
                        </NativeSelect>
                    </TableCell>
                </TableRow>
            </TableBody>
          </Table>
          <Button id="submitBooking" color="primary" size="large" onClick={submitNewSessions}>
              Book Multiple Sessions for {workshop.shortTitle}
		  </Button>
    </div>
  );
}

export default EditableTable;
