import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import 'react-region-picker/lib/style.css';
import style from '../../assets/styles/home.scss';

export default function Home() {
  return (
    <div>
      <div className={style['nav-list']}>
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
          详情页
        </Link>
        <Link to="/contact">联系我们</Link>
      </div>
    </div>
  );
}
