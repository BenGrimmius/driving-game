var $car = document.querySelector('img');

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 40) {
    $car.className = 'south';
  } else if (event.keyCode === 37) {
    $car.className = 'west';
  } else if (event.keyCode === 38) {
    $car.className = 'north';
  } else if (event.keyCode === 39) {
    $car.className = 'east';
  }
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 32 && $car.className === 'east') {
    $car.className = 'east go-east';
  } else if (event.keyCode === 32 && $car.className === 'south') {
    $car.className = 'south go-south';
  } else if (event.keyCode === 32 && $car.className === 'west') {
    $car.className = 'west go-west';
  } else if (event.keyCode === 32 && $car.className === 'north') {
    $car.className = 'north go-north';
  }
});
