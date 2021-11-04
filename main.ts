let B = 0
let Y = 0
let X = 0
lcd1602.setAddress(
lcd1602.I2C_ADDR.addr1
)
lcd1602.set_LCD_Show(lcd1602.visibled.visible)
lcd1602.set_backlight(lcd1602.on_off.on)
lcd1602.putString(
"X",
0,
0
)
lcd1602.putString(
"Y",
5,
0
)
lcd1602.putString(
"B",
10,
0
)
basic.forever(function () {
    X = pins.analogReadPin(AnalogPin.P1)
    Y = pins.analogReadPin(AnalogPin.P0)
    B = pins.analogReadPin(AnalogPin.P2)
    serial.writeValue("X", X)
    serial.writeValue("Y", Y)
    serial.writeValue("B", B)
    lcd1602.putNumber(
    X - 403,
    2,
    0
    )
    lcd1602.putNumber(
    Y - 413,
    7,
    0
    )
    lcd1602.putNumber(
    B - 2,
    12,
    0
    )
    basic.pause(1000)
    lcd1602.clear()
})
