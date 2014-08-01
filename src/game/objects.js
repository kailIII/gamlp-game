game.module(
    'game.objects'
)
.require(
    'engine.sprite'
)
.body(function() {

Player = game.Class.extend({

    init: function() {

        var x = game.system.width / 2;
        var y = 500;

        this.sprite = new game.MovieClip([
            game.Texture.fromImage('media/assets/player/01.png'),
            game.Texture.fromImage('media/assets/player/02.png'),
            game.Texture.fromImage('media/assets/player/03.png'),
            game.Texture.fromImage('media/assets/player/04.png')
        ]);

        this.sprite.position.x = x;
        this.sprite.position.y = y;
        this.sprite.anchor.x = this.sprite.anchor.y = 3;
        this.sprite.animationSpeed = 0.1;
        this.sprite.play();

        game.scene.stage.addChild(this.sprite);
        game.scene.addObject(this);

        this.body = new game.Body({
            position: {x: x, y: y},
            velocityLimit: {x: 100, y: 1000},
            collideAgainst: 0,
            collisionGroup: 1,
        });

        this.body.collide = this.collide.bind(this);
        var shape = new game.Circle(40);
        this.body.addShape(shape);
        game.scene.world.addBody(this.body);

    },

    collide: function() {
        if(!game.scene.ended) {
            var hitEffect = new Hit(100);
            game.scene.gameOver();
            this.body.velocity.y = -200;
        }
        this.body.velocity.x = 0;
        return true;
    },

    update: function() {
        this.sprite.position.x = this.body.position.x;
        this.sprite.position.y = this.body.position.y;
    }

});


}); // Body