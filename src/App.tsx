import React from 'react';
import Routing from './components/pages/Routing';
import Auth from './logic/functions/core/Auth';

interface AppProps {
  auth: Auth;
}
const App: React.FC<AppProps> = ({ auth }) => {
  return (
    <Routing auth={auth}/>
  );
}

export default App;
