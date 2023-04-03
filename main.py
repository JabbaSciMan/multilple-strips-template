input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        null.clear()
        strip1.clear()
        strip2.clear()
        strip3.clear()
    }
})
input.onButtonPressed(Button.AB, function () {
    strip0.showRainbow(1, 360)
    strip1.showRainbow(1, 360)
    strip2.showRainbow(1, 360)
    strip3.showRainbow(1, 360)
})
input.onButtonPressed(Button.B, function () {
	
})
let strip3: neopixel.Strip = null
let strip2: neopixel.Strip = null
let strip1: neopixel.Strip = null
let strip0: neopixel.Strip = null
let StripNumber = 4
let length = 24
strip0 = neopixel.create(DigitalPin.P0, length, NeoPixelMode.RGB)
strip1 = neopixel.create(DigitalPin.P1, length, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P2, length, NeoPixelMode.RGB)
strip3 = neopixel.create(DigitalPin.P3, length, NeoPixelMode.RGB)
basic.forever(function () {
	
})
