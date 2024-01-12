import React, { useState } from 'react';

interface RevealPageProps {
  submissions: string[];
}

const RevealPage: React.FC<RevealPageProps> = ({ submissions }) => {
  const [ratings, setRatings] = useState<{ [key: string]: { up: boolean, down: boolean } }>({});

  const handleRating = async (submission: string, rating: 'up' | 'down') => {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ submission, rating }),
    });

    if (response.ok) {
      setRatings(prevRatings => ({
        ...prevRatings,
        [submission]: { ...prevRatings[submission], [rating]: true },
      }));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold mb-4">Submissions</h1>
      {submissions.map((submission, index) => (
        <div key={index} className="flex items-center text-2xl">
          <p>{submission}</p>
          <button
            onClick={() => handleRating(submission, 'up')}
            disabled={ratings[submission]?.up || ratings[submission]?.down}
          >
            👍
          </button>
          <button
            onClick={() => handleRating(submission, 'down')}
            disabled={ratings[submission]?.up || ratings[submission]?.down}
          >
            👎
          </button>
        </div>
      ))}
    </div>
  );
};

export default RevealPage;