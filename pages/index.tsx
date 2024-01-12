import React, { useState, useEffect } from 'react';
import CountdownClock from '../components/CountdownClock';
import InputForm from '../components/InputForm';

const Home = () => {
  const [sourceAcronym, setSourceAcronym] = useState('');

  useEffect(() => {
    const fetchSourceAcronym = async () => {
      const response = await fetch('/api/sourceAcronym');
      const data = await response.json();
      setSourceAcronym(data.sourceAcronym);
    };

    fetchSourceAcronym();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold mb-4">{sourceAcronym}</h1>
      <CountdownClock />
      <InputForm />
    </div>
  );
};

export default Home;