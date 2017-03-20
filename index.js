function Point(x,y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function(){
	return "(" + this.x + "," + this.y + ")"
}

function Side(length) {
	this.length = length
}

function Shape() {}

Shape.prototype.addToPlane = function(x,y){
	this.position = new Point(x,y)
}

Shape.prototype.move = function(x,y){
	this.position = new Point(x,y)
}


function Circle(radius) {
  Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.area = function (){
	return Math.PI * this.radius^2
}

Circle.prototype.circumference = function (){
	return Math.PI * this.radius * 2
}

Circle.prototype.diameter = function (){
	return this.radius * 2
}

function Polygon(sides) {
	Shape.call(this)
	this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function (){
	let perim = 0
	this.sides.forEach((side) => {
		perim += side.length
	})
	return perim
}

Polygon.prototype.numberOfSides = function() {
	return this.sides.length
}
