var radius, pos;
class Bob {

    constructor(x, y, r) {
        
      var options = {
          isStatic:false,
          'restitution':0.9,
          'friction':0.3,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, r/2, options);
      World.add(world, this.body);
      radius = r;
      
    }
    display(){
      fill(200, 0, 200);
      pos =this.body.position;
      strokeWeight(2);
      stroke(0);

      ellipse(pos.x, pos.y, radius, radius);
    }
  };
  