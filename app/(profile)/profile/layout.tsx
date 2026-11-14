import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import ProfileSidebar from "@/components/profile/ProfileSidebar";

import { getCurrentUser } from "@/lib/auth";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

type ProfileLayoutProps = {
  children: ReactNode;
};

export const instant = false;

export default async function ProfileLayout({ children }: ProfileLayoutProps) {
  await connection();

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login");
  }

  const user = {
    name: `${currentUser.profile.firstName} ${currentUser.profile.lastName}`,
    email: currentUser.email,
    avatar: currentUser.profile.avatar ?? "",
  };

  return (
    <>
      <Navbar />

      <div className="pt-20">
        <SidebarProvider className="min-h-[calc(100svh-5rem)]">
          <ProfileSidebar user={user} />

          <SidebarInset className="min-w-0">
            <main className="min-h-[calc(100svh-5rem)] bg-muted/30 p-4 md:p-6">
              <div className="mb-6 flex items-stretch gap-2">
                {/* دکمه سایدبار - فقط موبایل */}
                <div className="flex flex-col gap-2 items-center justify-center shrink-0 items-center md:hidden">
                  <SidebarTrigger className="size-10 rounded-xl border bg-background" />
									<span className="">پنل کاربری</span>
                </div>

                {/* Welcome Banner */}
                <section className="relative min-w-0 flex-1 h-32 sm:h-40 md:h-48 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/profile-banner.png"
                    alt="Welcome banner"
                    fill
                    priority
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-l from-primary/80 via-primary/30 to-transparent" />

                  <div className="absolute gap-10 md:gap-0 inset-y-0 right-0 flex flex-col justify-center px-3 sm:px-6 md:px-10 text-white">
                    <h1 className="text-xl sm:text-2l md:text-3xl font-bold">
                      سلام {currentUser.profile.firstName} عزیز!
                    </h1>

                    <p className="mt-1 sm:mt-2 text-sm sm:text-md md:text-base text-white/90">
                      به داشبورد حساب کاربری رستا خوش آمدید
                    </p>
                  </div>
                </section>
              </div>

              {/* Mobile Header */}
              {/* <div className="mb-4 flex items-center gap-3 md:hidden">
                <SidebarTrigger className="size-10 rounded-xl border bg-background" />
                <span className="font-bold text-foreground">پنل کاربری</span>
              </div> */}
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </>
  );
}
