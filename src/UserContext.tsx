import React from 'react'

interface IUserContext {
    userDetails: any;
};
  
const UserContext = React.createContext<IUserContext>({
    userDetails: {}
});

export default UserContext;