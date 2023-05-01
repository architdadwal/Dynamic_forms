import Page1 from "./Page1";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page2 from "./Page2";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
