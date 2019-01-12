import React, { Component } from 'react';

import Item from '../../components/Article/item/Item';

import Style from './index.module.css';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentWillMount() {
    const arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push(i);
    }
    this.setState({
      list: arr,
    });
  }

  render() {
    return (
      <ul className={Style.ul}>
        {
          this.state.list.map((item, index) => {
            return (
              <li key={`article_list_${index}`}>
                <Item />
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default Article;
