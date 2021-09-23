function squareArea(side) {
    return side * side
  }
  
  function triangleArea(base, height) {
    return base * height / 2
  }
  
  function circleArea(radius) {
    return Math.PI * radius * radius
  }
  
  export default {
    squareArea,
    triangleArea,
    circleArea
  }