import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import "app/App.css";
import Header from "components/Header";
import CommentModal from "components/CommentModal";
import {Comments} from 'components/Comments';
import { theme1 } from "themes";


function App() {
    return (
      <ThemeProvider theme={theme1}>
        <Header />
        <CommentModal />
        <Comments/>
      </ThemeProvider>
    );
}

export default App;
