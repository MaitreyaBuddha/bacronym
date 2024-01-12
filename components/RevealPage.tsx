import React from 'react';

interface RevealPageProps {
  submissions: string[];
}

const RevealPage: React.FC<RevealPageProps> = ({ submissions }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold mb-4">Submissions</h1>
      {submissions.map((submission, index) => (
        <p key={index} className="text-2xl">{submission}</p>
      ))}
    </div>
  );
};

export default RevealPage;