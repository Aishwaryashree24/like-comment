import React, { useState, useEffect } from 'react';

interface CommentProps {
  initialComments: string[];
}

const useComment = <T extends string[]>(initialValue: T) => {
  const [comments, setComments] = useState<T>(() => {
    const savedComments = localStorage.getItem('comments');
    return savedComments ? (JSON.parse(savedComments) as T) : initialValue;
  });

  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prevComments) => [...prevComments, newComment] as T);
      setNewComment('');
    }
  };

  return { comments, newComment, setNewComment, handleAddComment };
};

const Comment: React.FC<CommentProps> = ({ initialComments }) => {
  const { comments, newComment, setNewComment, handleAddComment } = useComment(initialComments);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-4">
      <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Add a comment" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button onClick={handleAddComment} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Add Comment</button>
      <ul className="mt-4 space-y-2">
        {comments.map((comment, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded-lg">
            {comment}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Comment;