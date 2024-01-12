import React, { useState, useEffect, useCallback } from 'react';
import CountdownClock from '../components/CountdownClock';
import InputForm from '../components/InputForm';
import RevealPage from '../components/RevealPage';

const Home = () => {
  const [sourceAcronym, setSourceAcronym] = useState('');
  const [submissions, setSubmissions] = useState<string[]>([]);
  const [reveal, setReveal] = useState(false);

  const fetchSourceAcronym = useCallback(async () => {
    const response = await fetch('/api/sourceAcronym');
    const data = await response.json();
    setSourceAcronym(data.sourceAcronym);
  }, []);

  useEffect(() => {
    fetchSourceAcronym();
  }, [fetchSourceAcronym]);

  const handleTimeUp = () => {
    setReveal(true);
    setTimeout(() => {
      setReveal(false);
      setSubmissions([]);
      fetchSourceAcronym();
    }, 30000);
  };

  const handleSubmit = (input: string) => {
    setSubmissions(prevSubmissions => [...prevSubmissions, input]);
  };

  return reveal ? (
    <RevealPage submissions={submissions} />
  ) : (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold mb-4">{sourceAcronym}</h1>
      <CountdownClock onTimeUp={handleTimeUp} />
      <InputForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;