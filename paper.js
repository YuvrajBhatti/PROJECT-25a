class paper
{
constructor(x,y,r){

   var options={
       isStatic:false,
       restitution:2,
       friction:0,
       density:1.2

}

this.x=x;
this.y=y;
this.r=r;
this.image=loadImage("paper.png")
this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
}
display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x,paperpos.y);
			imageMode(CENTER)
			strokeWeight(3);
        image(this.image,0,0,this.r,this.r)
			stroke("black");
			//fill("red");
			//draw the ellipse here to display the rubber ball
  
			pop()
	}


} 