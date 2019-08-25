import React from 'react'

interface IUserContext {
    // TODO: Give this a type when we also have admin credentials
    userDetails: any;
};
  
const UserContext = React.createContext<IUserContext>({
    userDetails: {}
});

export default UserContext;