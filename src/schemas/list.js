import { z } from "zod";

export const listSchema = z.object({
  name: z.string().max(128),
  board_id: z.number().int().positive(),
  color: z.string()  
});
