/* - - - App.jsx - - - */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themeButton } from './reducer';


const App = () => {
  const currentThemeColor = useSelector((state) => state.theme.color); // Get theme
  const dispatch          = useDispatch();                             // Set theme     


  // Update the body class
  React.useEffect(() => {
    document.body.className = currentThemeColor;
  }, [currentThemeColor]);

  
  return (
    <>
      <h1>Current Theme: {currentThemeColor}</h1>
      <button onClick={() => dispatch(themeButton())}>Change Theme</button>
    </>
  );
};

export default App;
