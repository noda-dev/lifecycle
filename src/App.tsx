import React from 'react';
import './App.css';
import Clock from './components/Clock';

type Props = {}

type State = {}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    
    this.state = {}
  }

  render() {
    return <Clock/>
  }

}

export default App;
