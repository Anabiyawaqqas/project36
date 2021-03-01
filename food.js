class Form {
    constructor() {
    this.foodstock=0
    this.image=loadimage("images/Milk.png")
    this.lastfeed
    }
    updatefoodstock(foodstock){
      this.foodstock=foodstock
    }
    getfeedtime(lastfeed){
      this.lastfeed=lastfeed
    }
    deductfood(){
      if(this.foodstock>0){
        this.foodstock=this.foodstock-1
      }
    }
      getfoodstock(){
        return this.foodstock
      }
    

  display(){
  
var x=80,y=100
imageMode(CENTRE)
image(this.image,720,220,70,70)
if(this.foodstock!=0){
for  (var i=0 ;i<this.foodstock;i++){
  if(i%10==0){
    x=80;
    y=y+50;

  }
  image(this.image,x,y,50,50);
  x=x+30
}

}
}
}