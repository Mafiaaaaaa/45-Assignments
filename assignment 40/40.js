function make_album(artist_name, album_title, tracks) {
    var album = {
        Artist: artist_name,
        title: album_title,
    };
    if (tracks != undefined) {
        album.tracks = tracks;
    }
    ;
    return album;
}
make_album("Unknown", "No name");
var album1 = make_album("Artist 1", "title 1");
var album2 = make_album("Artist 2", "title 2", 101);
var album3 = make_album("Artist 3", "title 3");
console.log(album1, album2, album3);
