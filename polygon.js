class polygon extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("polygon.png");
      this.height=50
      this.width=50
    }
  
    display() {
   // this.body.position.x = mouseX;
   //  this.body.position.y = mouseY;
      super.display();
    }
  }