import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { events, eventCategories } from "../data/events";
import EventCard from "../components/EventCard";
import Pagination from "../components/Pagination";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { usePagination } from "../hooks/usePagination";

const ITEMS_PER_PAGE = 6;

export default function EventsFeed() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Data fetching simulation
  useEffect(() => {
    setLoading(true);
    setError(null);
    const timer = setTimeout(() => {
      //the loading spinner will run for 0.7 secs and then the data will be displayed
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  //Searchable events filtering and logic
  const filtered = useMemo(() => {
    return events.filter((e) => {
      const matchesCategory = category === "All" || e.category === category;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        //checking through the entire description to find the match 
        e.title.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q) ||
        e.venue.toLowerCase().includes(q) ||
        e.organizer.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const { paginatedItems, currentPage, totalPages, goToPage, resetPage } =
    usePagination(filtered, ITEMS_PER_PAGE);

  // Reseting page when filtered changes
  useEffect(() => {
    resetPage();
  }, [search, category]);

  const retry = () => {
    setLoading(true);
    setError(null);
    setTimeout(() => setLoading(false), 700);
  };

  //==================================== HTML SETUP ========================================//
  return (
    <main className="page-container page-fade">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="section-header">
          <div className="section-title-group">
            <h1 className="section-title">🎉 Campus Events</h1>
          </div>
        </div>

        {/***************** Search Bar ********************/}
        <div className="controls-bar">
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input
              id="events-search"
              type="text"
              className="search-input"
              placeholder="Search events by title, venue, or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search events"
            />
            {search && (
              <button
                className="search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/**** Search buttons ****/}
          <div className="filter-chips">
            {eventCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-chip ${category === cat ? "active" : ""}`}
                onClick={() => setCategory(cat)}
                id={`event-filter-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                aria-pressed={category === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/**** Total no. of available events ****/}
          <span className="results-count">
            {loading
              ? "Loading..."
              : `${filtered.length} event${filtered.length !== 1 ? "s" : ""} found`}
          </span>
        </div>
      </motion.div>

       {/*** Loading spinner ***/}
      {loading && <LoadingSpinner message="Loading events..." />}

      {/*** Error msg ***/}
      {!loading && error && <ErrorMessage message={error} onRetry={retry} />}

      {/*** Setting up the event cards as per the search query ***/}
      {!loading && !error && (
        //If the search query doesn't match at all
        <>
          {filtered.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">🎪</div>
              <h3 className="empty-state-title">No events found</h3>
              <p className="empty-state-text">
                Try adjusting your search query or selected category filter.
              </p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${search}-${category}-${currentPage}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="card-grid">
                  {paginatedItems.map((event, i) => (
                    <EventCard key={event.id} event={event} index={i} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}

          {/**** Setting up event cards in different pages ****/}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            goToPage={goToPage}
          />
        </>
      )}
    </main>
  );
  //======================================================================================================
}
