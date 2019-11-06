import React from 'react';

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.userName}</h2>
                <p>{this.props.pw}</p>
            </div>
        )
    }
}

export default CustomerInfo;