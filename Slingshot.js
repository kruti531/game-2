class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sling1.png");
        this.sling2 = loadImage("sling2.png");
        this.sling3 = loadImage("sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body)        
    {
        this.sling.bodyA: body
    }

    display(){
        image(this.sling1, 200,120,50,100);
        image(this.sling2, 170,120,50,100);
       // image(this.sling3, 205,140,20,80);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position; 
            var pointB = this.pointB;
            push();
            //line(pointA.x, pointA.y, pointB.x, pointB.y);

            if(pointA.x<220)    //Sling 3 image to be positioned behind the bird
            {
            strokeWeight(4);        // thickness of the line drawn
            stroke(48,22,8);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
            image(this.sling3, pointA.x-30, pointA.y-15, 15, 30)
            }
            else
            {
                strokeWeight(4);        // thickness of the line drawn
                stroke(48,22,8);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
                image(this.sling3, pointA.x+22, pointA.y-15, 15, 30)
            }
            pop();
        }
    }
    
}
