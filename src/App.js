import { useState, useEffect } from 'react'
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { getToken } from './components/Spotify'
const SpotifyWebApi = require('spotify-web-api-js');
const spotify = new SpotifyWebApi();
const queryItem = "Arijit";

function App() {
  const [token, setToken] = useState(null);
  const [items, setItems] = useState([]);
  useEffect( () => {
      const item = getToken();
      const _token = item.access_token;

      if(_token){
        // console.log(token)
        spotify.setAccessToken(_token);
        // console.log()
        spotify.getMe().then(user => console.log(user));
        const results = spotify.searchTracks(queryItem, {limit :20});
        results
        .then(tracks =>{
          console.log("Tracks : ", tracks.tracks.items);
          setItems(tracks.tracks.items);
        })
        .catch(err => console.log("Error : ", err.message));
        setToken(_token);
      }
      
    },[])
  // const [code, setCode] = useState(null);

  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   console.log(window.location.search);
  //   setCode(params.get('access_token'));
  // },[window.location.search])
  // console.log("Code ", code);
  return (
    <div className="App">
      {token ? <Player code ={token}/> : <Login />}
    </div>
  );
}

export default App;
