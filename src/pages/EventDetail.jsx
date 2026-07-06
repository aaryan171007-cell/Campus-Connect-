import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { events } from "../data/events";
import { getCategoryClass, getCategoryEmoji, getEventBannerClass, formatDate } from "../utils/helpers";

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <main className="page-container">
        <div className="detail-container">
          <div className="error-container">
            <div className="error-icon">🎪</div>
            <h2 className="error-title">Event Not Found</h2>
            <p className="error-message">
              The event you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/events" className="retry-btn">
              ← Back to Events
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const bannerClass = getEventBannerClass(event.category);

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
            <Link to="/events" className="breadcrumb-link">Events</Link>
            <span>›</span>
            <span>{event.title}</span>
          </nav>

          {/**** Back button ****/}
          <button
            className="detail-back-btn"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            ← Back
          </button>

          <div className="detail-card">

          {/************************** Notice banner *************************/}
            <div className={`detail-banner ${bannerClass}`}>
              <div className="detail-banner-content">
                <span
                  className={`category-badge ${getCategoryClass(event.category)}`}
                  style={{ marginBottom: 8, display: "inline-flex" }}
                >
                  {getCategoryEmoji(event.category)} {event.category}
                </span>
              </div>
            </div>

            {/*** Body ***/}
            <div className="detail-body">
              <h1 className="detail-title">{event.title}</h1>

              <div className="detail-meta-row">
                <div className="detail-meta-item">
                  <span>📅</span>
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="detail-meta-item">
                  <span>🕐</span>
                  <span>{event.time}</span>
                </div>
                <div className="detail-meta-item">
                  <span>📍</span>
                  <span>{event.venue}</span>
                </div>
                <div className="detail-meta-item">
                  <span>🏛️</span>
                  <span>{event.organizer}</span>
                </div>
              </div>

              <p
                style={{
                  fontStyle: "italic",
                  color: "var(--accent-primary)",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  marginBottom: 8,
                }}
              >
                {event.summary}
              </p>

              <div style={{ height: 20 }} />

              <h2 className="detail-content-title">📄 Event Details</h2>
              <div className="detail-content">{event.content}</div>

            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
