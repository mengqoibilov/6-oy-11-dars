import React, { useEffect, useState } from "react";
import { getAlbums } from "./Api";

const AlbumsPage = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums().then(response => setAlbums(response.data));
  }, []);

  return (
    <div className="page-container">
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumsPage;
