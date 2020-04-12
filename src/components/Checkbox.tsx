import React from 'react';
import CSS from 'csstype';

type Props = {
  label: string;
};

type State = {
  checked: boolean;
};

class Checkbox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      checked: false
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      {
        checked: !this.state.checked
      }
    )
  }

  render() {
    const checkedStyle: CSS.Properties = {
      fontWeight: 'normal'
    }

    const unCheckedStyle: CSS.Properties = {
      fontWeight: 'bold'
    }

    const checkboxStyle: CSS.Properties  = {
      cursor: 'pointer'
    }

    return(
      <div onClick={() => this.handleClick()} style={checkboxStyle}>
        {!this.state.checked ? '□' : '■'} <span style={!this.state.checked ? checkedStyle : unCheckedStyle}>{this.props.label}</span>
      </div>
    );
  }
}

export default Checkbox;

