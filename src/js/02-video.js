import Player from '@vimeo/player';
import * as throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(currentTime => {
    const playTime = currentTime.seconds;
    localStorage.setItem('videoplayer-current-time', JSON.stringify(playTime));
  }, 1000)
);

const savedTime = localStorage.getItem('videoplayer-current-time');
player
  .setCurrentTime(savedTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
