import { z } from "zod";

export const listSchema = z.object({
  name: z.string().max(128),
  boardId: z.number().int().positive(),
});
