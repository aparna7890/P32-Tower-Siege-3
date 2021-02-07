class Slingshot{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            length : 10,
            stiffness : 0.04
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options)
        World.add(world, this.sling)
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position
            var B = this.pointB

            push()
            strokeWeight(5)
            fill("white")
            line(pointA.x, pointA.y, B.x, B.y)
            pop()
        }
    }
}