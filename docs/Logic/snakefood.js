

const { onSnake, GrowSnake } = require('./snake');
const { getRandomGridPosition } = require('./Grids');

let snakeFood = GetRandomFoodPos()
const growth_rate = 1;
let count = 0;

//Update the food
function updateFood() {

    if (onSnake(snakeFood)) {
        GrowSnake(growth_rate)
        snakeFood = GetRandomFoodPos()
        count++
        document.getElementById('Score-update').innerHTML = count

    }
    localStorage.setItem('Score', count)
}


//Draw it onto the gameBoard
function drawFood(gameBoard) {
    const food = document.createElement('div')
    //Setting the x and y co-ordinate
    food.style.gridRowStart = snakeFood.y
    food.style.gridColumnStart = snakeFood.x
    food.classList.add('food')
    gameBoard.appendChild(food)
}

//Randomizing the position of the foods generated
function GetRandomFoodPos() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = getRandomGridPosition()
    }
    return newFoodPosition
}


module.exports = {
    updateFood: updateFood,
    drawFood: drawFood
}