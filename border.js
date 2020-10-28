class Border{
    constructor(a,b,width,height){
        
        var options = {
            isStatic : true 
        }
        
        
        this.body = Bodies.rectangle(a,b,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);

        
    }

    display(){
        var pos = this.body.position;

        rectMode(CENTER);

        fill("red");

        rect(pos.x,pos.y,this.width,this.height);
    }
}