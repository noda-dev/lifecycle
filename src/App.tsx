import React from 'react';
import './App.css';
import Button from './components/Button';
import Checkbox from './components/Checkbox';

type Props = {}

type State = {}

class App extends React.Component<Props, State> {

  render() {
    return(
      <div>
        <Button></Button>
        <Checkbox label="チェックボックス1"></Checkbox>
        <Checkbox label="チェックボックス2"></Checkbox>
        <Checkbox label="チェックボックス3"></Checkbox>
      </div>
    )
  }

}

export default App;
