import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logger } from '@util/log';

import 'react-region-picker/lib/style.css';
import '../../assets/styles/home.scss';

interface HomeState {
  count: number;
  name: string;
}

export default class Home extends Component<{}, HomeState> {
  constructor(props: any) {
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
