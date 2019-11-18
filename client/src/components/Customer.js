import React from 'react';
import CustomerInfo from './CustomerInfo';
import CustomerAddress from './CustomerAddress';
import TableRow from '@material-ui/core/TableRow';

class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <CustomerInfo
                    userName = {this.props.userName}
                    pw = {this.props.pw}
                />
                <CustomerAddress address = {this.props.address} detail = {this.props.detail} />
            </TableRow>
        )
    }
}

export default Customer;