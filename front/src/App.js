import React,{ Component } from 'react';
import Board from "./components/Board";
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
        return(
            <div>
                {
                    boards.map( c => {
                        return(
                            <Board
                                key={c.id}
                                id={c.id}
                                title={c.title}
                                contents={c.contents}
                                register={c.register}
                                regDate={c.regDate}
                                readCnt={c.readCnt}
                                />
                        )
                    })
                }
            </div>
        );
    }
}

export default App;
