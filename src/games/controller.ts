import Game from './entity'
import { JsonController, Get} from 'routing-controllers'



@JsonController()
export default class GameController {

    @Get('/games')
    async allGames() {
    const games = await Game.find()
    return { games }
    }
}
//     @Get('/games/:id')
//     getGame(
//       @Param('id') id: number
//     ) {
//       return Game.findOne(id)
//     }

//     @Put('/games/:id')
//     async updateGames(
//     @Param('id') id: number,
//     @Body() update: Partial<Game>
//     ) {
//     const game = await Product.findOne(id)
//     if (!game) throw new NotFoundError('Game not found!')

//     return Game.merge(game, update).save()
//     }


//     @Post('/games')
//     @HttpCode(201)
//     createGame(
//         @Body() game: Game
//     ) {
//         return game.save()
//     }
// }


//=======================================================


// @JsonController()
// export default class PageController {

//     @Get('/pages/:id')
//     getPage(
//     @Param('id') id: number
//     ) {
//         return Page.findOneById(id)
//     }

//     @Get('/pages')
//     async allPages() {
//     const pages = await Page.find()
//     return { pages }
//     }

//     @Put('/pages/:id')
//     async updatePage(
//     @Param('id') id: number,
//     @Body() update: Partial<Page>
//     ) {
//     const page = await Page.findOneById(id)
//     if (!page) throw new NotFoundError('Cannot find page')

//     return Page.merge(page, update).save()
// }

//     @Post('/pages')
//     @HttpCode(201)
//     createPage(
//     @Body() page: Page
//     ) {
//     return page.save()
//     }
// } 
    
// =====================================================


// @JsonController()
// export default class UserController {

//     @Get('/users/:id')
//     getUser(
//     @Param('id') id: number
//     ) {
//         return User.findOneById(id)
//     }

//     @Get('/users')
//     async allUsers() {
//     const users = await User.find()
//     return { users }
//     }

//     @Put('/users/:id')
//     async updateuser(
//     @Param('id') id: number,
//     @Body() update: Partial<User>
//     ) {
//     const user = await User.findOneById(id)
//     if (!user) throw new NotFoundError('Cannot find User')

//     return User.merge(user, update).save()
//     }

//     @Post('/users')
//     async createUser(
//     @Body() user: User
//     ) {
//     const {password, ...rest} = user
//     const entity = User.create(rest)
//     await entity.setPassword(password)
//     return entity.save()
//     }
// } 