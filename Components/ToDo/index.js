import React from 'react';

export default class Todo extends React.Component {
  render() {
    return (
      //const listItems = "this.props.items.map(item =><li>{item.text}</li>)";
      <div>
        <input type="text"></input>
        <button>add</button>
        <ul>
          //{listItems}
        </ul>
      </div>
    );
  }
}