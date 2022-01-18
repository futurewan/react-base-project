import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail: React.FC = () => {
  const [id, setId] = useState<undefined | string>();
  const [num, setNum] = useState(1);
  const match = useParams();
  useEffect(() => {
    setId(match.id);
  }, []);

  return (
    <div
      onClick={() => {
        setNum(num + 1);
      }}
      className="tc"
    >
      <div>
        <span>详情</span>
        {id}
      </div>
      <div className="box">
        <div className="left"> {num}</div>
        <div className="right"> </div>
      </div>
    </div>
  );
};

export default Detail;
