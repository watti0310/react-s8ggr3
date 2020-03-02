import React from 'react';
import * as Todo from './Components/Todo/';

let items = [
  {
    text: "aaaaaa",
  },
  {
    text: "bbbbbb",
  },
];
export default class MainController extends React.Component {
  render() {
    return (
      <Todo items={items} />
    );
  }
}