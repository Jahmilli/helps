import React from 'react';
import Routing from './components/pages/Routing';
import Auth from './logic/functions/core/Auth';

const App: React.FC = () => {
  const auth = new Auth();
  return (
    <Routing auth={auth}/>
  );
}

export default App;
