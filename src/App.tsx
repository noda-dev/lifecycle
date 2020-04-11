import React from 'react';
import './App.css';
import PhotoText from './components/PhotoText';
import ItemList from './components/ItemList';

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
        <div>
          <PhotoText label="カニンヘンダックス1" url="https://www.min-inuzukan.com/images/detailMain_kaninchen-dachshund.png?20200203_l"/>
          <ItemList items="朝,昼,夜"/>
        </div>
        <div>
          <PhotoText label="カニンヘンダックス2" url="https://www.pretty-wan.com/wp-content/uploads/IMG_6037.jpg"/>
          <ItemList items="昨日,今日,明日"/>
        </div>
        <div>
          <PhotoText label="カニンヘンダックス3" url="https://d1k5eswq61k0il.cloudfront.net/uploads/item/image1/2730/s560x420_1046_p1412250341.jpg"/>
          <ItemList items="過去,現在,未来"/>
        </div>
      </div>
    )
  }

}

export default App;
