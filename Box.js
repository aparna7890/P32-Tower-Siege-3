class Box{
    constructor(x,y,w,h){
        var options = {
            restitution: 0.5,
            friction: 3
        }
        
        this.Visiblity = 255
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
        World.add(world,this.body);
    }

    score(){
        if(this.Visiblity < 0 && this.Visiblity > -105){
            score++
        }
    }

    display(){
        if(this.body.speed > 0.2){
            rectMode(CENTER);
            rect(this.body.position.x, this.body.position.y, this.width, this.height);
        }
        else{
            World.remove(world, this.body)
            push()
            this.Visiblity = this.Visiblity - 5
            tint(255, this.Visiblity)
            pop()
        }
    }
}