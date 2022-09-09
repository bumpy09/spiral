turtle.setPosition(0, 0)
turtle.turnRight()
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        turtle.forward(4 - index)
        turtle.turnRight()
    }
    for (let index2 = 0; index2 <= 4; index2++) {
        turtle.turnLeft()
        turtle.back(index2)
    }
})
