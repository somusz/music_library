

class Library {
  constructor(name, creator) {
    this._name = name;
    this._creator = creator;
    this._playlists = [];
  }

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

class Playlist {
  constructor(name) {
    this._name = name;
    this._tracks = [];
  }

  addTrack(track) {
    this._tracks.push(track);
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

  get totalDuration() {
    return this.tracks._length.reduce( ((a, b) => {return a + b}), 0 );
  }

  get overallRating() {
    return (this.tracks._rating.reduce( ((a, b) => {return a + b}), 0 )) / (this._tracks.length);
  }
}

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

  set rating(r) {
    if (r < 6 && r > 0 && Number.isInteger(r)) {
      console.log('line 86')
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





let myLib = new Library('mylibrary', 'soma')
let myPL1 = new Playlist('myplaylist_1')
let myPL2 = new Playlist('myplaylist_2')
myLib.addPlaylist('myplaylist_1')
myLib.addPlaylist('myplaylist_2')
console.log(myLib)
console.log(myPL1)
console.log(myPL2)




