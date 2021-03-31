import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import React from 'react';
import { set_data } from './Store_Redux/Action/index'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }

  }

  set_data = () => {
    console.log(this.state.input)
    this.props.set_data(this.state.input)
  }
  render() {
    console.log("Sate Data :", this.props.data)
    return (
      <div className="App">

        <input type="text" placeholder="Enter Data" value={this.state.input} onChange={(e) => { this.setState({ input: e.target.value }) }} />
        <button onClick={() => { this.set_data() }}>
          click me
      </button>

      </div>
    );
  }


}

const mapStateToPr = (state) => ({
  data: state.data
})

const mapDi = (dispatch) => ({
  set_data: (data) => dispatch(set_data(data))
})

export default connect(mapStateToPr, mapDi)(App);
