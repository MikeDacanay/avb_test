import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import "app/App.css";
import Header from "components/Header";
import CommentModal from "components/CommentModal";
import { Routes, Route } from "react-router-dom";
import { Comments } from 'components/Comments';
import { LeaderBoard } from "components/LeaderBoard";
import { theme1 } from "themes";

console.log(Route);

function App() {
    return (
      <ThemeProvider theme={theme1}>
        <Header />
        <CommentModal />
        <Routes>
          <Route path="comments" element={<Comments />} />
          <Route exact path="leaderboard" element={<LeaderBoard />} />
          <Route path="*" element={<Comments />} />
        </Routes>
      </ThemeProvider>
    );
}

export default App;
