class Elastic {
    constructor(myBodyA,myPointB) {
        var options = {
            bodyA: myBodyA,
            pointB: myPointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = myPointB;
        this.elastic = Constraint.create(options);
        World.add(world, this.elastic);
    }

    fly(){
        this.elastic.bodyA = null;
    }

    display(){
        if(this.elastic.bodyA){
            var pointA = this.elastic.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(pointA.x, pointA.y,pointB.x, pointB.y);
        }
    }
}