import React, { useState, useEffect } from 'react';

interface LikeProps {
  initialLikes: number;
}

const useLike = <T extends number>(initialValue: T) => {
  const [likes, setLikes] = useState<T>(() => {
    const savedLikes = localStorage.getItem('likes');
    return savedLikes ? (JSON.parse(savedLikes) as T) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  const handleLike = () => {
    setLikes((prevLikes) => (prevLikes + 1) as T);
  };

  return { likes, handleLike };
};

const Like: React.FC<LikeProps> = ({ initialLikes }) => {
  const { likes, handleLike } = useLike(initialLikes);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <button onClick={handleLike} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Like</button>
      <span className="ml-2 text-gray-700">{likes} Likes</span>
    </div>
  );
};

export default Like;