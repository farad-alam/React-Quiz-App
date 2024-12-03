import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Question from "./components/pages/Question";
import Result from "./components/pages/Result";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/question" element={<Question />} />
            <Route path="/result" element={<Result />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            {/* <Home />
              <Question />
              <Result />
              <SignUp />
              <Login /> */}
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
