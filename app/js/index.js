'use strict';

// var coinImage = new Image();
// coinImage.src = "img/Amelia4.gif";

function sprite (options) {
				
    var that = {};
					
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;

    return that;
}



var coin,coinImage,canvas;					

function gameLoop () {	
    window.requestAnimationFrame(gameLoop);
	coin.update();
	coin.render();
}
	
function sprite (options) {	
	var that = {},
		frameIndex = 0,
		tickCount = 0,
		ticksPerFrame = options.ticksPerFrame || 0,
		numberOfFrames = options.numberOfFrames || 1;
		
	that.context = options.context;
    that.width = options.width;
	that.height = options.height;
	that.image = options.image;
		
	that.update = function () {
        tickCount += 1;
        if (tickCount > ticksPerFrame) {
			tickCount = 0;	
            // If the current frame index is in range
            if (frameIndex < numberOfFrames - 1) {	
                // Go to the next frame
                frameIndex += 1;
            } else {
                frameIndex = 0;
            }
        }
    };
		
	that.render = function () {
		// Clear the canvas
		that.context.clearRect(0, 0, that.width, that.height);
		  
		// Draw the animation
		that.context.drawImage(
		    that.image,
		    frameIndex * that.width / numberOfFrames,
		    0,
		    that.width / numberOfFrames,
		    that.height,
		    0,
		    0,
		    that.width / numberOfFrames,
		    that.height);
		};
		
		return that;
    }
	
	// Get canvas
	canvas = document.getElementById("coinAnimation");
	canvas.width = 100;
	canvas.height = 100;
	
	// Create sprite sheet
	coinImage = new Image();	
	
	// Create sprite
	coin = sprite({
	    context: canvas.getContext("2d"),
		width: 1000,
		height: 100,
		image: coinImage,
		numberOfFrames: 10,
		ticksPerFrame: 4
	});
	
	// Load sprite sheet
	coinImage.addEventListener("load", gameLoop);
	coinImage.src = "img/Amelia4.gif";



// var ipc = require('ipc');
// var remote = require('remote');
// var Tray = remote.require('tray');
// var Menu = remote.require('menu');
// var path = require('path');

// var soundButtons = document.querySelectorAll('.button-sound');
// var closeEl = document.querySelector('.close');
// var settingsEl = document.querySelector('.settings');

// var trayIcon = null;
// var trayMenu = null;

// for (var i = 0; i < soundButtons.length; i++) {
//     var soundButton = soundButtons[i];
//     var soundName = soundButton.attributes['data-sound'].value;

//     prepareButton(soundButton, soundName);
// }

// function prepareButton(buttonEl, soundName) {
//     buttonEl.querySelector('span').style.backgroundImage = 'url("img/icons/' + soundName + '.png")';

//     var audio = new Audio(__dirname + '/wav/' + soundName + '.wav');
//     buttonEl.addEventListener('click', function () {
//         audio.currentTime = 0;
//         audio.play();
//     });
// }

// closeEl.addEventListener('click', function () {
//     ipc.send('close-main-window');
// });

// settingsEl.addEventListener('click', function () {
//     ipc.send('open-settings-window');
// });

// ipc.on('global-shortcut', function (arg) {
//     var event = new MouseEvent('click');
//     soundButtons[arg].dispatchEvent(event);
// });

// if (process.platform === 'darwin') {
//     trayIcon = new Tray(path.join(__dirname, 'img/tray-iconTemplate.png'));
// }
// else {
//     trayIcon = new Tray(path.join(__dirname, 'img/tray-icon-alt.png'));
// }

// var trayMenuTemplate = [
//     {
//         label: 'Sound machine',
//         enabled: false
//     },
//     {
//         label: 'Settings',
//         click: function () {
//             ipc.send('open-settings-window');
//         }
//     },
//     {
//         label: 'Quit',
//         click: function () {
//             ipc.send('close-main-window');
//         }
//     }
// ];
// trayMenu = Menu.buildFromTemplate(trayMenuTemplate);
// trayIcon.setContextMenu(trayMenu);