import React from 'react';
import './App.css';
import PhotoText from './components/PhotoText';

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
        <PhotoText label="カニンヘンダックス1" url="https://www.min-inuzukan.com/images/detailMain_kaninchen-dachshund.png?20200203_l"/>
        <PhotoText label="カニンヘンダックス2" url="https://www.pretty-wan.com/wp-content/uploads/IMG_6037.jpg"/>
        <PhotoText label="カニンヘンダックス3" url="https://d1k5eswq61k0il.cloudfront.net/uploads/item/image1/2730/s560x420_1046_p1412250341.jpg"/>
      </div>
    )
  }

}

export default App;
