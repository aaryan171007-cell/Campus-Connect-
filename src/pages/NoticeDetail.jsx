import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { notices } from "../data/notices";
import { getCategoryClass, getCategoryEmoji, formatDate } from "../utils/helpers";

export default function NoticeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const notice = notices.find((n) => n.id === id);

  if (!notice) {
    return (
      <main className="page-container">
        <div className="detail-container">
          <div className="error-container">
            <h2 className="error-title">Notice Not Found</h2>
            <p className="error-message">
              The notice you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/notices" className="retry-btn">
              ← Back to Notices
            </Link>
          </div>
        </div>
      </main>
    );
  }

  //======================================== HTML SETUP ===============================================
  return (
    <main className="page-container page-fade">
      <div className="detail-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/**** Links to trace back ****/}
          <nav className="detail-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span>›</span>
            <Link to="/notices" className="breadcrumb-link">Notices</Link>
            <span>›</span>
            <span>{notice.title}</span>
          </nav>

          {/**** Back button ****/}
          <button
            className="detail-back-btn"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            ← Back
          </button>

          {/************************** Notice banner *************************/}
          <div className="detail-card">
            <div
              className="detail-banner"
              style={{
                background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 80%, #a18cd1 100%)",
              }}
            >
              <div className="detail-banner-content">
                <span
                  className={`category-badge ${getCategoryClass(notice.category)}`}
                  style={{ marginBottom: 8, display: "inline-flex" }}
                >
                  {getCategoryEmoji(notice.category)} {notice.category}
                </span>
              </div>
            </div>

            {/*** Body ***/}
            <div className="detail-body">
              <h1 className="detail-title">{notice.title}</h1>

              <div className="detail-meta-row">
                <div className="detail-meta-item">
                  <span>📅</span>
                  <span>Posted: {formatDate(notice.postedDate)}</span>
                </div>
                <div className="detail-meta-item">
                  <span>👤</span>
                  <span>{notice.author}</span>
                </div>
                <div className="detail-meta-item">
                  <span>🏷️</span>
                  <span>{notice.category}</span>
                </div>
              </div>

              <div style={{ height: 20 }} />

              <h2 className="detail-content-title">📄 Full Notice</h2>
              <div className="detail-content">{notice.content}</div>

            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
  //=====================================================================================================
}
