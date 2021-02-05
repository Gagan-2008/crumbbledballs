class Paper {
    constructor(x, y, r) {
      var options = {
          'isStatic':false,
          'density':1.2,
          'friction':0.5,
          'restitution':0.3,
          'gravity':0.0
      }
       
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x,this.y,this.r/2, options);
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
     imageMode(CENTER);
        image(this.image, pos.x, pos.y);
      pop();
    }
  };
  