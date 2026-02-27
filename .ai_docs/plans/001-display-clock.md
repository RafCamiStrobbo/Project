# Implementation Plan: Display Clock

## 1. Overview

### Summary
Create a minimal React application that displays a digital clock showing the current time in 24-hour format (h:mm), centered on the screen with large, readable typography.

### Key Objectives
- Set up a modern development environment using Vite + React + TypeScript
- Implement a real-time clock that updates every minute
- Apply clean, centered styling using SCSS modules
- Ensure type safety throughout the application

### High-Level Approach
1. Initialize Vite project with React and TypeScript template
2. Configure SCSS modules support
3. Create a Clock component that manages time state
4. Style the component using SCSS modules for centered, large typography
5. Implement time formatting logic for 24-hour h:mm format

## 2. API Contracts

### Clock Component Interface

```typescript
/**
 * Props for the Clock component (none required for this implementation)
 */
interface ClockProps {}

/**
 * Clock component that displays current time in h:mm format (24-hour)
 * Updates automatically every minute
 */
declare function Clock(props: ClockProps): JSX.Element;
```

### Time Formatting Utility

```typescript
/**
 * Formats a Date object into h:mm format (24-hour time)
 * @param date - The date object to format
 * @returns Formatted time string (e.g., "9:45", "14:30", "0:05")
 */
declare function formatTime(date: Date): string;
```

### Return Types
- `formatTime`: Returns `string` in format "h:mm" where h is 0-23 and mm is 00-59
- `Clock`: Returns React JSX element

### Error Handling
- No explicit error cases for this simple implementation
- Date object construction is guaranteed to succeed
- Component will always render successfully

## 3. Implementation Details

### 3.1 Project Setup (Pseudo Code)

```
SETUP_PROJECT:
  # Create new Vite project
  EXECUTE: npm create vite@latest . -- --template react-ts
  
  # Install SCSS support
  EXECUTE: npm install --save-dev sass
  
  # Clean up template files
  REMOVE: src/App.css
  REMOVE: src/index.css (or convert to minimal global styles)
  REMOVE: template assets and unnecessary code
```

### 3.2 Time Formatting Logic (Pseudo Code)

```
FUNCTION formatTime(date):
  # Get hours (0-23)
  hours = date.getHours()
  
  # Get minutes (0-59)
  rawMinutes = date.getMinutes()
  
  # Pad minutes to always be 2 digits
  minutes = rawMinutes < 10 ? "0" + rawMinutes : rawMinutes
  
  # Return formatted string
  RETURN hours + ":" + minutes
END FUNCTION

EXAMPLE OUTPUTS:
  - 9:05 AM → "9:05"
  - 2:30 PM → "14:30"
  - 12:00 AM → "0:00"
  - 11:59 PM → "23:59"
```

### 3.3 Clock Component Logic (Pseudo Code)

```
COMPONENT Clock:
  # STATE
  currentTime = useState(new Date())
  
  # EFFECT - Setup interval on mount
  ON_MOUNT:
    # Update time every minute (60000ms)
    intervalId = setInterval(() => {
      currentTime.set(new Date())
    }, 60000)
    
    # Cleanup interval on unmount
    ON_UNMOUNT:
      clearInterval(intervalId)
  END_EFFECT
  
  # RENDER
  formattedTime = formatTime(currentTime)
  RETURN:
    <div className={styles.clockContainer}>
      <div className={styles.time}>
        {formattedTime}
      </div>
    </div>
END COMPONENT
```

### 3.4 Styling Approach (SCSS Modules)

```scss
// Clock.module.scss
.clockContainer {
  // Center vertically and horizontally
  display: flex
  justify-content: center
  align-items: center
  height: 100vh  // Full viewport height
  width: 100vw   // Full viewport width
}

.time {
  // Large, readable font
  font-size: 6rem (or larger)
  font-weight: 300 (light weight for elegance)
  font-family: system-ui or monospace (for digit alignment)
  color: dark color for contrast
}
```

### 3.5 Application Entry Point

```
APP COMPONENT:
  RENDER:
    <Clock />
END COMPONENT

MAIN ENTRY (main.tsx):
  RENDER App component to #root element
```

## 4. Testing Plan

### 4.1 Time Formatting Tests (`formatTime.test.ts`)

**Test Suite: formatTime function**

1. **Test: formats morning hours correctly**
   - Input: `new Date('2026-02-27T09:05:00')`
   - Expected: `"9:05"`
   - Verifies: Single-digit hours without leading zero

2. **Test: formats afternoon hours correctly**
   - Input: `new Date('2026-02-27T14:30:00')`
   - Expected: `"14:30"`
   - Verifies: 24-hour format (not 12-hour)

3. **Test: formats midnight correctly**
   - Input: `new Date('2026-02-27T00:00:00')`
   - Expected: `"0:00"`
   - Verifies: Midnight is hour 0, not 12

4. **Test: formats end of day correctly**
   - Input: `new Date('2026-02-27T23:59:00')`
   - Expected: `"23:59"`
   - Verifies: Last minute of day

5. **Test: pads single-digit minutes with zero**
   - Input: `new Date('2026-02-27T15:05:00')`
   - Expected: `"15:05"`
   - Verifies: Minutes always have 2 digits

6. **Test: handles noon correctly**
   - Input: `new Date('2026-02-27T12:00:00')`
   - Expected: `"12:00"`
   - Verifies: Noon is hour 12 in 24-hour format

### 4.2 Clock Component Tests (`Clock.test.tsx`)

**Test Suite: Clock component**

1. **Test: renders without crashing**
   - Action: Render `<Clock />`
   - Expected: Component mounts successfully
   - Verifies: Basic rendering works

2. **Test: displays current time on mount**
   - Setup: Mock Date to return `2026-02-27T10:30:00`
   - Action: Render component
   - Expected: Component displays "10:30"
   - Verifies: Initial time display is correct

3. **Test: updates time after one minute**
   - Setup: Mock Date and timer functions
   - Initial time: `10:30:00`
   - Action: Fast-forward timers by 60000ms
   - Expected: Display updates to "10:31"
   - Verifies: setInterval updates work correctly

4. **Test: cleans up interval on unmount**
   - Setup: Spy on clearInterval
   - Action: Render and unmount component
   - Expected: clearInterval called once
   - Verifies: No memory leaks from intervals

5. **Test: applies correct CSS module classes**
   - Action: Render component
   - Expected: Container has clockContainer class, time element has time class
   - Verifies: SCSS modules are properly applied

### 4.3 Integration Tests

**Test Suite: Full Application**

1. **Test: App renders Clock component**
   - Action: Render `<App />`
   - Expected: Clock component is rendered
   - Verifies: Component integration works

2. **Test: Clock is centered on page**
   - Action: Render App, inspect computed styles
   - Expected: Clock container uses flexbox centering
   - Verifies: Visual centering is implemented

### Test Data Examples

```typescript
// Example test data for time formatting
const testCases = [
  { input: new Date('2026-02-27T00:00:00'), expected: '0:00' },
  { input: new Date('2026-02-27T09:05:00'), expected: '9:05' },
  { input: new Date('2026-02-27T12:00:00'), expected: '12:00' },
  { input: new Date('2026-02-27T14:30:00'), expected: '14:30' },
  { input: new Date('2026-02-27T23:59:00'), expected: '23:59' },
];
```

## 5. Implementation Notes

### Important Considerations

1. **Time Update Frequency**
   - The clock updates every 60 seconds (60000ms)
   - For exact minute transitions, could calculate delay to next minute boundary
   - Current simple approach is acceptable for this requirement

2. **Initial Render Timing**
   - Clock displays immediately on mount with current time
   - First interval tick happens after 60 seconds
   - User sees accurate time from the start

3. **Browser Compatibility**
   - Date API is universally supported
   - SCSS modules require build tooling (provided by Vite)
   - Flexbox is supported in all modern browsers

4. **Performance**
   - Single setInterval is very lightweight
   - React re-renders only the time display on updates
   - No performance concerns for this simple use case

### Potential Pitfalls to Avoid

1. **Forgetting to clean up interval**
   - Always return cleanup function from useEffect
   - Failure to do so causes memory leaks

2. **Update frequency mismatch**
   - Don't update every second if only showing h:mm
   - 60-second interval is sufficient and more efficient

3. **Time zone issues**
   - Using `Date.getHours()` gets local time
   - This is correct for a user-facing clock
   - No UTC conversion needed

4. **SCSS module import syntax**
   - Import as: `import styles from './Clock.module.scss'`
   - Use as: `className={styles.clockContainer}`
   - TypeScript may need type declaration for .scss imports

### File Structure

```
project/
├── .ai_docs/
│   ├── plans/
│   │   └── 001-display-clock.md (this file)
│   └── specs/
│       └── 001-display-clock.md
├── src/
│   ├── components/
│   │   ├── Clock.tsx
│   │   ├── Clock.module.scss
│   │   └── Clock.test.tsx
│   ├── utils/
│   │   ├── formatTime.ts
│   │   └── formatTime.test.ts
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── vite.config.ts
└── tsconfig.json
```

### Dependencies Required

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.0.0",
    "sass": "^1.62.0",
    "typescript": "^5.0.0",
    "vite": "^4.3.0",
    "vitest": "^0.31.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^5.16.5"
  }
}
```

### Next Steps for Implementation

1. Run `npm create vite@latest . -- --template react-ts`
2. Install SCSS: `npm install --save-dev sass`
3. Create `src/utils/formatTime.ts` with time formatting logic
4. Create `src/components/Clock.tsx` component
5. Create `src/components/Clock.module.scss` styles
6. Update `src/App.tsx` to render Clock component
7. Write tests for formatTime utility
8. Write tests for Clock component
9. Run development server: `npm run dev`
10. Verify clock displays and updates correctly
