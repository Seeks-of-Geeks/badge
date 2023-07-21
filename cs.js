function calculateArea() {
  const radius = parseFloat(prompt("Enter the radius of the circle:"));

  if (isNaN(radius) || radius <= 0) {
    console.log("Please enter a valid positive number for the radius.");
    return;
  }

  const area = Math.PI * radius * radius;
  console.log("The area of the circle is: " + area.toFixed(2));
}

calculateArea();
console.log("Hello, World!");
