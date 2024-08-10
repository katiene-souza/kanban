import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Board, SignIn, SignUp } from "../pages";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/board" element={<Board />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
