//* Type Anotations
var n;
var b;
var s;
var a;
var array = [1, 2, 3];
//*Enums
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
;
var backgroundColor = Colors.Red;
