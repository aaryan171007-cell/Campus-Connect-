import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getCategoryClass, getCategoryEmoji } from "../utils/helpers";

export default function NoticeCard({ notice, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <Link to={`/notices/${notice.id}`}>
        <div className="notice-card">
          <div className="card-header">
            <span className={`category-badge ${getCategoryClass(notice.category)}`}>
              {getCategoryEmoji(notice.category)} {notice.category}
            </span>
          </div>

          <h3 className="card-title">{notice.title}</h3>

          <p className="card-summary">{notice.summary}</p>

          <div className="card-footer">
            <span className="card-author">
              <span>👤</span> {notice.author}
            </span>
            <span className="read-more-arrow">
              Read more →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
