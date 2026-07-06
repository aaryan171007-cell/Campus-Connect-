import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NoticesFeed from "./pages/NoticesFeed";
import EventsFeed from "./pages/EventsFeed";
import NoticeDetail from "./pages/NoticeDetail";
import EventDetail from "./pages/EventDetail";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notices" element={<NoticesFeed />} />
        <Route path="/notices/:id" element={<NoticeDetail />} />
        <Route path="/events" element={<EventsFeed />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route
          path="*"
          element={
            <main className="page-container">
              <div className="error-container">
                <div className="error-icon">🗺️</div>
                <h1 className="error-title">404 – Page Not Found</h1>
                <p className="error-message">
                  The page you are looking for doesn't exist.
                </p>
                <a href="/" className="retry-btn">
                  Go Home
                </a>
              </div>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
