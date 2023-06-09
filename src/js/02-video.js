import Player from '@vimeo/player';
import { throttle } from 'lodash';

const frame = document.querySelector("iframe");
const player = new Player(frame);
player.on(`timeupdate`, throttle((e) => {
    localStorage.setItem(`videoplayer-current-time`, e.seconds)
}, 1000));
player.setCurrentTime(localStorage.getItem(`videoplayer-current-time`) || 0);

