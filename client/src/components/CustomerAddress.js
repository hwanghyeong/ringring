import React from 'react';
import TableCell from '@material-ui/core/TableCell';
class CustomerAddress extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TableCell>
                    {this.props.address}
                </TableCell>
                <TableCell>
                    {this.props.detail}
                </TableCell>
            </React.Fragment>

        )
    }
}

export default CustomerAddress;