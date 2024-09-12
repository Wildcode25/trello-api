import { Router } from "express"
import { WorkspaceController } from "../controllers/workspace.js"
import { craeteCatchedFunction } from "../utils/createCatchedfunction.js"

export const createWorkspaceRouter= (WorkspaceModel)=>{
    const workspaceRouter = new Router()
    const workspaceContoller = new WorkspaceController(WorkspaceModel)

    workspaceRouter.post('/', craeteCatchedFunction(workspaceContoller.createWorkSpace))
    workspaceRouter.get('/', craeteCatchedFunction(workspaceContoller.getWorkspaces))
    return workspaceRouter
}