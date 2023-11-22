import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice/authSlice';
import { AppThunkDispatch } from '../api/services/types/types';

interface Photo {
  id: number;
  url: string;
  title: string;
}

const initialPhotos: Photo[] = [
  {
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
  },
  {
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
  },
  {
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
  },
  {
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
  },
  {
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
  },
];

const ImagePage: React.FC = () => {
  const dispatch: AppThunkDispatch = useDispatch();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);


  const onLogout = () => {
    dispatch(logout());
  };

  const openPhoto = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  
  const closePhoto = () => {
    setSelectedPhoto(null);
  };


  const containerStyle = {
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: 'repeat(3, 1fr)',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '900px',
  };

  const modalContainerStyle: React.CSSProperties = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  };

  const closeModal = () => {
    closePhoto();
  };

  return (
    <div>
      <div style={containerStyle}>
        {initialPhotos.map((item) => (
          <div key={item.id + item.title}>
            <img src={item.url} width={300} alt="img" onClick={() => openPhoto(item)} />
            <p onClick={() => console.log('запрос на редактирование к api')}>{item.title}</p>
          </div>
        ))}
      </div>
      <button onClick={() => onLogout()}>Logout</button>

      {selectedPhoto && (
        <div style={modalContainerStyle}>
          <div>
            <img src={selectedPhoto.url} alt="img" />
            <p>{selectedPhoto.title}</p>

            <button onClick={() => console.log('Отправить запрос на отображение комментариев')}>
              Show Comments
            </button>
            <button onClick={() => console.log('Отправить запрос на редактирование фотографии')}>
              Edit Photo
            </button>

            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePage;