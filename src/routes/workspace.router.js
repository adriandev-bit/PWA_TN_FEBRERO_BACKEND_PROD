import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import { createWorkspaceController, invteUserToWorkspaceController } from "../controllers/workspace.controller.js"

const workspace_router = Router()

workspace_router.post('/', authMiddleware, createWorkspaceController)

// api/workspaces/ivite/
workspace_router.post('/:workspace_id/invite/:invited_id', authMiddleware, invteUserToWorkspaceController)

export default workspace_router