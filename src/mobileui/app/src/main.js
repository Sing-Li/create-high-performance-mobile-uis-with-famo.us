define(function(require, exports, module) {
    'use strict';
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var ScrollContainer = require('famous/views/ScrollContainer');
    var EdgeSwapper = require('famous/views/EdgeSwapper');
    var NavigationBar = require('famous/widgets/NavigationBar');
    var TabBar = require('famous/widgets/TabBar');
    var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');
    var VideoSurface = require('famous/surfaces/VideoSurface');
    var EventHandler = require('famous/core/EventHandler');
    var Utility = require('famous/utilities/Utility');
    var DataSource = require('./DataSource');

    var mainContext = Engine.createContext();
    var layout;
    var rc;
    var eh = new EventHandler();
    var vs;
    var ws;
    var nb;
    var artListSVC;
    var vidListSVC;
    var backTarget;
    var ds = new DataSource();
    var articles = ds.getArticles();
    var videos = ds.getVideos();

    function setNavbarBack(state, target) {
        nb.setOptions({
                backContent: (state) ? '&#x25c0;' : ''
        });

        backTarget = target;
    }

    function createLayout() {
        layout = new HeaderFooterLayout({
            headerSize: 75,
            footerSize: 50
        });
        mainContext.add(layout);
    }

    function addHeader() {
        nb = new NavigationBar({
            size: [undefined, 75],
            content: '<i>dW famo.us</i>',
            moreContent: '',
            backContent: '',
            properties: {
                lineHeight: '75px',
                textAlign: 'center'
            }
        });
        layout.header.add(nb);
        eh.subscribe(nb);
        eh.on('back', function() {
            rc.setOptions({
                inTransition: false,
                outTransition: true
            });
            if (backTarget !== undefined)
                rc.show(backTarget);
            setNavbarBack(false, undefined);
        });
    }

    function createVideoSurface() {
        vs = new VideoSurface(
            {
                size: [undefined,undefined],
                autoplay: true
            }
            );

    }
    function createWebSurface() {
        ws = new Surface(
            );
        ws.addClass('mobile-safari-fix');

    }
    function createArticlesList() {
        artListSVC = new ScrollContainer({
            scrollview: {direction: Utility.Direction.Y}
        });
        var lines = [];
        artListSVC.sequenceFrom(lines);

        for (var i in articles)  {
            var surf = new Surface({
                content: '<div class"a-title">' + articles[i].title + '</div><div class="a-desc">' + articles[i].desc + '</div>',
                size: [undefined, 100],
                properties: {
                    itemType: 'article',
                    listIndex: i,
                    textAlign: 'left',
                    color: 'black'
                }
            });
            surf.addClass('article-cell');
            surf.artIdx = i;
            surf.pipe(eh);
            lines.push(surf);
        }
    }

    function createVideosList() {
        vidListSVC = new ScrollContainer({
            scrollview: {direction: Utility.Direction.Y}
        });
        var lines = [];
        vidListSVC.sequenceFrom(lines);

        for (var i in videos)  {
            var surf = new Surface({
                content: '<span class="v-icon"><img src="content/images/' + videos[i].icon + '"></image></span><span class="v-text"><div>' + videos[i].title + '</div><div class="v-desc">' + videos[i].desc + '</div></span>',
                size: [undefined, 80],
                properties: {
                    itemType: 'video',
                    listIndex: i,
                    textAlign: 'left',
                    color: 'black'
                }
            });
            surf.addClass('video-cell');
            surf.pipe(eh);
            lines.push(surf);
        }
    }

    function init() {
        rc.show(artListSVC);
        eh.on('click', function(obj) {
                rc.setOptions(
                {
                    inTransition: true,
                    outTransition: false
                });
                var surfaceProps = obj.origin.getProperties();

                if (surfaceProps.itemType === 'article')   {
                    ws.setContent('<iframe width="100%" height="100%" src="' + articles[surfaceProps.listIndex].url + '"></iframe>');
                    rc.show(ws);
                    setNavbarBack(true, artListSVC);
                }
                else
                {   // video
                    vs.setContent(videos[surfaceProps.listIndex].url);
                    rc.show(vs);
                    setNavbarBack(true, vidListSVC);
                }

        });

    }
    function addContent() {
        rc = new EdgeSwapper({
            overlap: false,
            outTransition: false,
            size:[undefined, undefined]
            });
        layout.content.add(rc);

    }

    function addFooter() {
        var tb = new TabBar({
        });
        layout.footer.add(tb);
        tb.defineSection(0,{content: 'Articles', onClasses: ['tabbuton'], offClasses: ['tabbutoff']});
        tb.defineSection(1,{content: 'Videos', onClasses: ['tabbuton'], offClasses:['tabbutoff']});
        tb.select(0);
        eh.subscribe(tb);
        eh.on('select', function(but) {
            rc.setOptions({
                inTransition: false,
                outTransition: false
            });

          switch (but.id) {
          case 0:
            rc.show(artListSVC);
            break;
          case 1:
            rc.show(vidListSVC);
            break;
          }
          setNavbarBack(false, undefined);
        });

    }

    // setup
    createArticlesList();
    createVideosList();
    createVideoSurface();
    createWebSurface();

    // create layout
    createLayout();
    addHeader();
    addContent();
    addFooter();

    init();

});
