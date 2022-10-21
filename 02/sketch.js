function setup() {

  createCanvas(windowWidth, windowHeight)
  background('black')



}


let angle = 0
let angleV = 0.00003
let x = 0

function draw() {




  background(0,10)
  translate(40, height/2)

  let y = map(sin(angle), -1, 1, (windowHeight/2)-40, (-windowHeight/2)+40)
  let r = sin(angle) * 200


  for(x = 0 ; x <= width ; x++) {
    if(x%2 == 0){
      fill('red')
      circle(x*100,y,r*1.01)
    } else {
      fill('blue')
      circle(x*100,-y,r*1.01)
    }
    angle += angleV
}
  

}
