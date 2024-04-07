import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import "../style/App.css";
import Error from "./Error";
import Home from "./Home";
import Layout from "./Layout";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<PublicRoute />}>
              <Route path="/signup" element={<Signup />} />
            </Route>
            <Route path="/login" element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/quize" element={<PrivateRoute />}>
              <Route path="/quize" element={<Quiz />} />
            </Route>
            <Route path="/result" element={<PrivateRoute />}>
              <Route path="/result" element={<Result />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
