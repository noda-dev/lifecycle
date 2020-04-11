import React from 'react';

type Props = {}

type State = {
  time: string[],
}

class Clock extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const time: number[] = this.getTime();
    const dispTimes: string[] = time.map(val => {
      if(val < 10) {
        return '0' + String(val);
      }
      else {
        return String(val);
      }
    })

    this.state = {
      time: dispTimes
    }

    setInterval(() => {
      const time: number[] = this.getTime();
      const dispTimes: string[] = time.map(val => {
        if(val < 10) {
          return '0' + String(val);
        }
        else {
          return String(val);
        }
      })
      this.setState({
        time: dispTimes
      })
    }, 1000);
  }

  getTime() {
    const d: Date = new Date();
    const hour: number = d.getHours();
    const min: number = d.getMinutes();
    const sec: number = d.getSeconds();

    const time: number[] = [hour, min, sec];
    return time;
  }

  render() {
    return <p>{this.state.time[0]}:{this.state.time[1]}:{this.state.time[2]}</p>
  }
}

export default Clock;