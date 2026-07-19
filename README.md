# 🧭 Path Finding Visualizer

## Overview

The **Path Finding Visualizer** is an interactive web application that demonstrates how popular pathfinding algorithms search for and identify the shortest path between two points on a grid. Users can create obstacles, select different algorithms, and visualize each algorithm's exploration process in real time.

This project was developed to strengthen my understanding of **Data Structures and Algorithms (DSA)** while building an intuitive educational tool using modern web technologies.

---

# Aim

The primary aim of this project is to provide a visual and interactive platform for understanding the working principles of graph traversal and shortest-path algorithms.

The project helps users observe how different algorithms behave under the same conditions and compare their efficiency in finding the destination.

---

# Objectives

* Visualize popular pathfinding algorithms.
* Understand graph traversal techniques.
* Compare algorithm performance.
* Improve problem-solving skills through practical implementation.
* Build an interactive educational tool for DSA learners.
* Strengthen JavaScript programming skills.

---

# Features

* Interactive 20 × 20 grid
* Start and End node selection
* Wall/Obstacle creation
* Breadth First Search (BFS)
* Depth First Search (DFS)
* Dijkstra's Algorithm
* A* Search Algorithm
* Real-time animation
* Shortest path visualization
* Adjustable visualization speed
* Reset Grid functionality
* Clear Walls option
* Responsive Dark Theme interface

---

# Technology Stack

| Category        | Technologies                               |
| --------------- | ------------------------------------------ |
| Frontend        | HTML5, CSS3, JavaScript                    |
| Algorithms      | BFS, DFS, Dijkstra, A*                     |
| Concepts        | Graphs, Queues, Priority Queue, Heuristics |
| Version Control | Git & GitHub                               |

---

# System Architecture

```text
                 User Interface
                       │
                       ▼
          Grid Initialization Module
                       │
                       ▼
          User Interaction Controller
         (Start, End, Walls, Controls)
                       │
                       ▼
          Algorithm Selection Module
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
      BFS            DFS         Dijkstra
                                      │
                                      ▼
                                 A* Search
                       │
                       ▼
          Visualization Engine
                       │
                       ▼
          Shortest Path Animation
```

---

# Project Structure

```text
Path-Finding-Visualizer/
│
├── index.html
├── style.css
├── script.js
├── algorithms/
│   ├── bfs.js
│   ├── dfs.js
│   ├── dijkstra.js
│   └── astar.js
│
├── assets/
│
└── README.md
```

---

# Data Flow

1. The application initializes a 20×20 interactive grid.
2. The user selects a start node and a destination node.
3. Walls or obstacles can be placed anywhere on the grid.
4. The user selects a pathfinding algorithm.
5. The selected algorithm explores neighboring nodes.
6. Each visited node is animated in real time.
7. Once the destination is found, the shortest path is reconstructed.
8. The final path is highlighted for visualization.

---

# Workflow

```text
Start
   │
   ▼
Generate Grid
   │
   ▼
Select Start Node
   │
   ▼
Select End Node
   │
   ▼
Create Obstacles
   │
   ▼
Choose Algorithm
   │
   ▼
Run Visualization
   │
   ▼
Destination Found?
   │         │
  Yes        No
   │          │
   ▼          ▼
Highlight   Continue
Shortest    Searching
Path
```

---

# Supported Algorithms

## Breadth First Search (BFS)

* Explores nodes level by level.
* Guarantees the shortest path in an unweighted graph.

## Depth First Search (DFS)

* Explores one branch completely before backtracking.
* Does not always produce the shortest path.

## Dijkstra's Algorithm

* Finds the shortest path by considering path cost.
* Suitable for weighted graphs.

## A* Search Algorithm

* Uses a heuristic function to guide the search.
* Faster than Dijkstra in many practical scenarios.
* Efficient for game development and navigation systems.

---

# Installation

## Clone Repository

```bash
git clone https://github.com/chandu-sai900/path-finding-visualizer.git
```

## Open Project

Simply open the **index.html** file in your preferred web browser.

No additional installation is required.

---

# Applications

* Learning Data Structures and Algorithms
* Computer Science Education
* Coding Interview Preparation
* Robotics Navigation
* GPS Route Planning
* Game Development
* Artificial Intelligence Path Planning

---

# Challenges Faced

* Implementing smooth animation for algorithm visualization.
* Managing user interaction during execution.
* Optimizing rendering performance.
* Reconstructing the shortest path efficiently.
* Handling obstacle generation dynamically.

---

# Results

* Successfully visualizes four popular pathfinding algorithms.
* Demonstrates the exploration pattern of each algorithm.
* Highlights the shortest path after successful traversal.
* Provides an intuitive educational experience for DSA learners.

---

# Achievements

This project helped me:

* Strengthen my understanding of graph algorithms.
* Apply Data Structures and Algorithms in a real-world application.
* Improve JavaScript programming skills.
* Learn DOM manipulation and event-driven programming.
* Design an interactive and responsive user interface.
* Build a portfolio-ready project demonstrating algorithm visualization.

---

# Learning Outcomes

During this project I gained practical experience in:

* Graph Data Structures
* Breadth First Search (BFS)
* Depth First Search (DFS)
* Dijkstra's Algorithm
* A* Search Algorithm
* JavaScript
* HTML5
* CSS3
* DOM Manipulation
* Algorithm Visualization
* Problem Solving

---

# Future Enhancements

* Weighted node support
* Bidirectional Search
* Greedy Best-First Search
* Maze Generation Algorithms
* Diagonal movement
* Mobile-responsive interface
* Algorithm performance comparison
* Animation statistics panel
* Visited node counter
* Execution time measurement

---

# Conclusion

The **Path Finding Visualizer** demonstrates the practical implementation of graph traversal and shortest-path algorithms through an interactive and user-friendly interface. The project provides a strong foundation for understanding algorithm behavior while improving programming, visualization, and problem-solving skills.

---

# Author

**Nettam Chandu Sai**

**B.Tech Computer Science and Engineering**

### Interests

* Software Development
* Data Structures & Algorithms
* Artificial Intelligence
* Data Engineering
* Computer Vision

⭐ If you found this project useful, consider giving it a star on GitHub.

