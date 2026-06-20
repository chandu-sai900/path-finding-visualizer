
const speedSlider = document.getElementById("speedSlider");
const resetBtn = document.getElementById("resetBtn");
const clearWallsBtn = document.getElementById("clearWallsBtn");

let animationSpeed = 20;

speedSlider.addEventListener("input", function () {
    animationSpeed = parseInt(speedSlider.value);
});
const algoSelect = document.getElementById("algoSelect");
let startCell = null;
let endCell = null;

let startPlaced = false;
let endPlaced = false;

const grid = document.getElementById("grid");
const startBtn = document.getElementById("startBtn");

let gridArray = [];

/* ---------------- GRID ---------------- */

for (let row = 0; row < 20; row++) {
    
    let currentRow = [];

    for (let col = 0; col < 20; col++) {

        const cell = document.createElement("div");
        cell.classList.add("cell");

        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.dataset.type = "empty";

        cell.addEventListener("click", function () {

            if (!startPlaced) {
                cell.style.backgroundColor = "green";
                cell.dataset.type = "start";
                startPlaced = true;
                startCell = cell;
            }

            else if (!endPlaced) {
                cell.style.backgroundColor = "red";
                cell.dataset.type = "end";
                endPlaced = true;
                endCell = cell;
            }

            else {
                cell.style.backgroundColor = "black";
                cell.dataset.type = "wall";
            }
        });

        grid.appendChild(cell);
        currentRow.push(cell);
    }

    gridArray.push(currentRow);
    console.log("Grid Created");
console.log(grid.children.length);
}

/* ---------------- DELAY FUNCTION ---------------- */

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function heuristic(row, col) {

    let endRow = parseInt(endCell.dataset.row);
    let endCol = parseInt(endCell.dataset.col);

    return Math.abs(row - endRow) +
           Math.abs(col - endCol);
}

/* ---------------- BFS (ANIMATED) ---------------- */

async function bfs() {

    if (!startCell || !endCell) {
        alert("Place Start and End first!");
        return;
    }

    let queue = [];
    let visited = new Set();
    let parent = {};

    let startRow = parseInt(startCell.dataset.row);
    let startCol = parseInt(startCell.dataset.col);

    queue.push([startRow, startCol]);
    visited.add(startRow + "," + startCol);

    let directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    while (queue.length > 0) {

        let [row, col] = queue.shift();
        let cell = gridArray[row][col];

        if (cell.dataset.type !== "start" &&
            cell.dataset.type !== "end") {

            cell.style.backgroundColor = "blue";
            await sleep(animationSpeed);
        }

        if (
             row === parseInt(endCell.dataset.row) &&
               col === parseInt(endCell.dataset.col)
) {

            drawPath(parent);
            alert("END FOUND 🎉");
            return;
        }

        for (let dir of directions) {

            let newRow = row + dir[0];
            let newCol = col + dir[1];

            if (newRow >= 0 && newRow < 20 &&
                newCol >= 0 && newCol < 20) {

                let neighbor = gridArray[newRow][newCol];
                let key = newRow + "," + newCol;

                if (neighbor.dataset.type === "wall" ||
                    visited.has(key)) {
                    continue;
                }

                queue.push([newRow, newCol]);
                visited.add(key);
                parent[key] = row + "," + col;
            }
        }
    }

    alert("No Path Found");
}
async function dijkstra() {

    alert("Dijkstra Started 🚀");

    let queue = [];
    let visited = new Set();
    let parent = {};

    let startRow = parseInt(startCell.dataset.row);
    let startCol = parseInt(startCell.dataset.col);

    queue.push([startRow, startCol, 0]);

    let directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    while (queue.length > 0) {

        queue.sort((a, b) => a[2] - b[2]);

        let [row, col, cost] = queue.shift();

        let key = row + "," + col;

        if (visited.has(key)) continue;

        visited.add(key);

        let cell = gridArray[row][col];

        if (
            cell.dataset.type !== "start" &&
            cell.dataset.type !== "end"
        ) {
            cell.style.backgroundColor = "purple";
            await sleep(animationSpeed);
        }

        if (
            row === parseInt(endCell.dataset.row) &&
            col === parseInt(endCell.dataset.col)
        ) {
            drawPath(parent);
            alert("END FOUND 🎉");
            return;
        }

        for (let dir of directions) {

            let newRow = row + dir[0];
            let newCol = col + dir[1];

            if (
                newRow >= 0 &&
                newRow < 20 &&
                newCol >= 0 &&
                newCol < 20
            ) {

                let neighbor = gridArray[newRow][newCol];

                if (neighbor.dataset.type === "wall") continue;

                let neighborKey = newRow + "," + newCol;

                if (!visited.has(neighborKey)) {

                    parent[neighborKey] = key;

                    queue.push([
                        newRow,
                        newCol,
                        cost + 1
                    ]);
                }
            }
        }
    }

    alert("No Path Found");
}
async function dfs() {

    let stack = [];
    let visited = new Set();
    let parent = {};

    let startRow = parseInt(startCell.dataset.row);
    let startCol = parseInt(startCell.dataset.col);

    stack.push([startRow, startCol]);

    let directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    while (stack.length > 0) {

        let [row, col] = stack.pop();

        let key = row + "," + col;

        if (visited.has(key)) {
            continue;
        }

        visited.add(key);

        let cell = gridArray[row][col];

        if (
            cell.dataset.type !== "start" &&
            cell.dataset.type !== "end"
        ) {
            cell.style.backgroundColor = "orange";
            await sleep(animationSpeed);
        }

        if (
            row === parseInt(endCell.dataset.row) &&
            col === parseInt(endCell.dataset.col)
        ) {
            drawPath(parent);
            alert("END FOUND 🎉 (DFS)");
            return;
        }

        for (let dir of directions) {

            let newRow = row + dir[0];
            let newCol = col + dir[1];

            if (
                newRow >= 0 &&
                newRow < 20 &&
                newCol >= 0 &&
                newCol < 20
            ) {

                let neighbor = gridArray[newRow][newCol];
                let neighborKey = newRow + "," + newCol;

                if (
                    neighbor.dataset.type === "wall" ||
                    visited.has(neighborKey)
                ) {
                    continue;
                }

                parent[neighborKey] = key;

                stack.push([newRow, newCol]);
            }
        }
    }

    alert("No Path Found");
}
async function aStar() {

    let openList = [];
    let visited = new Set();
    let parent = {};

    let startRow = parseInt(startCell.dataset.row);
    let startCol = parseInt(startCell.dataset.col);

    openList.push([
        startRow,
        startCol,
        0,
        heuristic(startRow, startCol)
    ]);

    let directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    while (openList.length > 0) {

        openList.sort((a, b) => a[3] - b[3]);

        let [row, col, g, f] = openList.shift();

        let key = row + "," + col;

        if (visited.has(key)) {
            continue;
        }

        visited.add(key);

        let cell = gridArray[row][col];

        if (
            cell.dataset.type !== "start" &&
            cell.dataset.type !== "end"
        ) {
            cell.style.backgroundColor = "cyan";
            await sleep(animationSpeed);
        }

        if (
            row === parseInt(endCell.dataset.row) &&
            col === parseInt(endCell.dataset.col)
        ) {
            drawPath(parent);
            alert("END FOUND 🎉 (A*)");
            return;
        }

        for (let dir of directions) {

            let newRow = row + dir[0];
            let newCol = col + dir[1];

            if (
                newRow >= 0 &&
                newRow < 20 &&
                newCol >= 0 &&
                newCol < 20
            ) {

                let neighbor = gridArray[newRow][newCol];

                if (neighbor.dataset.type === "wall") {
                    continue;
                }

                let neighborKey =
                    newRow + "," + newCol;

                if (visited.has(neighborKey)) {
                    continue;
                }

                parent[neighborKey] = key;

                let newG = g + 1;
                let newF =
                    newG +
                    heuristic(newRow, newCol);

                openList.push([
                    newRow,
                    newCol,
                    newG,
                    newF
                ]);
            }
        }
    }

    alert("No Path Found");
}
/* ---------------- SHORTEST PATH ---------------- */

function drawPath(parent) {

    let path = [];

    let endKey = endCell.dataset.row + "," + endCell.dataset.col;

    while (endKey) {
        path.push(endKey);
        endKey = parent[endKey];
    }

    path.reverse();

    for (let i = 0; i < path.length; i++) {

        let [r, c] = path[i].split(",");
        let cell = gridArray[r][c];

        if (cell.dataset.type !== "start" &&
            cell.dataset.type !== "end") {

            cell.style.backgroundColor = "yellow";
        }
    }
}

/* ---------------- RESET FUNCTION ---------------- */

function resetGrid() {

    startCell = null;
    endCell = null;
    startPlaced = false;
    endPlaced = false;

    for (let row of gridArray) {
        for (let cell of row) {
            cell.style.backgroundColor = "";
            cell.dataset.type = "empty";
        }
    }
}

/* ---------------- BUTTON ---------------- */

startBtn.addEventListener("click", function () {

    if (!startCell || !endCell) {
        alert("Place Start and End first!");
        return;
    }

    const selectedAlgo = algoSelect.value;

    if (selectedAlgo === "bfs") {
        bfs();
    }

    else if (selectedAlgo === "dijkstra") {
        dijkstra();
    }
    else if (selectedAlgo === "dfs") {
    dfs();
}
    else if (selectedAlgo === "astar") {
    aStar();
}
});
resetBtn.addEventListener("click", function () {

    startCell = null;
    endCell = null;

    startPlaced = false;
    endPlaced = false;

    for (let row of gridArray) {

        for (let cell of row) {

            cell.style.backgroundColor = "";
            cell.dataset.type = "empty";
        }
    }
});
clearWallsBtn.addEventListener("click", function () {

    for (let row of gridArray) {

        for (let cell of row) {

            if (cell.dataset.type === "wall") {

                cell.style.backgroundColor = "";
                cell.dataset.type = "empty";
            }
        }
    }
});
