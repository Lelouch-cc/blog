import React, { Component } from 'react';

import Title from '../../components/Title/Title';

import Style from './index.module.css';

class Home extends Component {
  render() {
    return (
      <div className={Style.con}>
        <Title />
      </div>
    );
  }
}

export default Home;