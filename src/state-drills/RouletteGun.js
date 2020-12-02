import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    };

    state = {
        chamber: null,
        spinningTheChamber: false
    };


    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleButtonClick = () => {
        console.log('clicked!')
        this.setState({
          spinningTheChamber: true,
        })
        console.log(this.state.spinningTheChamber)
        this.timeout = setTimeout(() => {
          this.setState({
            chamber: Math.ceil(Math.random() * 8),
            spinningTheChamber: false,
          })
        }, 2000)
      }
    


    renderDisplay() {
        const {chamber, spinningTheChamber} = this.state;
        const {bulletInChamber} = this.props;
        if(spinningTheChamber === true) {
            return 'spinning the chamber and pulling the trigger!...';
        } else if(chamber === bulletInChamber) {
            return 'BANG!!!';
        } else {
            return 'You\`re safe!';
        } 
    }

    render() {
        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleButtonClick}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;