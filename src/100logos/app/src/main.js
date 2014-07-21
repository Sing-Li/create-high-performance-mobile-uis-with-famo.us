/*globals define*/
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');

    // create the main context
    var mainContext = Engine.createContext();
    var initialTime = Date.now();
    function rotY() {
            return Transform.rotateY(.002 * (Date.now() - initialTime));
        }
    function rotX() {
            return Transform.rotateX(.002 * (Date.now() - initialTime));
        }

    for (var i=0; i< 10; i ++)
      for (var j=0; j<10; j++) {
        var image =
            new ImageSurface({
                size: [50, 50],
                content: 'content/images/famous_logo.png'
            });
        var transMod =
           new Modifier({
                  size: image.getSize.bind(image),
                  transform: Transform.translate(j * 50, i * 50, 0)
                }
            );

        var rotMod =
            new Modifier({
                origin: [0.5, 0.5],
                // xor
                transform : (((i % 2) !== (j % 2)) ?  rotY  : rotX)
            });

        mainContext.add(transMod).add(rotMod).add(image);
        }
});
