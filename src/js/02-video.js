var throttle = require("lodash.throttle");
import Player from "@vimeo/player";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const getTimeFromStorage = () => {
	let time = localStorage.getItem("videoplayer-current-time");

	time !== null ? Number(time) : (time = 0);
	return time;
};

// Start time from local storage
player.setCurrentTime(getTimeFromStorage());

// events
player.on(
	"timeupdate",
	throttle(() => {
		player.getCurrentTime().then(function (seconds) {
			localStorage.setItem("videoplayer-current-time", seconds);
		});
	}, 1000),
);
