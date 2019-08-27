import React from 'react';
import Routing from './components/pages/Routing';
import Auth from './logic/functions/core/Auth';
import UserContext from './UserContext';
import getStudentDetails from './logic/functions/getStudentDetails';

interface AppProps {
  auth: Auth;
}

const App: React.FC<AppProps> = ({ auth }) => {
  // TODO: Will need to make sure this is working with admins once we have admins in database.
  const [ userDetails, setUserDetails ] = React.useState();

  React.useEffect(() => {
    async function getUserDetails() {
      const metaData: any = await auth.readUserMetaData();
      if (metaData.isStudent) {
        try {
          const details = await getStudentDetails(metaData._id);
          console.log('details are', details);
          setUserDetails(details);
        } catch(err) {
          console.log('An error occurred when getting student details', err);
        }
      }

    }
    getUserDetails();
  }, [auth]);

  return (
    <UserContext.Provider value={{ userDetails }}>
      <Routing auth={auth}/>
    </UserContext.Provider>
  );
}

export default App;
