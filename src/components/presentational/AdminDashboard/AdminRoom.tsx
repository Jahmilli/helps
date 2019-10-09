import * as React from 'react';
import { ISession } from '../../../logic/domains/sessionDetails.domain';
import EditableTable, { EditOptions } from '../EditableTable';
import { createSessionStyle } from './styles';


interface AddRoomsProps{ };

const CreateRooms: React.FunctionComponent<AddRoomsProps> = () => {
    const classes = createSessionStyle();
const editOptions = {
    canAdd: true,
    canUpdate: true,
    canDelete: true
} as EditOptions;

const [state,setState] = React.useState({
    columns: [
        { title: 'Room',field: 'room' },
    ],
    data : [{} as ISession],
});

const isEmpty = (str: string): boolean => {
  return (!str || 0 === str.length);
}

const validate = (): boolean => {
  for (let session of state.data) {
    if ( isEmpty(session.room)) {
      return false;
    }
  }
  return true;
}


   
  return (
    <div className={classes.lockup}>
      <EditableTable state={state} setState={setState} options={{ paging: false }} editOptions={editOptions}
        tableTitle={"Rooms"} />
    </div>
    
  )



};


export default CreateRooms;