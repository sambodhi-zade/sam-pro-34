class Throw{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.bodyA= Constraint.create(options);
        World.add(world, this.bodyA);
    }

    fly(){
        this.sling.bodyA = null;
    }

      display(){
            var pointA = this.throw.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
    
}
