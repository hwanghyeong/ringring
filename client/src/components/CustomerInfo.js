import React from 'react';
import TableCell from '@material-ui/core/TableCell';

class CustomerInfo extends React.Component {
    render() {
        return (
            <>
                <TableCell>
                    <h2>{this.props.userName}</h2>
                </TableCell>
                <TableCell>
                    <p>{this.props.pw}</p>

                </TableCell>
            </>
        )
    }
}

export default CustomerInfo;