import React, { Component } from 'react';

class Board extends React.Component{
    render() {
        return(
          <div>
              <BoardProfile id={this.props.id}/>
              <BoardInfo title={this.props.title} contents={this.props.contents}
                         register={this.props.register}
                         regDate={this.props.regDate} readCnt={this.props.readCnt}/>
          </div>
        );
    }
}

class BoardProfile extends React.Component{
    render() {
        return (
            <div>
                <h2>{this.props.id}</h2>
            </div>
        );
    }
}

class BoardInfo extends React.Component{
    render() {
        return(
          <div>
              <h3>{this.props.title}</h3>
              <h3>{this.props.contents}</h3>
              <h3>{this.props.register}</h3>
              <h3>{this.props.regDate}</h3>
              <h3>{this.props.readCnt}</h3>
          </div>
        );
    }
}

export default Board