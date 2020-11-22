class Bird{

    constructor (x,y,radius){

        var options = {
            restitution:0.5,
            friction:1
        }

        this.body = Bodies.circle (x,y,radius,options);
        World.add(world,this.body);
        this.radius = radius;

    }

    display(){

        var pos = this.body.position;

        pos.x = mouseX;
        pos.y = mouseY;

        var angle = this.body.angle;
       
        push ();
        
        translate(pos.x,pos.y);
        rotate (angle);
        
        fill ("red");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);

        pop ();
    }


}