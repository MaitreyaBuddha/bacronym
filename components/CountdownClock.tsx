import React, { useState, useEffect } from 'react';

interface CountdownClockProps {
  onTimeUp: () => void;
}

const CountdownClock: React.FC<CountdownClockProps> = ({ onTimeUp }) => {
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          onTimeUp();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeUp]);

  return (
    <div className="text-4xl font-bold">
      {countdown}
    </div>
  );
};
export default CountdownClock;