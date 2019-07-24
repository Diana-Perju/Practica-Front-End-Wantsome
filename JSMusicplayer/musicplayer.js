

//Code from Practice
function MusicPlayer(initialPlaylist = []) {
  this.playlist = initialPlaylist;
  this.currentlyPlaying = this.playlist[0];
  this.play = function(position = 0) {
    this.currentlyPlaying = this.playlist[position];
    console.log("Now playing: ", this.playlist[position]);
  };

  this.shuffle = function() {
    var randomPosition = Math.floor(Math.random() * this.playlist.length);
    this.play(randomPosition);
  };

  this.addToPlaylist = function(melodie) {
    this.playlist.push(melodie);
    console.log("Added to playlist:", melodie);
  };

  this.removeFromPlaylist = function(melodie) {
    this.playlist = this.playlist.filter(function(value) {
      return value !== melodie;
    });
  };

  this.showPlaylist = function() {
    console.log("===== Playlist ====");
    this.playlist.forEach(function(value) {
      console.log("*", value);
    });
    console.log("===== End of Playlist ====");
  };

  this.nextTrack = function() {
    var currentPosition = this.playlist.indexOf(this.currentlyPlaying);
    var nextPosition = currentPosition + 1;
    console.log(
      "Next Track is: ",
      this.playlist[nextPosition % this.playlist.length]
    );
  };
}

var playlist = [
  "Nicu Alifantis - Spala rana",
  "Dan Ciotoi - S-a rupt lantul de iubire",
  "Drake - Fructul Pasiunii"
];
var SporifyU = new MusicPlayer(playlist);
SporifyU.addToPlaylist("Macanache - Sefu");
SporifyU.addToPlaylist("Dua Lipa - Sefu");
SporifyU.addToPlaylist("Tommy Cash - Asa sunt zilele mele");
SporifyU.shuffle();
// console.log("Now Playing: ", SporifyU.currentlyPlaying);
// SporifyU.play(2);
// SporifyU.nextTrack();
// console.log("Now Playing: ", SporifyU.currentlyPlaying);
// SporifyU.showPlaylist();
// SporifyU.removeFromPlaylist("Drake - Fructul Pasiunii");
// SporifyU.showPlaylist();






/*function MusicPlayer(src) {
    this.MusicPlayer = document.createElement("audio");
    this.MusicPlayer.src = src;
  
    this.play = function(){
      this.MusicPlayer.play();
      return "Playing song";
    }
    this.stop = function(){
      this.MusicPlayer.stop();
    }
    this.pause = function(){
        this.MusicPlayer.pause();
      }
    this.nexttrack = function(){
    this.MusicPlayer.nexttrack();
      }
    this.previoustrack = function(){
    this.MusicPlayer.previoustrack();
        }
  }

  var x = new MusicPlayer();
  console.log(x);
  */
  
  