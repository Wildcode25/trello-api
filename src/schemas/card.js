import { z } from "zod";

const cardSchema = z.object({
  name: z.string().max(64),
  list_id: z.number().int().positive(),
});
