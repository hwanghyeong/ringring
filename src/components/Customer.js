import React from 'react';
import CustomerInfo from './CustomerInfo';
import CustomerAddress from './CustomerAddress';

class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerInfo
                    userName = {this.props.userName}
                    pw = {this.props.pw}
                />
                <CustomerAddress address = {this.props.address} detail = {this.props.detail} />
            </div>
        )
    }
}

export default Customer;