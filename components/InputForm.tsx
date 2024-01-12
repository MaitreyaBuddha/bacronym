import React, { useState, FormEvent } from 'react';

const InputForm = () => {
  const [input, setInput] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-2 border-gray-300 rounded-md p-2"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-md">
        Submit
      </button>
    </form>
  );
};

export default InputForm;