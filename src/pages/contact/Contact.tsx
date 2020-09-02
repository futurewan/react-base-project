import React, { useContext } from 'react';

const defaultValue = { color: '', value: '' };
const ThemeContext = React.createContext(defaultValue);

function MyButton() {
  // static contextType = ThemeContext;

  const { color, value } = useContext(ThemeContext);
  console.log(color);
  return <div style={{ color }}>{value}</div>;
}
function MyBox() {
  return (
    <div>
      <MyButton />
    </div>
  );
}

export default function Contact() {
  return (
    <ThemeContext.Provider value={{ color: 'darkgoldenrod', value: '关于我们' }}>
      <MyBox />
    </ThemeContext.Provider>
  );
}
