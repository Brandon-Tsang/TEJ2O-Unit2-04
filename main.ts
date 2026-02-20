/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brandon
 * Created on: Feb 2026
 * This program will show me the temperature.
*/

basic.clearScreen ()
basic.showIcon (IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    let currentTemp = input.temperature();
    basic.showString("The Temperature is: " + convertToText(currentTemp) + " C.")
})
