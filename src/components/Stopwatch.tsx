import React from 'react';

type Props = {}

type State = {
  isLive: boolean,
  timerId: number,
  timerLabel: string,
  currentTime: number,
  startTime: number
}

class Stopwatch extends React.Component<Props, State> {

  constructor(props: Props) {
    console.log('move');
    super(props);
    this.state = {
      isLive: false,
      timerId: 0,
      timerLabel: 'スタート',
      currentTime: 0,
      startTime: 0
    };
  }

  //コンポーネント作成後に1度だけ実行
  componentDidMount() {
    const timerId: number = window.setInterval(() => {
      this.getTime();
    }, 1000);

    this.setState({
      timerId: timerId
    })
  }

  //コンポーネント破棄後に一度だけ実行
  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  getTime() {
    if (this.state.isLive) {
      const time: number = new Date().getTime();
      this.setState({
        currentTime: time
      })
    }
  }

  //こいつがちょっと遅い
  startTimer() {
    const time: number = new Date().getTime();

    if (this.state.isLive) {
      this.setState({
        isLive: !this.state.isLive,
        timerLabel: 'スタート',
        currentTime: time,
        startTime: time
      });
      return;
    }
    this.setState({
      isLive: !this.state.isLive,
      timerLabel: 'ストップ',
      currentTime: time,
      startTime: time
    })
  }

  getDisp() {
    const state: State = this.state;
    const delta: number = state.currentTime - state.startTime;
    const t: number = Math.floor(delta / 1000);
    const ss: number = t % 60;
    const m: number = Math.floor(t / 60);
    const mm: number = m % 60;
    const hh: number = Math.floor(mm / 60);
    const z = (num: number): string => {
      const s = '00' + String(num);
      return s.substr(s.length - 2, 2);
    }
    return (
      <span className="disp">
        {z(hh)}:{z(mm)}:{z(ss)}
      </span>
    )
  }

  render() {
    const disp = this.getDisp();
    return(
      <div>
        <p>{disp}</p>
        <button onClick={() => { this.startTimer() }}>{this.state.timerLabel}</button>
      </div>
    )
  }

}

export default Stopwatch;
