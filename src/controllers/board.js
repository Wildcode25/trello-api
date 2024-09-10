export class BoardController{
    constructor(BoardModel){
        this.BoardModel = BoardModel
    }

    createBoard = async (req, res)=>{
        const ownerId = res.session.user.id
        try{
            const createdBoard = await this.BoardModel.createBoard({...req.body, ownerId})
            res.json(createdBoard)
        }catch(e){
            console.error(`Error creatting board: ${e.message}`)
        }

    }
    getBoards = async (req, res)=>{
        const {workspaceName} = req.params
        const ownerId = res.session.user.id
        try{
            const gettedBoards = await this.BoardModel.getBoards({workspaceName, ownerId})
            res.json(gettedBoards)
        }catch(e){
            console.error(`Error getting board: ${e.message}`)
        }

    }
}