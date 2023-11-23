input.onGesture(Gesture.Shake, function () {
    if (randint(1, 3) == 3) {
        basic.showLeds(`
            . # . . #
            # # . # .
            . . # . .
            # # . # .
            . # . . #
            `)
        basic.clearScreen()
    } else if (randint(1, 3) == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
    } else if (randint(1, 3) == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.clearScreen()
    }
})
