function getNeighbors(row, col, graph) {

  // Check top

  // Check bottom

  // Check left

  // Check right

  // Return neighbors

  // Your code here
  const neighbors = [];

  if (row > 0 && graph[row - 1][col] === 1) {
    const top = [row - 1, col];
    neighbors.push(top);
  }

  if (col > 0 && graph[row][col - 1] === 1) {
    const left = [row, col - 1];
    neighbors.push(left);
  }

  if (row < graph.length - 1 && graph[row + 1][col] === 1) {
    const bottom = [row + 1, col];
    neighbors.push(bottom);
  }

  if (col < graph.length - 1 && graph[row][col + 1] === 1) {
    const right = [row, col + 1];
    neighbors.push(right);
  }

  return neighbors;
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
  const start = [row, col];
  const queue = [[start]];
  const visited = new Set([start.join(',')]);
  let size = 1;

  while (queue.length > 0) {
    const currentPath = queue.shift();
    const lastInPath = currentPath[currentPath.length - 1];
    const neighbors = getNeighbors(lastInPath[0], lastInPath[1], graph);

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];

      if (!visited.has(neighbor.join(','))) {
        visited.add(neighbor.join(','));
        const path = [...currentPath, neighbor];
        queue.push(path);
        size++
      }
    }
  }

  return size;
}

module.exports = [getNeighbors, islandSize];