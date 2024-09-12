import { z } from "zod";

export const boardSchema = z.object({
  name: z.string().max(128),
  workspaceName: z.string(),
  color: z.string()
});
