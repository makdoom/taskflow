"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { FaTrello } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const routes = [
  {
    id: "1",
    name: "Boards",
    icon: <FaTrello className="size-4 mr-2" />,
    href: "/workspace/boards",
  },
  {
    id: "2",
    name: "Settings",
    icon: <CiSettings className="size-4 mr-2" />,
    href: "/workspace/settings",
  },
];

type WorkspaceItemProp = {
  isExpanded: boolean;
  workspace: { id: string; label: string };
  onExpand: (id: string) => void;
};

const WorkspaceNavItem = ({
  isExpanded,
  workspace,
}: // onExpand,
WorkspaceItemProp) => {
  return (
    <AccordionItem value={workspace.id} className="border-none mb-3">
      <AccordionTrigger
        // onClick={() => onExpand(workspace.id)}
        className={cn(
          "flex items-center p-1.5 gap-x-2 rounded-md transition text-start no-underline hover:no-underline hover:bg-secondary"
          // isExpanded && "bg-secondary"
        )}
      >
        <div className="flex items-center gap-x-3">
          <Avatar className="size-8 rounded-md">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span
            className={cn("text-muted-foreground", isExpanded && "bg-red-500")}
          >
            {workspace.label}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col space-y-1">
        {routes.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            className="text-start font-normal justify-start"
          >
            {item.name}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};
export default WorkspaceNavItem;
