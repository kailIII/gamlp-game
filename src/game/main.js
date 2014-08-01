game.module(
    'game.main'
)
.require(
    'engine.core',
    'engine.physics',
    'engine.keyboard',
    'engine.debug',
    'game.assets',
    'game.scenes',
    'game.objects'
)
.body(function() {

game.start(Scene, 1200, 800);

});