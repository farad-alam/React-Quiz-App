import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Question from "./components/pages/Question";
import Result from "./components/pages/Result";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import { AuthProvider } from "./contexts/AuthContext";
import useVideos from "./hooks/useVideos";
import PrivateRoute from "./components/privateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  const {video} = useVideos()
  return (
    <>
    
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/question/:id" element={
              <PrivateRoute>
                <Question />
              </PrivateRoute>
            } />
            <Route path="/result/:id" element={
              <PrivateRoute>
                <Result/>
              </PrivateRoute>
            } />
            <Route path="/signup" element={
              <PublicRoute >
              <SignUp/>
            </PublicRoute>
            } />
            <Route path="/login" element={
              <PublicRoute >
                <Login/>
              </PublicRoute>
            } />
            <Route path="*" element={<NotFound />} />
            {/* <Home />
              <Question />
              <Result />
              <SignUp />
              <Login /> */}
          </Routes>
        </Layout>

        {/* <Home /> */}
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
