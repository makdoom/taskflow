import { z } from "zod";

export const CreateBoardSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title is required",
    })
    .min(3, { message: "Title must be atleast 3 characters long" }),
  workspaceId: z.string(),
  gradientId: z.number(),
});
export type CreateBoardType = z.infer<typeof CreateBoardSchema>;
