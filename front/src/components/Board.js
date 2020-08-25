import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Board extends Component{
    render() {
        return(
            <TableRow>
                <TableCell> {this.props.id} </TableCell>
                <TableCell> {this.props.title} </TableCell>
                <TableCell> {this.props.register}</TableCell>
                <TableCell> {this.props.regDate} </TableCell>
                <TableCell> {this.props.readCnt}</TableCell>
            </TableRow>
        );
    }
}

export default Board