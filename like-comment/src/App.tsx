import React from 'react';
import Like from '../components/Like';
import Comment from '../components/Comment';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Like and Comment Functionality</h1>
      <div className="max-w-md mx-auto">
        <Like initialLikes={0} />
        <Comment initialComments={[]} />
      </div>
    </div>
  );
};

export default App;