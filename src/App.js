import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles'; import Paper from '@material-ui/core/Paper';
import { black } from 'ansi-colors';



const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }
});


const customers = [
  {
    'userName': 'guddjs',
    'pw': 'dksk11',
    'address': 'jukjeon',
    'detail': '11292'
  },
  {
    'userName': 'dami',
    'pw': 'pwpwpwp',
    'address': 'gumidong',
    'detail': '12-22'
  },
  {
    'userName': 'hyeon',
    'pw': 'jiral',
    'address': 'seocho',
    'detail': '5005'
  }
]


class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>

          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>이름</TableCell>
                <TableCell>비밀번호</TableCell>
                <TableCell>주소</TableCell>
                <TableCell>상세주소</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map(c => <Customer key={c.userName} userName={c.userName} pw={c.pw} address={c.address} detail={c.detail}></Customer>)}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
