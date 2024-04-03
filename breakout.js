const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20
const boardWidth = 600
const ballDiameter = 20
const boardHeight = 300
let timerId
let xDirection = 2
let yDirection = 2
const userStart = [230, 357]
let currentPosition = userStart

const ballStart = [270, 397]
let ballCurrentPosition = ballStart
class Block{
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

const blocks = [
    new Block(10, 1000),
    new Block(120, 637),
    new Block(230, 637),
    new Block(340, 637),
    new Block(340, 637),
    new Block(460, 637),
    new Block(10, 580),
    new Block(120, 580),
    new Block(230, 580),
    new Block(340, 580),
    new Block(460, 580),
    new Block(10, 525),
    new Block(120, 525),
    new Block(230, 525),
    new Block(340, 525),
    new Block(460, 525)
]


function addBlocks(){
    
for(let i=0; i<blocks.length; i++){
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = blocks[i].bottomLeft[0] + 'px'
    block.style.bottom = blocks[i].bottomLeft[1] + 'px'
    grid.appendChild(block)
}
}

addBlocks()

const user = document.createElement('div')
user.classList.add('user')
drawUser()
grid.appendChild(user)

function drawUser(){
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] + 'px'
}

function drawBall(){
    ball.style.left = ballCurrentPosition[0] + 'px'
ball.style.bottom = ballCurrentPosition[1] + 'px'
}
function moveUser(e){
    switch(e.key){
       case 'ArrowLeft':
        if (currentPosition[0] > 0){
            currentPosition[0] -=10
            drawUser()
        }
        break;
        case 'ArrowRight':
            if(currentPosition[0] < boardWidth - blockWidth ){
                currentPosition[0] +=10
                drawUser()
            }
            break;
           
    }
}

document.addEventListener('keydown', moveUser)

const ball = document.createElement('div')
ball.classList.add('ball')
ball.style.left = ballCurrentPosition[0] + 'px'
ball.style.bottom = ballCurrentPosition[1] + 'px'
grid.appendChild(ball)

function moveBall(){
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
}

timerId = setInterval(moveBall, 30)

function checkForCollisions(){
    if(ballCurrentPosition[0] >= (boardWidth - ballDiameter) || ballCurrentPosition[1]>=(boardWidth - ballDiameter)){
        changeDirection()
    }
}

function changeDirection(){
      if(xDirection === 2 && yDirection === 2){
        yDirection = -2
        return
      }
      
}
