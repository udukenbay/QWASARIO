const turn = (direction, initDirection) => {
    const directions = ["north", "east", "south", "west"];
    const len = directions.length;
    const initDirectionIndex = directions.indexOf(initDirection);
    const leftIndex = (initDirectionIndex + 1 >= len) ? (len % initDirectionIndex) - 1 : initDirectionIndex + 1;
    const rightIndex = (initDirectionIndex - 1 < 0) ? (len - initDirectionIndex - 1) : initDirectionIndex - 1;
    
    if(direction == "Left")
        return directions[leftIndex];
    else
        return directions[rightIndex];
  }
      
  const move = (pos) => {
    const newPos = { ...pos };
  
    switch (newPos.bearing) {
        case "north":
          newPos.y--;
          break;
        case "south":
          newPos.y++;
          break;
        case "west":
          newPos.x++;
          break;
        case "east":
          newPos.x--;
          break;
    }
  
    return newPos;
  };
  
  
  function my_robot_simulator(str1) {
      var pos = {
          x: 0,
          y: 0,
          bearing: "north",
      };
  
      str1.split('').map((code) => {
          if (code == 'R') {
              pos.bearing = turn("Right", pos.bearing);
          } else if (code == 'L') {
              pos.bearing = turn("Left", pos.bearing);
          } else {
              pos = move(pos);
          }
      })
  
  
      pos.ToString = function dogToString() {
          return `{x: ${this.x}, y: ${this.y}, bearing: '${this.bearing}'}`;
      };
  
      return(pos.ToString());
  }
  