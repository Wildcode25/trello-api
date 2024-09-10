export class WorkspaceController {
  constructor(WorkspaceModel) {
    this.WorkspaceModel = WorkspaceModel;
  }
  createWorkSpace = async (req, res) => {
    const { name } = req.body;
    const userId = res.session.user.id;
    try {
      const createdWorkspace = await this.WorkspaceModel.createWorkspace({
        name,
        userId,
      });
      res.json(createdWorkspace)
    } catch (e) {
      console.error(`error creating workspace: ${e.message}`);
    }
  };
  getWorkspaces = async (req, res)=>{
    const {id} = res.session.user
    console.log(id)
    try{
      const gettedWorkspaces = await this.WorkspaceModel.getWorkspaces({ownerId: id})
      res.json(gettedWorkspaces)
    }catch(e){
      console.error(`Error getting workspaces in controller: ${e.message}`)
    }
  }
}
