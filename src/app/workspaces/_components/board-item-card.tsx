"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useDialoge } from "@/hooks/use-dialoge";
import { Board } from "@prisma/client";
import { IoIosAddCircleOutline } from "react-icons/io";
import CreateBoard from "./create-board";
import { cn } from "@/lib/utils";
import { GRADIENTS } from "@/constants/gradients";
import { usePathname, useRouter } from "next/navigation";

type BoardItemCardProp = {
  type: "new" | "redirect";
  board?: Board;
};

const BoardItemCard = ({ type = "new", board }: BoardItemCardProp) => {
  const { isOpen, onOpen, openFor, onClose } = useDialoge();
  const router = useRouter();
  const pathname = usePathname();

  const clickHandler = () => {
    if (type == "new") {
      onOpen("create-new-board");
    } else {
      // Redirect mode
      const workspaceId = pathname.split("/").at(2);
      if (!workspaceId) return;
      router.push(`/workspaces/view/${workspaceId}/${board?.id}`);
    }
  };

  return (
    <>
      <Card
        className="h-[120px] p-0 cursor-pointer bg-primary-foreground hover:bg-transparent rounded-md"
        onClick={clickHandler}
      >
        <CardContent
          className={cn(
            "flex justify-center items-center h-full p-0 rounded-md",
            type === "redirect" &&
              board?.gradientId &&
              `${GRADIENTS[board?.gradientId]} block`
          )}
        >
          {type === "redirect" && board ? (
            <div className="p-3">
              <h3 className="font-medium">{board.title}</h3>
            </div>
          ) : (
            <div className="flex items-center gap-x-2">
              <IoIosAddCircleOutline />
              <h3 className="text-sm font-medium">Create New Board</h3>
            </div>
          )}
        </CardContent>
      </Card>

      {openFor === "create-new-board" && (
        <CreateBoard isOpen={isOpen} onClose={onClose} />
      )}
    </>
  );
};
export default BoardItemCard;
