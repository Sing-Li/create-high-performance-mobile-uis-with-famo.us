define(function(require, exports, module) {
    'use strict';
    function DataSource(optons) {
    }

    DataSource.prototype.getArticles = function() {
        return [
        {title: 'Build a reactive sales chart with Meteor', url: 'http://www.ibm.com/developerworks/library/wa-bluemix-meteor-app/index.html', desc: '2014, Sing Li. Meteor simplifies the development of single page, real-time, streaming data update applications by moving the entire client and server stack to JavaScript.'},
        {title: '3D development with WebGL, Part 1', url: 'http://www.ibm.com/developerworks/web/library/wa-webgl1/', desc: '2013, Sing Li. Discover the 3D computer graphics evolution over the last three decades. Learn fundamental WebGL concepts.'},
        {title: '3D development with WebGL, Part 2', url: 'http://www.ibm.com/developerworks/web/library/wa-webgl2/', desc: '2014, Sing Li. Learn Three.js and SceneJS WebGL programming; create 3D scene fly-overs with tween.js.'},
        {title: '3D development with WebGL, Part 3', url: 'http://www.ibm.com/developerworks/web/library/wa-webgl3/', desc: '2014, Sing Li. Build a 3D WebGL game, a 10,000 points big data visualization, or control 3D scenes with Leap Motion gestures.'},
        {title: 'Rock\'em Sock\'em Robocode!', url: 'http://www.ibm.com/developerworks/library/j-robocode/', desc: '2002, Sing Li. Code and test your own robots. Join thousands around the world on one of the fastest, and certainly the most fun, ways to learn Java programming.'},
        {title: 'Rock\'em Sock\'em Robocode: Round 2', url: 'http://www.ibm.com/developerworks/library/j-robocode2/', desc: '2002, Sing Li. Pit your best robot against the best in the world! Try new APIs in creating your robot team. Learn advanced robot design strategies from the masters.'},
        {title: 'Taming your Tomcat: Filtering tricks for Tomcat 5', url: 'https://www.ibm.com/developerworks/library/j-tomcat2/', desc: '2003, Sing Li. Leverage Tomcat 5\'s support for Servlet 2.4 and JSP 2.0 new filter features.'},
        {title: 'Introduction to Apache Maven 2', url:'http://www.ibm.com/developerworks/java/tutorials/j-mavenv2/', desc: '2006, Sing Li. Get started with the Apache Maven 2 build system.'}
        ];

    };

    DataSource.prototype.getVideos = function() {
        return [
        {title: 'Sintel', icon: 'sintel.png', url: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4', desc: '2010, 15 minutes. A moving tale of a lonely woman in search of a lost dragon. Producer: Ton Roosendaal, Director: Colin Levy'},
        {title: 'Big Buck Bunny', icon: 'bigbuck.png', url: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4', desc: '2008, 10 minutes. Lovable giant rabbit with a heart of gold. Animated feature. Director: Sacha Goedegebure'},
        {title: 'Elephants Dream', icon: 'eledream.png', url: 'https://ia700406.us.archive.org/31/items/ElephantsDream/ed_1024_512kb.mp4',
            desc: '2006, 11 mintues. Two characters explore an infinite machine. Animated feature produced entirely using open source tools. Director: Bassam Kurdali'},
        {title: 'Code Rush', icon: 'coderush.png', url: '', desc: '2000, 56 minutes. Documentary tracking silicon valley software engineers working in Netscape Communications during 1998 '}
        ];
    };

    module.exports = DataSource;
});
