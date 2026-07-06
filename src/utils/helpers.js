export function getCategoryClass(category) {
  const map = {
    Academics: "cat-academics",
    Library: "cat-library",
    "Financial Aid": "cat-financial-aid",
    Infrastructure: "cat-infrastructure",
    Accommodation: "cat-accommodation",
    Research: "cat-research",
    Health: "cat-health",
    "Student Affairs": "cat-student-affairs",
    Placement: "cat-placement",
    Finance: "cat-finance",
    Technical: "cat-technical",
    Cultural: "cat-cultural",
    Sports: "cat-sports",
    Academic: "cat-academic",
    Social: "cat-social",
  };
  return map[category] || "cat-academics";
}

export function getEventBannerClass(category) {
  const map = {
    Technical: "ev-technical",
    Cultural: "ev-cultural",
    Sports: "ev-sports",
    Academic: "ev-academic",
    Social: "ev-social",
  };
  return map[category] || "ev-academic";
}

export function getCategoryEmoji(category) {
  const map = {
    Academics: "📚",
    Library: "📖",
    "Financial Aid": "💰",
    Infrastructure: "🔧",
    Accommodation: "🏠",
    Research: "🔬",
    Health: "❤️",
    "Student Affairs": "🎓",
    Placement: "💼",
    Finance: "💳",
    Technical: "⚙️",
    Cultural: "🎨",
    Sports: "⚽",
    Academic: "📝",
    Social: "🤝",
  };
  return map[category] || "📌";
}

export function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}


