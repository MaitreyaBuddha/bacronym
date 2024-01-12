import React, { useState, useEffect } from 'react';

const CountdownClock = () => {
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown > 0 ? prevCountdown - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-4xl font-bold">
      {countdown}
    </div>
  );
};

export default CountdownClock;