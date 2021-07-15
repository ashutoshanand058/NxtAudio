const authURL = "https://accounts.spotify.com/authorize";

const CLIENT_ID = "7ff6a3ab724d413cb32266a9a9c964b4";
const REDIRECT_URI = "http://localhost:3000/";

const scopes = [
    "user-library-read",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-playback-position",
    "user-read-recently-played",
    "playlist-modify-public",
    "playlist-modify-private",
];
export const getToken = () =>{
    return window.location.hash.substring(1).split('&')
        .reduce((initial, item) =>{
            const parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        },{});
}
// export const getExpiresIn = () => {
//     const url = window.location.href;
//     const urlParams = new URLSearchParams(url);
//     return urlParams.get('expires_in');
// }
export const loginURL = `${authURL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scopes=${scopes.join('%20')}&response_type=token&show_dialog=true`;
