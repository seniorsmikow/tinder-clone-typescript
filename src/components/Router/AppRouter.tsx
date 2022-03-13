import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Main } from "../../pages/Main/Main";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/main">Main</Link>
          </li>
        </ul>

        <hr /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
};
