import React, { Component } from 'react';

import {
    Header,
    Logo,
    Title,
    ButtonList,
    Button,
    // List
} from './style'


class TodoList extends Component {
  render() {
    return (
      <div>
        <Header>
            <Logo></Logo>
            <Title>丁丁的计划表</Title>
            <ButtonList>
                <Button className="current">全部</Button>
                <Button>已完成</Button>
                <Button>未完成</Button>
            </ButtonList>
        </Header>
          <List>

          </List>
      </div>
    );
  }
}

export default TodoList;
