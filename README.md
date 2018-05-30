This app is backend only and is made with TypeScript - TypeORM 

## Quickstart:
1. clone this repo
2. cd into /src
3. run yarn install
4. run tsc or tsc -w
5. run node . or nodemon .
6. happy hacking! 👌

### This is the backend for a tic-tac-toe game, and contains the following:

1. A `games` table with model using TypeORM. Each game has an `id`, a `name`, a `color` and `board` field. 
Both the name and color fields are `text` fields, the board field is of type `json`.  
2. Webserver is setup using routing-controllers. There's a `GET /games` endpoint that returns all the games (with envelope)
3. There's a `POST /games` endpoint for which the only input is a name. The created game receives a random color out of these colors: red, blue, green, yellow, magenta. So every new game that gets created is assigned a random color. 
4. There's a `PUT /games/:id`endpoint that allows to overwrite one or more fields of the game. 
5. When a **game is changed** using the PUT endpoint, the app makes sure (validate) that the color is one of these colors: red, blue, green, yellow, magenta
6. When a **game starts**, the app sets the board to an empty board. The board is a two dimensional array that contains three arrays with three times the letter 'o'.

### To do:
- Polish validation and refactor code
