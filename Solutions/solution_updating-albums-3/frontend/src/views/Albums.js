import React, { useEffect, useState } from "react";

const Albums = props => {
    const [firstName, setFirstName] = useState("");
    const [band, setBand] = useState("");
    const [albumTitle, setAlbumTitle] = useState("");
    const [albumYear, setAlbumYear] = useState("");
    const [albums, setAlbums] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:3001/users/${props.currentUserId}/albums`)
        .then(response => response.json())
        .then(data => {
            setFirstName(data.firstName);
            setAlbums(data.albums);
        })
    }, [])

    const updateData = event => {
        switch(event.target.name) {
          case "band":
            setBand(event.target.value);
            break;
          case "title":
            setAlbumTitle(event.target.value);
            break;
          case "year":
            setAlbumYear(event.target.value);
            break;
          default:
            break;
        }
      }

    return (
        <div>
            <h2 id="greeting">Welcome {firstName}!</h2>
            <h1>Add an Album to the Collection!</h1>
    
            <form>
                <div>
                    <label>Band</label>
                    <input name="band" onChange={updateData} value={band} />
                </div>
                <div>
                    <label>Title</label>
                    <input name="title" onChange={updateData} value={albumTitle} />
                </div>
                <div>
                    <label>Year</label>
                    <input name="year" onChange={updateData} value={albumYear} />
                </div>
                <button>Submit Album</button>
            </form>
            <button>Delete all albums!</button>
    
            <div>
                <h2>Current Albums</h2>
                <ul>
                    {
                        albums.map(album => {
                            return <li>{album.albumTitle} by {album.band} ({album.albumYear})</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Albums;