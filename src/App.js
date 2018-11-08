import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import stocks from './stocks.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  // componentWillMount() {
  //   let lines = stocks.split('\n');
  //   let data = [];
  //   for (let i = 1; i < lines.length; i++) {
  //     let line = lines[i].split(',');
  //     data.push(line);
  //   }
  //   //this.setState({data});
  //   console.log(this.state.data)
  // }
  render() {
    return (
      <div className="App">
        <AppBar position = "static" color = "primary">
          <Toolbar>
            <Typography variant = "h6" color = "inherit"> Stock Analyzer Beta* </Typography>
          </Toolbar>
        </AppBar>
        <Typography variant = "title" style = {{margin: 50}}> Today's Alerts </Typography>
        {this.state.data.map((stock) => (
          <div style = {{display: 'flex', flexDirection: 'column'}}>
            <Typography variant = "title" style = {{marginBottom: 20}}> Symbol: {stock.symbol} </Typography>
            <div style = {{display: 'flex'}}>
              <div>
                <Typography> <b> Alert Time: </b> {stock.time} </Typography>
                <Typography> <b> Price: </b> {stock.price} </Typography>
                <Typography> <b> Sector: </b> {stock.sector} </Typography>
                <Typography> <b> Market Cap (Millions): </b> {stock.cap} </Typography>
              </div>
              <div>
                <Typography> Prediction: Likely gain of 10%, within 25 minutes (83% confidence) </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
