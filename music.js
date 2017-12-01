//music library

//create a library class that takes a name and a creator
class Library {
  constructor(name, creator) {
    this._name = name;
    this._creator = creator;
    this._playlists = [];
  }

//add a playlist to the library
  addPlaylist(playlist) {
    this._playlists.push(playlist);
  }

  get name() {
    return this._name;
  }

  get creator() {
    return this._creator;
  }

  get playlists() {
    return this._playlists;
  }

  get playlistNumber() {
    return this._playlists.length;
  }
}

//create a playlist by a name
class Playlist {
  constructor(name) {
    this._name = name;
    this._tracks = [];
  }

//add track to the playlist
  addTrack(track) {
    this.tracks.push(track);
  }

  get name() {
    return this._name;
  }

  get creator() {
    return this._creator;
  }

  get tracks() {
    return this._tracks;
  }

//calculate the total duration of the playlist
  get totalDuration() {
    return this.tracks.map(track => track.length)
            .reduce( ((a, b) => {return a + b}), 0 );
  }

//calculate the average rating of tracks
  get overallRating() {
    let validTracks = this.tracks.filter(track => track.rating > 0)
    return ((validTracks.map(track => track.rating)
            .reduce( ((a, b) => {return a + b}), 0 ))
            / (validTracks.length)).toFixed(2);
  }
}

//create a track by title, rating and length in seconds
class Track {
  constructor(title, rating, length) {
      this._title = title;
      this._length = length;
    if (rating < 6 && rating > 0 && Number.isInteger(rating)) {
      this._rating = rating;
    }
    else {
      this._rating = null;
      console.log('Track is created without a rating. Rating must be an integer between 1 and 5')
    }
  }

  get title() {
    return this._title;
  }

  get rating() {
    return this._rating;
  }

//set the rating but only as an integer between 1 and 5
  set rating(r) {
    if (r < 6 && r > 0 && Number.isInteger(r)) {
      this._rating = r;
    }
    else {
      console.log('Rating must be an integer between 1 and 5')
    }
  }

  get length() {
    return this._length;
  }

}



//creating and consoling examples

let myLib = new Library('mylibrary', 'soma')
let myPL1 = new Playlist('myplaylist_1')
let myPL2 = new Playlist('myplaylist_2')
let song1 = new Track('Track1',4,345)
let song2 = new Track('Track2',3,532)
let song3 = new Track('Track3',7,421)
let song4 = new Track('Track4',3,543)
let song5 = new Track('Track5',4,231)
myLib.addPlaylist(myPL1)
myLib.addPlaylist(myPL2)
myPL1.addTrack(song1);
myPL2.addTrack(song2);
myPL2.addTrack(song3);
myPL2.addTrack(song4);
myPL2.addTrack(song5);
console.log(myLib)
console.log(myPL1)
console.log(myPL2)
console.log(song1)
console.log(song2)
console.log(song3)
console.log(song4)
console.log(song5)
console.log('total duration for playlist 2:', myPL2.totalDuration)
console.log('average rating for playlist 2:', myPL2.overallRating)




