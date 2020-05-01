import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext; //bunu kullanarak state i cekmis oluyoruz
  render() {
    //asagida this.context oldugu icin bunu sadece class component ta kullanabiliyoruz
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className='book-list'
        style={{ background: theme.bg, color: theme.syntax }}>
        <ul>
          <li style={{ background: theme.ui }}>The way of kings</li>
          <li style={{ background: theme.ui }}>The name of the wind</li>
          <li style={{ background: theme.ui }}>The final empire</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
