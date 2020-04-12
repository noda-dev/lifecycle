import React from 'react';

type Props = {};

type State = {
  message: string
};

class Button extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      message: 'クリックしてください'
    };

    //イベントハンドラをthisで結びつける
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      message: 'クリックされました'
    });
  }

  render() {
    return(
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>ボタン</button>
      </div>
    )
  }
}

export default Button;

