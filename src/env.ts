import { z } from "zod";
export const env = z.object({});

export const containerEnvSchema = z.object({
  VIRTUAL_HOST: z.string().min(3),
  CF_ENABLE: z.coerce.boolean().refine((value) => value === true),
});