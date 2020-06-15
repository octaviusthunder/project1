var canvas = document.querySelector("canvas"); // canvas var is ‘looking’ for canvas in html
canvas.width = 600;
canvas.height = 500;
var c = canvas.getContext("2d")

//start button
document.getElementById("start").addEventListener("click", function() {
    Ant()
    setInterval(gameloop, 60)
})


// The size of the emoji is set with the font
c.font = "100px serif"
// use these alignment properties for “better” positioning
c.textAlign = "center";
c.textBaseline = "middle";
// draw the emoji
function Ant(y,x,width,height) {
    this.x = x,
      this.y = y,
    this.velocity = 10,
    this.render = function() {
        if(this.y < canvas.height){
		c.fillText('🐜', this.x , this.y)
	 }else{
		 this.velocity = 0
		 this.x = canvas.width / 2
		 this.y = canvas.height - 40
	 }
    }
  }
  var enemy = new Ant(100,100,10,10)
  function gameloop(){
      c.clearRect(0,0,canvas.width,canvas.height)
      enemy.y += enemy.velocity
      c.fillText("🍰", canvas.width / 2, canvas.height - 40)
      enemy.y += enemy.velocity
      enemy.render()

  }