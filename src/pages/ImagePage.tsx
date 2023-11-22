import React, { useState } from 'react';

interface Photo {
  id: number;
  url: string;
  title: string;
}

const ImagePage: React.FC = () => {
  //мока ответ с бэка
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

  const container = {
    display: 'grid',
    gridGap: 20,
    gridTemplateColumns: 'repeat(3, 1fr)',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '900px'
  }

  return (
    <div style={container}>
      {initialPhotos.map((item) => (
        <div key={item.id + item.title}>
          <img src={item.url} width={300} alt="img"/>
          <p onClick={() => console.log('запрос на на редактирование к api')}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ImagePage;