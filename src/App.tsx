import React from 'react';
import './App.css';
import Greeting from './components/Greeting';

type Props = {}

type State = {}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    
    this.state = {}
  }

  render() {
    return(
      <div>
        <Greeting message="おはよう"/>
        <Greeting message="こんにちは"/>
        <Greeting message="こんばんは"/>
      </div>
    )
  }

}

export default App;
