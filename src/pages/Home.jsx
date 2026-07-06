import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { notices } from "../data/notices";
import { events } from "../data/events";
import NoticeCard from "../components/NoticeCard";
import { formatDate, getEventBannerClass } from "../utils/helpers";

// Filtering out 3 notices for the notice section
const spotlightNotices = notices.slice(0, 3);

// Sorting upcoming events in ascending order and taking the top 3
const sortedUpcomingEvents = [...events]
  .sort((a, b) => new Date(a.date) - new Date(b.date))
  .slice(0, 3);

export default function Home() {
  //==================================== HTML SETUP =====================================================
  return (
    <main className="page-container page-fade">
      {/************************ Hero Section ****************************/}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section 
          className="hero"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/mainbuilding.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="hero-content">
            <div className="hero-badge">
              <img 
                src="/kgp-logo.png" 
                alt="IIT Kharagpur Logo" 
                style={{ height: "40px", width: "auto" }} 
              /> IIT Kharagpur
            </div>
            <h1>
              Stay Connected,
              <br />
              Stay Informed.
            </h1>
            <p>
              Your one-stop dashboard for the latest campus notices, events, news and
              announcements. Never miss what's happening around you.
            </p>
            <div className="hero-cta">
              <Link to="/notices" className="btn btn-outline-white">
                📋 Browse Notices
              </Link>
              <Link to="/events" className="btn btn-outline-white">
                🎉 Explore Events
              </Link>
            </div>
          </div>
        </section>
      </motion.div>

      {/************************** Quick Stats Grid ******************************/}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="quick-stats">
          {[
            { icon: "📋", label: "Notices", value: notices.length, color: "var(--accent-blue-light)", link: "/notices" },
            { icon: "🎉", label: "Events", value: events.length, color: "var(--accent-secondary-light)", link: "/events" },
            { icon: "📅", label: "This Week", value: 3, color: "var(--accent-green-light)", link: "/events" },
          ].map((stat) => (
            <Link key={stat.label} to={stat.link}>
              <div className="stat-card">
                <div className="stat-icon" style={{ background: stat.color }}>
                  {stat.icon}
                </div>
                <div className="stat-info">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/********************** ROW 1: Campus Headline News **********************/}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{ margin: "3rem 0" }}
      >
        <div className="section-header" style={{ marginBottom: "1.5rem" }}>
          <div className="section-title-group">
            <span className="section-label">Latest Update</span>
            <h2 className="section-title">📰 Campus News</h2>
          </div>
        </div>

        <div 
          className="horizontal-news-row-card" 
          style={{ 
            background: "var(--card-bg)", 
            borderRadius: "16px", 
            overflow: "hidden",
            border: "1px solid var(--border-color)",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%"
          }}
        >
          {/***** Adding responsiveness to the section *****/}
          <style>{`
            .news-row-image-container { flex: 1 1 380px; max-height: 320px; overflow: hidden; }
            .news-row-content-container { flex: 2 1 480px; padding: 2.5rem; display: flex; flex-direction: column; justify-content: center; gap: 0.85rem; }
            
            @media (max-width: 850px) {
              .horizontal-news-row-card { flex-direction: column !important; }
              .news-row-image-container { max-height: 220px; width: 100%; }
              .news-row-content-container { padding: 1.5rem; }
            }
          `}</style>

          {/***** Left Block Area: Image *****/}
          <div className="news-row-image-container">
            <img 
              src="/convo.jpg" 
              alt="IIT KGP 72nd Convocation" 
              style={{ width: "100%", height: "100%"}}
            />
          </div>

          {/***** Right Block Area: News description *****/}
          <div className="news-row-content-container">
            <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--accent-primary, #3B82F6)", fontWeight: "bold" }}>
              Headline News
            </span>
            <h3 style={{ fontSize: "1.45rem", fontWeight: "bold", margin: 0, color: "var(--text-primary)" }}>
              IIT KGP 72nd Convocation
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", margin: 0, lineHeight: "1.6" }}>
              Marking 75 years of academic excellence, IIT Kharagpur successfully conferred degrees upon its latest cohort of pioneering tech leaders in a grand ceremony graced by Union Minister Dr. Sukanta Majumdar. This landmark session put a national spotlight on the institute’s trailblazing curriculum evolution celebrating the debut of its new Double Major framework alongside a soaring 12% rise in female STEM trailblazers poised to reshape the global technology ecosystem.
            </p>
          </div>
        </div>
      </motion.div>

      {/******************** ROW 2: Important Notices Spotlight *******************************/}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.18 }}
        style={{ margin: "3rem 0" }}
      >
        <div className="section-header" style={{ marginBottom: "1.5rem" }}>
          <div className="section-title-group">
            <span className="section-label">Spotlight</span>
            <h2 className="section-title">📋 Important Notices</h2>
          </div>
        </div>

        {/***** Notices cards grid *****/}
        <div 
          className="featured-grid" 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
            gap: "1.5rem",
            width: "100%"
          }}
        >
          {spotlightNotices.map((notice, i) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <NoticeCard notice={notice} index={i} />
            </motion.div>
          ))}
        </div>
        
        {/***** Central redirection msg and link *****/}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link to="/notices" style={{ color: "var(--text-secondary)", fontSize: "1rem", textDecoration: "underline", fontWeight: "500" }}>
            For more notices go to notice page →
          </Link>
        </div>
      </motion.div>

      {/*************************** Events Timeline ****************************/}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/***** Responsive styles *****/}
        <style>{`
          /* Desktop Default Layout */
          .timeline-container-wrapper { position: relative; max-width: 1050px; margin: 0 auto; padding: 2rem 0; }
          .timeline-spine-line { position: absolute; left: 50%; top: 0; bottom: 0; width: 4px; background: linear-gradient(to bottom, #10B981, #3B82F6, #F59E0B); transform: translateX(-50%); border-radius: 4px; }
          
          /* Terminal Caps for the Spine Line */
          .timeline-spine-cap-top { position: absolute; top: 0; left: 50%; transform: translate(-50%, -50%); width: 14px; height: 14px; border-radius: 50%; background: #10B981; z-index: 3; }
          .timeline-spine-cap-bottom { position: absolute; bottom: 0; left: 50%; transform: translate(-50%, 50%); width: 14px; height: 14px; border-radius: 50%; background: #F59E0B; z-index: 3; }
          
          .timeline-row-item { display: flex; width: 100%; align-items: center; position: relative; margin-bottom: 3rem; }
          
          /* Horizontal Shift Spacing Controls */
          .timeline-col-left { 
            flex: 1; 
            display: flex; 
            justify-content: flex-end; 
            align-items: center; 
            padding-right: 7.5rem; 
            position: relative; 
            z-index: 2; 
          }
          .timeline-col-left::after {
            content: "";
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 7.5rem;         
            border-top: 3px dotted #6b7280; 
            opacity: 0.9;
            z-index: 1;
          }

          .timeline-col-right { 
            flex: 1; 
            display: flex; 
            justify-content: flex-start; 
            align-items: center; 
            padding-left: 7.5rem;  
            position: relative; 
            z-index: 2; 
          }
          .timeline-col-right::after {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 7.5rem;         
            border-top: 3px dotted #6b7280; 
            opacity: 0.9;
            z-index: 1;
          }
          
          .timeline-node-dot { width: 16px; height: 16px; border-radius: 50%; background: var(--accent-primary, #3B82F6); border: 4px solid var(--page-bg, #0b1329); z-index: 3; flex-shrink: 0; }
          .timeline-date-text { font-weight: 700; font-size: 1.1rem; color: var(--text-primary, inherit); z-index: 2; position: relative; }
          
          .custom-timeline-card { background: var(--card-bg, #ffffff); border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color, #eaeaea); box-shadow: 0 4px 6px rgba(0,0,0,0.05); width: 100%; max-width: 420px; height: 300px; display: flex; flex-direction: column; text-decoration: none; text-align: left; color: inherit; transition: transform 0.2s, box-shadow 0.2s; z-index: 2; }
          .custom-timeline-card:hover { transform: translateY(-4px); box-shadow: 0 8px 16px rgba(0,0,0,0.1); }

          /* Mobile Responsive Layout (Screens smaller than 768px) */
          @media (max-width: 768px) {
            .timeline-spine-line { left: 24px; transform: none; }
            .timeline-spine-cap-top, .timeline-spine-cap-bottom { display: none; }
            .timeline-col-left::after, .timeline-col-right::after { display: none; } 
            
            .timeline-row-item { flex-direction: column; align-items: flex-start; padding-left: 56px; gap: 0.75rem; margin-bottom: 2.5rem; }
            .timeline-node-dot { position: absolute; left: 18px; top: 4px; }
            .timeline-col-left, .timeline-col-right { width: 100%; padding: 0 !important; justify-content: flex-start !important; }
            
            .timeline-row-item.is-left .timeline-col-left { order: 2; } 
            .timeline-row-item.is-left .timeline-col-right { order: 1; } 
            .timeline-row-item.is-right .timeline-col-left { order: 1; } 
            .timeline-row-item.is-right .timeline-col-right { order: 2; } 
            
            .timeline-date-text { font-size: 0.95rem; display: flex; align-items: center; min-height: 24px; margin-bottom: 0.25rem; padding: 0; }
            .custom-timeline-card { max-width: 100%; height: auto; min-height: 280px; }
          }
        `}</style>

        <div className="section-header" style={{ marginBottom: "2rem" }}>
          <div className="section-title-group">
            <span className="section-label">Upcoming</span>
            <h2 className="section-title">Events Timeline</h2>
          </div>
        </div>

        {/*********** Events Timeline setup *************/}
        <div className="timeline-container-wrapper">
          
          {/************ Central Vertical Spine line with top and bottom circles *************/}
          <div className="timeline-spine-cap-top" />
          <div className="timeline-spine-line" />
          <div className="timeline-spine-cap-bottom" />

          {/*************** Events Timeline ***************/}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {sortedUpcomingEvents.map((event, i) => {
              //checking for left and right placement of cards
              const isLeft = i % 2 === 0;
              
              const CustomTimelineCard = () => (
                <Link to={`/events/${event.id}`} className="custom-timeline-card">
                  {/*** Banner ***/}
                  <div className={`featured-banner ${getEventBannerClass(event.category)}`} style={{ height: "120px", position: "relative" }}></div>

                  {/*** Content Body ***/}
                  <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {/* Title */}
                    <h3 style={{ margin: "4px 0", fontSize: "1.15rem", fontWeight: "700", color: "#303234", lineHeight: "1.4" }}>
                      {event.title}
                    </h3>
                    
                    {/*** Date & Venue row ***/}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", color: "var(--text-secondary)", fontSize: "0.85rem", fontWeight: "500", marginTop: "4px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span>📍</span>
                        <span>{event.venue}</span>
                      </div>
                    </div>

                    {/*** Time row ***/}
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--text-secondary)", fontSize: "0.85rem", fontWeight: "500" }}>
                      <span>🕒</span>
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/*** Footer for events card ***/}
                  <div style={{ 
                    marginTop: "auto", 
                    borderTop: "1px solid var(--border-color, #eaeaea)", 
                    padding: "1rem", 
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center",
                    background: "rgba(0,0,0,0.02)"
                  }}>
                    <span style={{ 
                      color: "var(--accent-primary, #3B82F6)", 
                      fontSize: "0.9rem", 
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    }}>
                      Details &rarr;
                    </span>
                  </div>
                </Link>
              );

              return (
                <div key={event.id} className={`timeline-row-item ${isLeft ? 'is-left' : 'is-right'}`}>
                  
                  {/*** Left Column area ***/}
                  <div className="timeline-col-left">
                    {isLeft ? <CustomTimelineCard /> : <span className="timeline-date-text">{formatDate(event.date)}</span>}
                  </div>

                  {/*** Center Node dot ***/}
                  <div className="timeline-node-dot" />

                  {/*** Right Column area ***/}
                  <div className="timeline-col-right">
                    {!isLeft ? <CustomTimelineCard /> : <span className="timeline-date-text">{formatDate(event.date)}</span>}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </main>
  );
  //=======================================================================================================
}