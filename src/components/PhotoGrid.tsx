// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchPhotos, selectPhotos } from '../features/photoSlice';

// const PhotoGrid: React.FC = () => {
//   const dispatch = useDispatch();
//   const photos = useSelector(selectPhotos);

//   useEffect(() => {
//     dispatch(fetchPhotos());
//   }, [dispatch]);

//   return (
//     <div>
//       {photos.map((photo) => (
//         <img key={photo.id} src={photo.url} alt={photo.title} />
//       ))}
//     </div>
//   );
// };

export default {};