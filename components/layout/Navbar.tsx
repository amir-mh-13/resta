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
  Heart,
  Bell,
} from "lucide-react";
import { Button } from "../ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

import { getCurrentUser } from "@/lib/auth";

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

export default async function Navbar() {
  const currentUser = await getCurrentUser();

  const firstName = currentUser?.profile.firstName ?? "";
  const lastName = currentUser?.profile.lastName ?? "";
  const avatar = currentUser?.profile.avatar ?? "";

  const fullName = `${firstName} ${lastName}`.trim();

  const initials = `${firstName[0] ?? ""}${lastName[0] ?? ""}` || "ر";

  return (
    <nav
      dir="rtl"
      className="fixed z-20 w-full rounded-b-sm px-4 md:px-12 py-4 sm:px-6 lg:px-10 top-0 backdrop-blur-[4px] bg-black/2 lg:backdrop-blur-[2px]"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        {/* Logo */}
        <div className="logo">
          {/*      منوی موبایل         ا*/}
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="default"
                  size="icon-lg"
                  className="bg-primary lg:hidden"
                >
                  <Menu className="size-5" />
                </Button>
              }
            />
            <SheetContent dir="rtl" side="right">
              <SheetHeader>
                <SheetTitle className="text-center">منوی رستا</SheetTitle>
                <SheetDescription>منوی دسترسی به بخش‌های سایت</SheetDescription>
              </SheetHeader>
              <div className="grid flex-1 auto-rows-min gap-6 px-4">
                {/* آیتم‌های منوی موبایل */}
              </div>
              <SheetFooter />
            </SheetContent>
          </Sheet>

          <Link href="/" className="text-3xl px-1">رستا</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center justify-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex gap-1 text-secondary-foreground transition-colors duration-300 hover:text-primary"
            >
              {item.label}
              {item.icon}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-primary origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* Account Actions */}
        <div className="flex items-center gap-2">
          {currentUser ? (
            <>
              {/* Notifications */}
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hidden md:flex items-center justify-center"
                aria-label="اعلان‌ها"
              >
                <Bell className="size-5" />
              </Button>

              {/* Favorites - Desktop */}
              <Link
                href="/profile/favorites"
                className="hidden lg:flex"
                aria-label="علاقه‌مندی‌ها"
              >
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Heart className="size-5" />
                </Button>
              </Link>

              {/* Profile Avatar - Desktop */}
              <Link
                href="/profile"
                className="hidden lg:block"
                aria-label="پنل کاربری"
              >
                <Avatar className="size-12 cursor-pointer">
                  <AvatarImage src={avatar} alt={fullName} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
              </Link>

              {/* Profile Dropdown - Mobile */}
              <div className="lg:hidden flex items-center justify-center gap-4">
                <Link
                  href="/"
                  className="bg-primary text-white md:hidden rounded-full p-2.5"
                >
                  <MessageCircleMore className="size-6.5" />
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full p-1 ml-1"
                      >
                        <Avatar className="size-12">
                          <AvatarImage src={avatar} alt={fullName} />
                          <AvatarFallback>{initials}</AvatarFallback>
                        </Avatar>
                      </Button>
                    }
                  />

                  <DropdownMenuContent dir="rtl" align="end" className="w-52">
                    <DropdownMenuGroup>
                      <DropdownMenuLabel className="text-center text-md">
                        {fullName || "حساب کاربری"}
                      </DropdownMenuLabel>

                      <DropdownMenuItem>
                        <Link
                          href="/profile"
                          className="flex w-full items-center gap-2"
                        >
                          <User className="size-4" />
                          پنل کاربری
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <Link
                          href="/profile/favorites"
                          className="flex w-full items-center gap-2"
                        >
                          <Heart className="size-4" />
                          علاقه‌مندی‌ها
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/profile/favorites"
                          className="flex w-full items-center gap-2"
                        >
                          <Bell className="size-4" />
                          نوتیفکیشن
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </>
          ) : (
            <>
              {/* Login - Desktop */}
              <Link
                href="/login"
                className="hidden lg:flex items-center justify-center gap-2 bg-transparent border-2 text-primary-foreground rounded-xl py-2 px-4.5 transition-colors duration-300 hover:bg-white/30"
              >
                ورود
                <UserRoundPlus className="size-5" />
              </Link>

              {/* Register - Desktop */}
              <Link
                href="/register"
                className="hidden lg:flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl py-2 px-4 transition-colors duration-300 hover:bg-primary/90"
              >
                ثبت نام
                <UserRoundPlus className="size-5" />
              </Link>

              {/* Login & Register - Mobile */}
              <div className="lg:hidden flex gap-1.5">
                <Link
                  href="/"
                  className="bg-primary text-white rounded-full px-3 py-3 flex justify-center items-center"
                >
                  <MessageCircleMore className="size-5" />
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button
                        className="bg-primary text-white rounded-full p-5.5"
                        size="icon"
                      >
                        <User className="size-6" />
                      </Button>
                    }
                  />

                  <DropdownMenuContent dir="rtl" className="w-45" align="end">
                    <DropdownMenuGroup>
                      <DropdownMenuLabel className="text-center text-md">
                        حساب کاربری
                      </DropdownMenuLabel>

                      {/* <DropdownMenuSeparator /> */}

                      <DropdownMenuItem>
                        <Link href="/register" className="w-full">
                          ثبت نام
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <Link href="/login" className="w-full">
                          ورود
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
