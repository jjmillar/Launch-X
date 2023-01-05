document.addEventListener('DOMContentLoaded', () => {

    const userGrid = document.querySelector('.grid-user');
    const cpuGrid = document.querySelector('.grid-cpu');
    const displayGrid = document.querySelector('.grid-display');

    const ships = document.querySelector('.ship');

    const destroyer = document.querySelector('.destroyer-container');
    const submarine = document.querySelector('.submarine-container');
    const crusier = document.querySelector('.crusier-container');
    const battleship = document.querySelector('.battleship-container');
    const carrier = document.querySelector('.carrier-container');

    const startButton = document.querySelector('#start');
    const rotateButton = document.querySelector('#rotate');
    const turnDisplay = document.querySelector('#turn');
    const infoDisplay = document.querySelector('#info');

    const setupButtons = document.getElementById('setup-buttons');

    const width = 10;
    const userSquares = [];
    const cpuSquares = [];

    let isGameOver = false;
    let ready = false;
    let enemyReady = false;
    let allShipsPlaced = false;
    let playerNum = 0;
    let shotsFired = -1;
    let currentPlayer = 'user';
    let isHorizontal = true;

    const shipsArray = [
        {
            name: 'destroyer',
            directions: [
                [0, 1],
                [0, width]
            ]
        },
        {
            name: 'submarine',
            directions: [
                [0, 1, 2],
                [0, width, width * 2]
            ]
        },
        {
            name: 'crusier',
            directions: [
                [0, 1, 2],
                [0, width, width * 2]
            ]
        },
        {
            name: 'battleship',
            directions: [
                [0, 1, 2, 3],
                [0, width, width * 2, width * 3]
            ]
        },
        {
            name: 'battleship',
            directions: [
                [0, 1, 2, 3, 4],
                [0, width, width * 2, width * 3, width * 4]
            ]
        },
    ];

    createBoard(userGrid, userSquares);
    createBoard(cpuGrid, cpuSquares);

    if (gameMode === 'singlePlayer') {
        startSinglePlayer();
    } else {
        startMultiPlayer();
    }

    function createBoard(grid, squares) {
        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div');
            square.dataset.id = i;
            grid.appendChild(square);
            squares.push(square);
        }
    };

    function startSingleplayer() {

    };

    function generar(ship) {
        let randomDirection = Math.floor(Math.random() * ship.directions.length);
        let current = ship.directions [randomDirection];
        if (randomDirection === 0) directions = 1;
        if (randomDirection === 1) directions = 10;

        const isTaken = current.some(index => cpuSquares[index].classList.contains('taken'));

        const isAtRightEdge = current.some(index => (index) % width === width - 1);
        const isAtLightEdge = current.some(index => (index) % width === width - 0);

    };

    function startMultiplayer () {
        const socket = io();

        socket.on('player-number', num => {
            if (num === -1) {
                infoDisplay.innerHTML = "Servidor lleno";
            } else {
                playerNum = parseInt(num);
                if(playerNum === 1) currentPlayer = "enemy";

                console.log(playerNum);

                socket.emit('check-players');
            }
        });

        socket.on('player-connection', num => {
            console.log(`Jugador ${num} se ha conectado`);
            playerisConnected(num);
        });

        socket.on('enemy-ready', num => {
            enemyReady = true;
            playerReady(num);
            if (ready) {
                //playGameMulti(socket);
                setupButtons.style.display = 'none';
            }
        });

        socket.on('check-players', players => {
            players.forEach((p, i) => {
                if (p.connected) playerisConnected(i);
                if (p.ready) {
                    playerReady(i);
                    if (i !== playerReady) enemyReady = true;
                }
            });
        });

        socket.on('timeout', () => {
            infoDisplay.innerHTML = "Te has pasado del tiempo de espera";
        });

        startNutton.addEventListener('click', () => {
            if(allShipsPlaced) {
                console.log("Comienza el juego");
                // playGameMulti(socket);
            } else {
                infoDisplay.innetHTML = "Por favor, coloca TODOS los barcos";
            };
        });

        cpuSquares.forEach(square => {
            square.addEventListener('click', () => {
                if (currentPlayer === 'user' && ready && enemyReady) {
                    shotsFired = square.dataset.id;
                    socket.emit('fire', shotsFired)
                }
            });
        });

        socket.on

    };

    function playerReady(num) {
        let player = `.p${parseInt(num) + 1}`;
        document.querySelector(`${player} .ready`).classList.toggle('active');
    };

    function playerisConnected(num) {
        let player = `.p${parseInt(num) + 1}`;
        document.querySelector(`${player} .connected`).classList.toggle('active');

        if (parseInt(num) === playerNum) 
            document.querySelector(player).style.fontWeight = 'bold';
    };

});