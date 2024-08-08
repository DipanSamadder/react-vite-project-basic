import React from 'react'
import Button from './Button'
class Clock extends React.Component {

    state = {date:new Date(), locale: "bn-BD"};
    

    componentDidMount(){
        this.clockTimer = setInterval(() =>{ this.tick(); }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.clockTimer);
    }
    handleClick = (locale) => {
      this.setState({ locale });
      
    }
    tick() {
      this.setState({ date: new Date() });
    }
   

    render() {
      console.log('Clock components');
      const {children} = this.props;
      const {date, locale} = this.state;

      return (
        <div>
          <h2>I have Elements {date.toLocaleTimeString(locale)} - {children}</h2>
          {locale ==='en-US'? (<Button change={this.handleClick} locale="bn-BD" show={false} enable={false}/>) : <Button change={this.handleClick} locale="en-US" show enable/>}
        </div>
      );
    }
  }

  export default Clock;