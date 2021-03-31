import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import React from 'react';
import { set_data } from './Store_Redux/Action/index'
import {delete_data} from './Store_Redux/Action/index'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      count: 3
     
    }

  }

  delete = (key) =>{
    console.log("Key :",key)
    this.props.delet_data(key)
  }

  set_data = () => {
    // console.log("INPUT DATA :",this.state.input)
    const user = {
      name : 'zubair786',
      email : 'zubair'.concat(" ",this.state.count++),
    

    }
    this.props.set_data(user)
  }
  render() {
    console.log("Sate Data :", this.props)
    return (
      <div className="App">
        <h1>{this.props.count}</h1>
    


         <input type="text" placeholder="Enter Data" value={this.state.input} onChange={(e) => { this.setState({ input: e.target.value }) }} />
        <button onClick={() => { this.set_data() }}>
          click me
      </button>
      <br></br>

      <ul style={{listStyle:'none',display:'inline-block'}}>
        {this.props.data.map((v,i)=>{
          return(
            <li key={i}>
              <h3>{i}</h3>
              <h1>Name : {v.name} </h1>
               <h2>Email : {v.email}</h2>
               <button onClick={()=>this.delete(i)}>Click Me</button>
            </li>

          )
        })}
      
      </ul>

      </div>
    );
  }


}

const mapStateToProps = (state) => ({
  data: state.data,
 
})

const mapDispatchToProps = (dispatch) => ({
  set_data: (data) => dispatch(set_data(data)),

  delet_data : (key) => dispatch(delete_data(key))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
