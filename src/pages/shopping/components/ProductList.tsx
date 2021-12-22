import React from 'react';
import PropTypes from 'prop-types';
interface PropsInterface {
  title: String;
  children: React.ReactNode;
}

const ProductsList = ({ title, children }: PropsInterface) => (
  <div>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
);

export default ProductsList;
