import React from 'react';

class CustomerAddress extends React.Component {
    render() {
        return (
            <div>
                <h5>{this.props.address}</h5>
                <p>{this.props.detail}</p>
            </div>
        )
    }
}

export default CustomerAddress;