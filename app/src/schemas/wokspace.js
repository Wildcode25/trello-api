import { z } from "zod";

export const workspaceSchema = z.object({
  name: z.string().max(64),
})
