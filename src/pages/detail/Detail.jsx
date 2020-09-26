import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './detail.scss';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }

  componentDidMount() {
    const obj1 = { name: 1 };
    const obj2 = Object.assign({}, obj1, { age: 10 });

    console.log(obj2, obj1);
    console.log(this.props);
    const { match } = this.props;
    this.setState({
      id: match.params.id,
    });
  }

  render() {
    const { id } = this.state;
    return (
      <div className="tc">
        <div>
          {'详情'}
          {id}
        </div>
        <div className="box">
          <div className="left"> </div>
          <div className="right"> </div>
        </div>
      </div>
    );
  }
}

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
