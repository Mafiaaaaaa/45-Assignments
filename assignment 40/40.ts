function make_album(artist_name:string, album_title:string, tracks?:number){
let album: {Artist:string, title:string, tracks?:number} = {
    Artist: artist_name,
    title: album_title,
    };

if (tracks != undefined){
    album.tracks = tracks
};
return album;

}

make_album("Unknown", "No name");
let album1 = make_album("Artist 1", "title 1");
let album2 = make_album("Artist 2", "title 2", 101);
let album3 = make_album("Artist 3", "title 3");
console.log(album1, album2, album3);