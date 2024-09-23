import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
  const user = true;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <h1 className="text-2xl font-bold">
          Job <span className="text-[#F83002]">Portal</span>
        </h1>
      </div>
      <div className="flex items-center gap-12">
        <ul className="flex font-medium items-center gap-5">
          <li>Home</li>
          <li>Jobs</li>
          <li>Browse</li>
        </ul>
        {!user ? (
          <div className="flex items-center gap-2">
            <Button variant="outline"> Login</Button>
            <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]"> SignUp</Button>
          </div>
        ) : (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="flex gap-2 space-y-2">
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
                <div>
                  <h4 className="font-medium">Riad Islam</h4>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur hic eius voluptatem quidem, aut expedita
                    reprehenderit consequatur minima fugit officia id itaque!
                    Laborum nobis fugiat culpa illo quod cum ullam?
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <User2 />
                  <Button>View Profile</Button>
                </div>
                <div>
                  <LogOut />
                  <Button>Log out</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default Navbar;
