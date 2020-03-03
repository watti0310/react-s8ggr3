import React from 'react';
import { Provider } from 'react-redux';
import ToDo from './Components/ToDo/';
import configureStore from "./state/store";

const reduxStore = configureStore();
console.log(reduxStore.getState());
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
      <Provider store={reduxStore}>
        <ToDo items={items} />
      </Provider>
    );
  }
}