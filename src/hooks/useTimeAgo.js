import React, { useState, useEffect } from "react";

const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const getDateDiffs = (timestamp) => {
  const now = Date.now();
  const elapsed = (timestamp - now) / 1000;

  for (const [unit, seconds] of DATE_UNITS) {
    if (Math.abs(elapsed) > seconds || unit === "seconds") {
      const value = Math.round(elapsed / seconds);
      return { value, unit };
    }
  }
};

export default function useTimeAgo(timestamp) {
  const [timeAgo, setTimeAgo] = useState(() => getDateDiffs(timestamp));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(getDateDiffs(timestamp));
    }, 5000);
    return () => clearInterval(interval);
  }, [timestamp]);

  const rtf = new Intl.RelativeTimeFormat(navigator.language, {
    style: "narrow",
  });

  const { value, unit } = timeAgo;

  return rtf.format(value, unit);
}
