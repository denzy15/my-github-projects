import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { darkTheme, lightTheme } from "./styles/theme";
import { useState } from "react";

import ProfileInfo from "./components/UserInfo";
import Repos from "./components/Repos";
import Header from "./components/Header";

function App() {
  const [checked, setChecked] = useState(true);

  return (
    <ThemeProvider theme={checked ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Header checked={checked} setChecked={setChecked} />
        <div className="container">
          <ProfileInfo />
          <Repos />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
