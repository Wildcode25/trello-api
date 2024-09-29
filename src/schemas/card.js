import { z } from "zod";

export const CardSchema = z.object({
  name: z.string().max(64),
  listId: z.number().int().positive(),
});
