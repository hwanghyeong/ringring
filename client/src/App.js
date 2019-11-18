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


class App extends React.Component {

  state = {
    customers: ''
  }

  componentDidMount() {
    this.callApi()
    .then(res => this.setState({customers:res}))
    .catch(e => console.log(e));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    return response.json();
  }

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
              {this.state.customers ? this.state.customers.map(c => {
                return <Customer key={c.userName} userName={c.userName} pw={c.pw} address={c.address} detail={c.detail}></Customer>
              }): ''}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
