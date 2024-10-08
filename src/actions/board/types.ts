import { z } from "zod";
import { Board } from "@prisma/client";
import { ActionState } from "@/lib/create-safe-action";
import { CreateBoardSchema } from "./schema";

export type CreateBoardInputType = z.infer<typeof CreateBoardSchema>;
export type CreateBoardReturnType = ActionState<CreateBoardInputType, Board>;
