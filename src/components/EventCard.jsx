import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getCategoryClass, getCategoryEmoji, getEventBannerClass, formatDate } from "../utils/helpers";

export default function EventCard({ event, index = 0 }) {
  const bannerClass = getEventBannerClass(event.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <Link to={`/events/${event.id}`}>
        <div className="event-card">
          <div className={`event-card-banner ${bannerClass}`}></div>

          <div className="event-card-body">
            <div className="card-header">
              <span className={`category-badge ${getCategoryClass(event.category)}`}>
                {getCategoryEmoji(event.category)} {event.category}
              </span>
            </div>

            <h3 className="card-title">{event.title}</h3>

            <div className="event-card-meta">
              <div className="event-meta-item">
                <span>📅</span>
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="event-meta-item">
                <span>📍</span>
                <span>{event.venue}</span>
              </div>
              <div className="event-meta-item">
                <span>🕐</span>
                <span>{event.time}</span>
              </div>
            </div>

            <div className="card-footer">
              <span className="card-author">
                <span>🏛️</span> {event.organizer}
              </span>
              <span className="read-more-arrow">
                Details →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
