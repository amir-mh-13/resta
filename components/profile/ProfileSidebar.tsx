
"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import {
  LayoutDashboard,
  UserRound,
  CalendarDays,
  Heart,
  Settings,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type ProfileSidebarProps = {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
};

const menuItems = [
  {
    title: "داشبورد",
    url: "/profile",
    icon: LayoutDashboard,
  },
  {
    title: "اطلاعات حساب کاربری",
    url: "/profile/account",
    icon: UserRound,
  },
  {
    title: "رزروهای من",
    url: "/profile/reservations",
    icon: CalendarDays,
  },
  {
    title: "علاقه‌مندی‌ها",
    url: "/profile/favorites",
    icon: Heart,
  },
  {
    title: "تنظیمات حساب",
    url: "/profile/settings",
    icon: Settings,
  },
];

export default function ProfileSidebar({
  user,
}: ProfileSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogout() {
    try {
      setIsLoggingOut(true);
      setErrorMessage("");

      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "خروج از حساب ناموفق بود");
      }

      setLogoutDialogOpen(false);

      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "خطایی در خروج از حساب رخ داده است"
      );
    } finally {
      setIsLoggingOut(false);
    }
  }

  return (
    <>
      <Sidebar
        side="right"
        collapsible="offcanvas"
        className="top-20 !h-[calc(100svh-5rem)]"
      >
        {/* User information */}
        <SidebarHeader className="p-5">
          <div className="flex flex-col items-center gap-3 py-4 text-center">
            <Avatar className="size-24 border border-primary/30">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-primary/10 text-primary text-xl">
                {user.name.slice(0, 1)}
              </AvatarFallback>
            </Avatar>

            <div className="space-y-1">
              <p className="font-bold text-foreground">
                {user.name}
              </p>

              <p className="text-sm text-muted-foreground" dir="ltr">
                {user.email}
              </p>
            </div>
          </div>
        </SidebarHeader>

        {/* Navigation */}
        <SidebarContent className="px-3">
          <SidebarGroup>
            <SidebarMenu className="gap-2">
              {menuItems.map((item) => {
                const isActive =
                  item.url === "/profile"
                    ? pathname === item.url
                    : pathname === item.url ||
                      pathname.startsWith(`${item.url}/`);

                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      isActive={isActive}
                      onClick={() => router.push(item.url)}
                      className="h-12 rounded-xl px-4 text-sm font-medium cursor-pointer
                        hover:bg-primary/5 hover:text-primary
                        data-[active=true]:bg-primary/10
                        data-[active=true]:text-primary
                        data-[active=true]:font-bold"
                    >
                      <Icon className="size-5" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        {/* Logout */}
        <SidebarFooter className="p-4">
          <div className="border-t pt-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => {
                    setErrorMessage("");
                    setLogoutDialogOpen(true);
                  }}
                  className="h-12 rounded-xl px-4 text-sm font-medium cursor-pointer
                    text-destructive hover:bg-destructive/5
                    hover:text-destructive"
                >
                  <LogOut className="size-5" />
                  <span>خروج از حساب</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </div>
        </SidebarFooter>
      </Sidebar>

      {/* Logout confirmation */}
      <AlertDialog
        open={logoutDialogOpen}
        onOpenChange={(open) => {
          if (!isLoggingOut) {
            setLogoutDialogOpen(open);
          }
        }}
      >
        <AlertDialogContent dir="rtl" className="rounded-2xl sm:max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>
              خروج از حساب کاربری
            </AlertDialogTitle>

            <AlertDialogDescription>
              آیا مطمئنی که می‌خوای از حساب کاربری خودت خارج بشی؟
            </AlertDialogDescription>
          </AlertDialogHeader>

          {errorMessage && (
            <p className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
              {errorMessage}
            </p>
          )}

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoggingOut}>
              انصراف
            </AlertDialogCancel>

            <AlertDialogAction
              disabled={isLoggingOut}
              onClick={(event) => {
                event.preventDefault();
                void handleLogout();
              }}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isLoggingOut ? "در حال خروج..." : "بله، خارج شو"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
