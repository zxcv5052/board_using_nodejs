import React,{ Component } from 'react';
import Board from "./components/Board";
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles'

const style=theme => ({
    root:{
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto'
    },
    table: {
        minWidth: 1080
    }
});
const boards =
[
    {
    'id' :  1,
    'title' : 'board1',
    'contents' : 'it is board',
    'register' : 'kyeong',
    'regDate' : '2020-08-25',
    'readCnt' : '1'
    },
    {
    'id' :  2,
    'title' : 'board2',
    'contents' : 'it is board2',
    'register' : 'kyeong',
    'regDate' : '2020-08-25',
    'readCnt' : '1'
    }
];
class App extends Component {
    render() {
        const {classes} = this.props;
        return(
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>작성자</TableCell>
                            <TableCell>제목</TableCell>
                            <TableCell>작성일</TableCell>
                            <TableCell>조회수</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { boards.map( c => { return( <Board key={c.id} id={c.id} register={c.register} title={c.title} regDate={c.regDate} readCnt={c.readCnt}/>)})}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default withStyles(style)(App);
