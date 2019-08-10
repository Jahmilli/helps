import React from 'react';
import Routing from './components/pages/Routing';

interface Props {
  name: string;
  auth: any;
}

const App: React.FC<Props> = ({name, auth}) => {
  return (
    <Routing auth={auth}/>
  );
}

export default App;
