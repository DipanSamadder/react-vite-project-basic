import React from 'react'

class Clock extends React.Component {

    state = {date:new Date()};
    

    componentDidMount(){
        this.clockTimer = setInterval(() =>{ this.tick(); }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.clockTimer);
    }

    tick() {
      this.setState({date:new Date()});
    }

    render() {
      const {locale, children} = this.props;
      const {date} = this.state;
      return (
        <div>
          <h2>I have Elements {date.toLocaleTimeString(locale)} - {children}</h2>
        </div>
      );
    }
  }

  export default Clock;