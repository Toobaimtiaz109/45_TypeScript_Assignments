"use strict";
// Albumn..
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Making three albums without track information
let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2");
let album3 = make_album("Artist3", "Album3");
console.log(album1);
console.log(album2);
console.log(album3);
// Making an album with track information
let album4 = make_album("Artist4", "Album4", 12);
console.log(album4);
