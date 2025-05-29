## ✅ Task 1: Code Cleanup – "Fix This Component"

### Description:
Refactored an existing component that fetched and displayed the first five posts from a public API.

### Approach:
- Renamed unclear variables for better readabilit.
- Replaced the `for` loop with `Array.slice(0, 5)` for shortness.
- Added `error` state and `.catch` block for proper error handling.
- Checked for HTTP errors (`response.ok`) before parsing JSON.
- Added comments and consistent code formatting.

---

## ✅ Task 2: Data List with Search

### Description:
Created a searchable user list component from static user data.

### Approach:
- Used `useState` and useEffect to manage the search term.
- Filtered users by name or email using `Array.filter` and `toLowerCase()` for case-insensitive matching.
- Displayed a message when no users matched the search.
- Applied clean inline styles for layout and visual clarity.
- Kept logic and rendering simple, readable, and performant.
- modularized filtering function into lib, separate the constants data from a component also the style.

---

## ✅ Task 3: Simple Countdown Timer

### Description:
Built a countdown timer that starts from 10, updates every second, and shows "Done!" when it reaches zero.

### Approach:
- Used `useState` for managing time and timer state (`isRunning`).
- Used `useEffect` to handle the timer interval and cleanup on unmount or reset.
- Included start and reset buttons with appropriate disabling logic.
- Ensured simple and accessible UI with responsive feedback.


