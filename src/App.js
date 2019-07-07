import React from 'react';
import SideBar from './common/sideBar'

function App(props) {
  return (
    <div>
      <SideBar props={{...props}}/>
    </div>
  );
}

export default App;
