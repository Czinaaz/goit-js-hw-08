

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGEKEY = 'videoplayer-current-time'

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const timeToUpdate = throttle(data => {
    localStorage.setItem(LOCALSTORAGEKEY, data.seconds);
}, 1000)

player.on('timeupdate', timeToUpdate);
   
player.on('loaded', () => {
    const savedTimeUpdate = localStorage.getItem(LOCALSTORAGEKEY);
    if (savedTimeUpdate){
        player 
            .setCurrentTime(Number.parseFloat(savedTimeUpdate))
            .catch(function(error) {
                switch (error.name){
                    case 'RangeError':
                    break;
                default:
                    break;
                }
            });
    }
});   

    
   
  

 