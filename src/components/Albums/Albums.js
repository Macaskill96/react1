import React, {useEffect, useState} from 'react';
import Album from "./album/Album";

const Albums = () => {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(value => setAlbums(value))

    })
    return (
        <div>
            {
                albums.map(album => <Album album={album} key={album.id} />)
            }
        </div>
    );
};

export default Albums;