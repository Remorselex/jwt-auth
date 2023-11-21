// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addComment, selectComments } from '../features/commentSlice';

// interface PhotoModalProps {
//   photoId: string;
//   onClose: () => void;
// }

// const PhotoModal: React.FC<PhotoModalProps> = ({ photoId, onClose }) => {
//   const dispatch = useDispatch();
//   const comments = useSelector(selectComments);
//   const [comment, setComment] = useState('');

//   const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setComment(e.target.value);
//   };

//   const handleSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     dispatch(addComment({ photoId, comment }));
//     setComment('');
//   };

//   return (
//     <div>
//       <button onClick={onClose}>Close</button>
//       <img src={`https://example.com/photos/${photoId}`} alt="Photo" />
//       <ul>
//         {comments.map((comment) => (
//           <li key={comment.id}>{comment.text}</li>
//         ))}
//       </ul>
//       <form onSubmit={handleSubmitComment}>
//         <input type="text" value={comment} onChange={handleCommentChange} placeholder="Add a comment" />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

export default {};