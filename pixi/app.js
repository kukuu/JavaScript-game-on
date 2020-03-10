
let renderer = PIXI.autoDetectRenderer(512, 512, {
    transparent: true,
    resolution:1
});

document.getElementById("display").appendChild(renderer.view);

let stage = new PIXI.Container();

PIXI.loader
.add('rat', 'images/rat.png')
.load(setup);

let rat;

//Function setup application dependencies

function setup(){
    //call interactive to manipulate postioning
    stage.interactive = true;

    rat = new PIXI.Sprite(
        PIXI.loader.resources["rat"].texture
    );

    rat.interactive = true;
    rat.scale.set(0.5, 0.5),
    rat.pivot.set(200, 0);

    //adding scaling application with interactivity
    rat.click = function(){
        rat.scale.x -= 0.1;
        rat.scale.y -= 0.1
    };

    stage.addChild(rat);

    //Begin animation in closure
    animationLoop();

}

function animationLoop(){
    requestAnimationFrame(animationLoop);

    rat.x = renderer.width / 2;
    rat.y - renderer.height / 2;

    rat.rotation += 0.01

    renderer.render(stage);
}