import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home";
import NextPage from "./pages/NextPage";
import BouquetDetailPage from "./pages/BouquetDetailPage";
import FinalPage from "./pages/FinalPage";
import BouquetMenu from "./components/BouquetMenu";
import './components/bouquetMenu.css';

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/next"
        element={
          <ProtectedRoute>
            <NextPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/love-letter"
        element={
          <ProtectedRoute>
            <BouquetDetailPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/our-memories"
        element={
          <ProtectedRoute>
            <BouquetDetailPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/final-page"
        element={
          <ProtectedRoute>
            <FinalPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;