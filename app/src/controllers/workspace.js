import { validateData } from "../schemas/validateData.js";
import { CustomizedError } from "../utils/errors.js";
import { workspaceSchema } from "../schemas/wokspace.js";
export class WorkspaceController {
  constructor(WorkspaceModel) {
    this.WorkspaceModel = WorkspaceModel;
  }
  createWorkSpace = async (req, res) => {
    const { name } = req.body;
    const userId = res.session.user.id;
    const { workspaces } = res.session.user;
    const result = validateData({ Schema: workspaceSchema, input: req.body });
    if (!result.success)
      throw new CustomizedError({ message: result.error.message, code: 400 });
    const workspaceIndex = workspaces.findIndex(
      (workspace) => workspace.name === name
    );
    if (workspaceIndex > 0)
      throw new CustomizedError({
        message: "There is a workspace with this name",
        code: 400,
      });
    const createdWorkspace = await this.WorkspaceModel.createWorkspace({
      name,
      userId,
    });
    res.json(createdWorkspace);
  };
  getWorkspaces = async (req, res) => {
    const { id } = res.session.user;
    console.log(id);
    const gettedWorkspaces = await this.WorkspaceModel.getWorkspaces({
      ownerId: id,
    });
    res.json(gettedWorkspaces);
  };
}
