class Dustbin {
    constructor(x,y){
        var dustbin ={
            isStatic: true
            
        }	
    
        this.body = Bodies.rectangle(x,y,150,20,dustbin);
        this.lbody = Bodies.rectangle(x-70,y-40,20,100,dustbin);
        this.rbody = Bodies.rectangle(x+70,y-40,20,100,dustbin);
        this.image=loadImage("dustbingreen.png")
 
   World.add(world,this.body);
   World.add(world,this.lbody);
   World.add(world,this.rbody);
}
display(){
 
 
 
fill("white")  


push();
translate(this.lbody.position.x,this.lbody.position.y);
rotate(this.lbody.angle);
rectMode(CENTER);
rect(0,0,20,100);
pop();

push();
translate(this.rbody.position.x,this.rbody.position.y);
rotate(this.rbody.angle);
rectMode(CENTER);
rect(0,0,20,100);
pop();
push();
translate(this.body.position.x,this.body.position.y);
rotate(this.body.angle);
imageMode(CENTER);
image(this.image,0,0,170,180);
pop();

}


} 

