import Link from "next/link";
import {
  ChevronDown,
  House,
  Menu,
  User,
  Hotel,
  Houses,
  MessageCircleMore,
  UserRoundPlus,
} from "lucide-react";
import { Button } from "../ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  {
    label: "خانه",
    href: "/",
    active: true,
    icon: <House className="size-5" />,
  },
  { label: "رزرو هتل", href: "/hotels", icon: <Hotel className="size-5" /> },
  {
    label: "رزرو اقامتگاه",
    href: "/stays",
    icon: <Houses className="size-5" />,
  },
  {
    label: "پشتیبانی",
    href: "/support",
    icon: <MessageCircleMore className="size-5" />,
  },
];

export default function Navbar() {
  return (
    <nav
      dir="rtl"
      className="fixed z-20 w-full rounded-b-sm px-4 md:px-12 py-4.5 sm:px-6 lg:px-10 top-0 backdrop-blur-[4px] bg-black/2 lg:backdrop-blur-[2px]"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="logo">
          {/* <Button variant="default" size="icon-lg" className="bg-primary "> <Menu className="size-5" /> </Button> */}
          {/* <Button variant="outline" size="icon-lg" className="lg:hidden bg-transparent border-none "> <Menu className="size-5 " /> </Button> */}
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="default"
                  size="icon-lg"
                  className="bg-primary  lg:hidden"
                >
                  {" "}
                  <Menu className="size-5" />{" "}
                </Button>
              }
            />
            <SheetContent dir="rtl" side="right">
              <SheetHeader>
                <SheetTitle className="text-center">منوی رستا</SheetTitle>
                <SheetDescription>
                  اینجا لینک بینک و آپشن هارو واسه موبایل و تبلت میزارم
                </SheetDescription>
              </SheetHeader>
              <div className="grid flex-1 auto-rows-min gap-6 px-4"></div>
              <SheetFooter></SheetFooter>
            </SheetContent>
          </Sheet>

          <span className="text-3xl  px-1">رستا</span>
        </div>

        <div className="hidden lg:flex flex items-center justify-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex gap-1 text-secondary-foreground transition-colors duration-300 hover:text-[#5A4BD1]"
            >
              {item.label}
              {item.icon}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[#6C5CE7] origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <div className="left flex gap-1">
          <Link
            href="/login"
            className="hidden lg:flex items-center justify-center gap-2 bg-transparent border-2  text-primary-foreground rounded-xl py-2  px-4.5 transition-colors duration-300 hover:bg-white/30"
          >
            ورود <UserRoundPlus className="size-5" />
          </Link>
          <Link
            href="/register"
            className="hidden lg:flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl py-2  px-4 transition-colors duration-300 hover:bg-[#5A4BD1]"
          >
            ثبت نام <UserRoundPlus className="size-5" />
          </Link>
          {/* <Link href="/" className="flex items-center justify-center bg-primary text-primary-foreground rounded-lg py-2.5  px-4 transition-colors duration-300 hover:bg-[#5A4BD1]">پنل کاربری <User className="size-5" /></Link> */}
          <div className="mobile lg:hidden flex gap-1">
            <Link href="/" className="bg-primary text-white rounded-full p-2.5">
              {" "}
              <MessageCircleMore className="size-5" />{" "}
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    className="bg-primary text-white rounded-full px-5 py-5"
                    size="icon"
                  >
                    {" "}
                    <User className="size-5" />{" "}
                  </Button>
                }
              />

              <DropdownMenuContent dir="rtl" className="w-45" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="text-lg font-semibold text-foreground text-center">حساب</DropdownMenuLabel>
                  <DropdownMenuItem className="focus:bg-primary/10">
                    <Link className="text-lg w-full" href="register">ثبت نام</Link>
                    {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="login" className="w-full">ورود</Link>
                    {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
