import React, { useContext, useState, useMemo } from 'react';

const defaultValue = { color: '', value: '' };
const ThemeContext = React.createContext(defaultValue);

function MyButton() {
  // static contextType = ThemeContext;
  const [data, setData] = useState(5);
  const { color, value } = useContext(ThemeContext);
  console.log(color);
  return (
    <div
      onClick={() => {
        setData(data + 1);
      }}
      style={{ color }}
    >
      {value}
      {data}
    </div>
  );
}
function MyBox() {
  return (
    <div>
      <MyButton />
    </div>
  );
}

export default function Contact() {
  const theme = useMemo(() => ({ color: 'darkgoldenrod', value: '关于我们' }), []);
  return (
    <ThemeContext.Provider value={theme}>
      <MyBox />
    </ThemeContext.Provider>
  );
}
