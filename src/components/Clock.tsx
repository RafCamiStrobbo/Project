import { useState, useEffect } from 'react';
import { formatTime } from '../utils/formatTime';
import styles from './Clock.module.scss';

/**
 * Clock component that displays current time in h:mm format (24-hour)
 * Updates automatically every minute
 */
export function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time every minute (60000ms)
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    // Cleanup interval on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = formatTime(currentTime);

  return (
    <div className={styles.clockContainer} data-testid="clock-container">
      <div className={styles.time} data-testid="clock-time">
        {formattedTime}
      </div>
    </div>
  );
}
