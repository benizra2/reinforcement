import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, 'todos'); //removes todos props in this.props LODASH method

    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />);
  }

  render() {
    console.log(this.props);
    return (
      <table>
        <TodosListHeader/>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}