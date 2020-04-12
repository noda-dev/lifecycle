import React from 'react';
import './App.css';

type Props = {}

type State = {}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    
    this.state = {}
  }

  render() {
    const handleClick = ():void => {
      alert('クリックされました');
    }

    return (
      <div>
        <button onClick={handleClick}>クリックしてください</button>
      </div>
    )
  }

}

export default App;
