class Rubber {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction': 5,
          'density': 1
           
      }
      
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = 10
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("blue");
      stroke("black")
      strokeWeight(3)
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  }