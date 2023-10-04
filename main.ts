/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...
*/

let someVariable: number = 14

basic.clearScreen()

input.onButtonPressed(Button.A, function() {
  basic.showNumber(someVariable)
})
