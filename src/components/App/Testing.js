import React from 'react';
import ReactDOM from 'react-dom';

class Testing extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Courtland'
    };
    this.handleChangeMyname = this.handleChangeMyname.bind(this);
  }

  handleChangeMyname() {
    this.setState({name: 'Griffin'})
    }

  render() {
    return (
      <div>
        <h1>This is {this.state.name} first React App  </h1>
        </div>
        )
  }
}

ReactDOM.render(<testing />, document.getElementById('app'))


export default Testing;
