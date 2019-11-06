import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'userName' : 'guddjs',
    'pw' : 'dksk11',
    'address' : 'jukjeon',
    'detail' : '11292'
  }, 
  {
    'userName' : 'dami',
    'pw' : 'pwpwpwp',
    'address' : 'gumidong',
    'detail' : '12-22'
  },
  {
    'userName' : 'hyeon',
    'pw' : 'jiral',
    'address' : 'seocho',
    'detail' : '5005'
  }
]


class App extends React.Component {
  render() {
    return (
      <div>
        {customers.map(c => <Customer key={c.userName} userName={c.userName} pw={c.pw} address={c.address} detail={c.detail}></Customer>)}
      </div>
    );
  }
}

export default App;
