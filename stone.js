class Stone{
 constructer (x,y,width,height){
      var options = {
          restitution:0.8 ,
          friction:0.9 ,
          density:13 
      }
      this.width=width ;
      this.height=height ;
      this.body=Bodies.rectangle (x,y,width,height,options);
      World.add(world ,this.body)
 }
      display (){
          var pos = this.body.position
          var angle = this.body.angle 

          push ()
           
          translate(pos.x , pos.y)
          rotate (angle)
          rectMode(CENTER)
          strokeWeight(4)
          stroke("grey")
          fill ("black")

          rect (0,0,this.width,this.height)

          Pop ()
      }
    }
     
     