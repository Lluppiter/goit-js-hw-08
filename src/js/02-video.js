import Player from '@vimeo/player';
import * as throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let playTime = 0;
player.on(
  'timeupdate',
  throttle(currentTime => {
    playTime = currentTime.seconds;
    localStorage.setItem('videoplayer-current-time', JSON.stringify(playTime));
  }, 1000)
);

const savedTime = localStorage.getItem('videoplayer-current-time');
player
  .setCurrentTime(savedTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
