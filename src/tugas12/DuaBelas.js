import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 120
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate(){
      if (this.state.time===0) {
          this.componentWillUnmount()
      }
  }

  componentWillUnmount(){
        clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1 
    });
  }


  render(){
    return(
      <>
      {this.state.time>0 &&
        <div>
        <h1 id="jam">sekarang jam : {new Date().toLocaleTimeString()}</h1>
        <h1 id="hitung">hitung mundur: {this.state.time}</h1>
        </div>
        }
      </>
    )
  }
}

export default Timer