import React from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch';

type Props = {}

type State = {}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Stopwatch/>
      </div>
    )
  }

}

export default App;
