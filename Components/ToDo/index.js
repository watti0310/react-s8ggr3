import React from 'react';

export default class ToDo extends React.Component {
  render() {
    return (
      <div>
        <input type="text"></input>
        <button>add</button>
        <ul>
          {this.props.items.map((item,index) =><li key={index}>{item.text}</li>)}
        </ul>
      </div>
    );
  }
}