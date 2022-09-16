import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { darkTheme, lightTheme } from "./styles/theme";
import Switch from "react-switch";
import { useState } from "react";
import ProfileInfo from "./components/UserInfo";
import Repos from "./components/Repos";

function App() {
  const [checked, setChecked] = useState(true);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <ThemeProvider theme={checked ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <header className="header">
          <h1 className="main-title">My GitHub projects</h1>
          <div className="theme-changer">
            <span>Change Theme</span>
            <Switch
              onChange={handleChange}
              checked={checked}
              offColor="#fafafa"
              onColor="#333341"
              onHandleColor="#1688f0"
              offHandleColor="#1688f0"
              uncheckedIcon={false}
              checkedIcon={false}
            />
          </div>
        </header>
        <div className="container">
          <ProfileInfo />
          <Repos />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
