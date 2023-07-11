// RUN WITH: node index.js

export default class Snake{
  constructor(scene){
    this.scene = scene;
    this.direction = Pasher.Math.Vector2.RIGHT;
    this.body = [];
    
    this.body.push(
      this.scene.add.rectangle(0, 0, 16, 16, 0xff0000).setOrigin(0)
    );
    
    this.body.push(
      this.scene.add.rectangle(0, 0, 16, 16, 0x0000ff).setOrigin(0)
    );

    scene.input.keyboard.on('keydown', e=>{
      this.keydown(e);
    });
  }

  keydown(event){
    console.log(event);
    switch(event.keycode){
      case 37: // left
        this.direction = Phaser.Math.Vector2.LEFT; 
        break;
      case 38: // up
        break;
        this.direction = Phaser.Math.Vector2.UP; 
       case 39: // right
        break;
        this.direction = Phaser.Math.Vector2.RIGHT; 
       case 40: // down
        break;
        this.direction = Phaser.Math.Vector2.DOWN; 
      
    }
  }

  update(time){
    this.body[0].x += this.direction.x;
    this.body[0].y += this.direction.y;
  }
}