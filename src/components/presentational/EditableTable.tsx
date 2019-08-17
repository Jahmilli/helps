import React from 'react';
import MaterialTable from 'material-table';
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import {
    Delete,
    Edit,
    Clear,
    Search,
    ViewColumn,
    SaveAlt,
    ChevronLeft,
    ChevronRight,
    FirstPage,
    LastPage,
    Add,
    Check,
    FilterList,
    Remove,
} from '@material-ui/icons'


interface EditableTableProps {
    state: any;
    setState: any;
    options?: any; // View https://material-table.com/#/docs/all-props for values that can be passed in for options
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
const icons = {
    Add: () => <Add /> as React.ReactElement<SvgIconProps>,
    Check: () => <Check /> as React.ReactElement<SvgIconProps>,
    Edit: () => <Edit /> as React.ReactElement<SvgIconProps>,
    Delete: () => <Delete /> as React.ReactElement<SvgIconProps>,
    Clear: () => <Clear /> as React.ReactElement<SvgIconProps>,
    Export: () => <SaveAlt /> as React.ReactElement<SvgIconProps>,
    Filter: () => <FilterList /> as React.ReactElement<SvgIconProps>,
    FirstPage: () => <FirstPage /> as React.ReactElement<SvgIconProps>,
    LastPage: () => <LastPage /> as React.ReactElement<SvgIconProps>,
    NextPage: () => <ChevronRight /> as React.ReactElement<SvgIconProps>,
    PreviousPage: () => <ChevronLeft /> as React.ReactElement<SvgIconProps>,
    Search: () => <Search /> as React.ReactElement<SvgIconProps>,
    ThirdStateCheck: () => <Remove /> as React.ReactElement<SvgIconProps>,
    ViewColumn: () => <ViewColumn /> as React.ReactElement<SvgIconProps>,
    DetailPanel: () => <ChevronRight /> as React.ReactElement<SvgIconProps>,
}

const EditableTable: React.FunctionComponent<EditableTableProps> = ({ state, setState, options }) => {
  return (
    <MaterialTable
      title="Create Sessions"
      options={{...options, search: false}}
      // @ts-ignore
      icons={icons}
      // @ts-ignore
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              // @ts-ignore
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}

export default EditableTable;