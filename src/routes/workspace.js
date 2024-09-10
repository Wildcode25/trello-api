import { Router } from "express"
import { WorkspaceController } from "../controllers/workspace.js"

export const createWorkspaceRouter= (WorkspaceModel)=>{
    const workspaceRouter = new Router()
    const workspaceContoller = new WorkspaceController(WorkspaceModel)

    workspaceRouter.post('/', workspaceContoller.createWorkSpace)
    workspaceRouter.get('/', workspaceContoller.getWorkspaces)
    return workspaceRouter
}