import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logger } from '@util/log';
import { isArray } from 'lodash';
import ReactImg from '../../assets/images/react-icon.png';
import '../../assets/styles/home.scss';

console.log(isArray([1, 2, 3]));
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: 'Hello React',
    };
  }

  addCount = () => {
    this.setState((preState) => ({
      count: preState.count + 1,
    }));
  };

  render() {
    const { name } = this.state;
    logger('home');
    return (
      <div>
        <div>
          <img src={ReactImg} alt="" />
        </div>
        <h1 className="tc">{name}</h1>
        <div className="nav-list">
          <NavLink activeClassName="selected" to="/home">
            首页
          </NavLink>
          <Link to="/shopping">购物车</Link>
          <Link
            to={{
              pathname: '/detail/2',
              search: '?sort=name',
              hash: '#name',
              state: { fromHome: true },
            }}
          >
            详情页2
          </Link>
          <Link to="/contact">联系我们</Link>
        </div>
      </div>
    );
  }
}
