# StarRunner Lite

**StarRunner Lite** is a lightweight game developed in JavaScript, designed to be simple, fast, and fun. The goal is to dodge obstacles while controlling your spaceship and achieving the highest score possible.

---
## Authors

- Katalina Torres
- Anthony Gonzalez
- Julian Ceron

---

## Design Pattern

The project follows a simple modular design, separating game logic into multiple files to facilitate maintenance and scalability.

---
## Features

- Dodge enemies and obstacles
- Score tracking and optional ranking
- Spaceship control with arrow keys
- Modular code structure for easy maintenance
- Works in modern browsers
- Optional local server with Node.js + Express

---

## Technologies Used

- **HTML5** – Game rendering
- **JavaScript** – Game logic
- **Node.js + Express + Kaboom library**  – Local server to serve files

---

## Project Structure

```plaintext
StarRunnerLite/
├── data/                  # Archivos de datos 
├── node_modules/          # Dependencias instaladas con npm
├── src/                   # Código fuente principal
│   ├── core/              # Núcleo del juego
│   ├── data/              # Datos usados por el juego
│   ├── input/             # Adaptadores de entrada
│   ├── player/            # Lógica del jugador
│   ├── services/          # Servicios 
├── .gitignore             # Configuración para Git
├── index.html             # Página principal del juego
├── main.js                # Script raíz
├── package.json           # Dependencias, scripts y metadatos del proyecto
├── README.md              # Documentación principal
└── server.js              # Servidor Node.js para el juego
```
---

##  Prerequisites

Before running the project, make sure you have:

- **Node.js** (required if you want to run a local server)  
- A modern web browser to open `index.html` directly

---

## Configuration

To run the project using a local server with Node.js:

1. **Clone the repository**
```bash
git clone https://github.com/Katalinais/StarRunnerLite.git
```
2. **Navigate to the project folder**
```bash
cd StarRunnerLite
```
3. **Install dependencies**
```bash
npm install nodemon.js
```
4. **Start the server**
```bash
npm run dev
```
5. **Open your browser and go to:**
```arduino
http://localhost:3000
```
---
## How to Run
Follow the Configuration steps above.

## Roles

During the development of the project, the roles were divided in the following way:

- Katalina Torres - Project leader
- Anthony Gonzalez - Developer
- Julian Ceron - Developer



## Conflict during the development

During the development of our project, we ran into a serious issue with our version control process. We were following the GitFlow branching model, which clearly separates the main branch (reserved for production-ready code) from the develop branch (used for ongoing development).

At one point, however, we made a significant mistake: instead of pushing our code updates to develop as planned, we accidentally pushed them straight to main. This broke the GitFlow workflow and could have introduced unstable or untested code into what should always be a stable production branch.

To fix the problem and get back on track, we created a branch called revert-6-development. In that branch, we reverted the changes that had been pushed to main, restoring the branch to its proper state. Once main was clean again, we moved the changes over to develop where they belonged and continued working as usual, following GitFlow correctly.


## Patterns Applied

1. **Adapter:**
In the input folder, we have IInputAdapter.js, KeyboardInputAdapter.js, and SimulatedInputAdapter.js. This setup applies the Adapter pattern by allowing us to easily switch between different input sources without changing the rest of the system. 

2. **Facade:**
The core/GameFacade.js file centralizes the game’s main logic, including methods like start, restart, and saveScore. This is a clear example of the Facade pattern, as it provides a single, simple entry point to interact with the core functionality of the game. 

3. **SOLID:**
The project’s folder structure — with clear separations like controllers, services, repositories, ui, game, and player — shows a strong application of SOLID principles, especially the Single Responsibility Principle (SRP). Each module is responsible for a single well-defined task, which keeps the system clean and modular. This structure also reduces coupling between components.

4. **DIP & IoC:**
The use of files like IScoreRepository.js and IScoreService.js shows that the project relies on interfaces for defining contracts. Combined with concrete implementations like FileScoreRepository.js and HttpScoreService.js, this suggests that Dependency Inversion Principle (DIP) and Inversion of Control (IoC) are applied. 
