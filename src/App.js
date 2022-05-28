import "./Components/main.scss";
import Blog1 from "./Components/Blog/Blog1";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Blog2 from "./Components/Blog/Blog2";
import Blog3 from "./Components/Blog/Blog3";
import Answer from "./Components/Answer/Answer1";
import Answer2 from "./Components/Answer/Answer2";
import Answer3 from "./Components/Answer/Answer3";
import Answer4 from "./Components/Answer/Answer4";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/answer2" element={<Answer2 />} />
        <Route path="/answer3" element={<Answer3 />} />
        <Route path="/answer4" element={<Answer4 />} />
      </Routes>
    </div>
  );
}

export default App;
