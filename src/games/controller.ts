import { JsonController, Get, Param, Put, Body, BodyParam, NotFoundError, Post, HttpCode } from 'routing-controllers'
import Game from './entity'


@JsonController()
export default class GameController {

    @Get('/games')
    async allGames() {
    const games = await Game.find()
    return { games }
    }

    @Get('/games/:id')
    getGame(
      @Param('id') id: number
    ) {
      return Game.findOne(id)
    }

    @Post('/games')
    @HttpCode(201)
    createGame(
        @BodyParam("name") name: string
    ) 
    {
        const colors = ['red', 'blue', 'green', 'yellow', 'magenta']
        let randomColor = colors[Math.floor(Math.random()* colors.length)];
        const defaultBoard = [
            ['o', 'o', 'o'],
            ['o', 'o', 'o'],
            ['o', 'o', 'o']
        ] 

        const game = new Game();
        game.name = name;
        game.color = randomColor;
        game.board = defaultBoard;
    
        return game.save()
    }


    @Put('/games/:id')
    async updateGames(
    @Param('id') id: number,
    @Body() update: Partial<Game>
    ) {
    const game = await Game.findOne(id)
    if (!game) throw new NotFoundError('Game not found!')

    return Game.merge(game, update).save()
    }
}

    