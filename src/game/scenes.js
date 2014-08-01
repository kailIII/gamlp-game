game.module(
    'game.scenes'
)
.require(
    'engine.scene',
    'engine.keyboard'
)
.body(function() {
Scene = game.Scene.extend({
    backgroundColor: 0xfff,
    score: 0,
    cloudSpeedFactor: 1,

    init: function() {
          this.world = new game.World(0,0);
          this.initPlayer();
    },

    initPlayer: function(){
        // Player
        console.log("init scene");
        this.player = new Player(150,150);
    }

});

});