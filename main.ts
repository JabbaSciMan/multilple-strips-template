input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
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
    strip0.clear()
    strip1.clear()
    strip2.clear()
    strip3.clear()
    xPos += 1
    yPos += 1
    if (yPos % StripNumber == 0) {
        strip0.setPixelColor(xPos % length, neopixel.colors(NeoPixelColors.Red))
    } else if (yPos % StripNumber == 1) {
        strip1.setPixelColor(xPos % length, neopixel.colors(NeoPixelColors.Red))
    } else if (yPos % StripNumber == 2) {
        strip2.setPixelColor(xPos % length, neopixel.colors(NeoPixelColors.Red))
    } else if (yPos % StripNumber == 3) {
        strip3.setPixelColor(xPos % length, neopixel.colors(NeoPixelColors.Red))
    } else {
    	
    }
    strip0.show()
    strip1.show()
    strip2.show()
    strip3.show()
})
let strip3: neopixel.Strip = null
let strip2: neopixel.Strip = null
let strip1: neopixel.Strip = null
let strip0: neopixel.Strip = null
let length = 0
let StripNumber = 0
let yPos = 0
let xPos = 0
let index = 0
xPos = 0
yPos = 0
StripNumber = 4
length = 24
strip0 = neopixel.create(DigitalPin.P0, length, NeoPixelMode.RGB)
strip1 = neopixel.create(DigitalPin.P1, length, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P2, length, NeoPixelMode.RGB)
strip3 = neopixel.create(DigitalPin.P3, length, NeoPixelMode.RGB)
basic.forever(function () {
	
})
