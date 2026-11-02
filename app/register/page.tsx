"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Heart,
  LockKeyhole,
  Mail,
  MapPin,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-muted/30 md:flex md:items-center md:justify-center md:p-5 lg:p-8">
      {/* Mobile background image (full screen, no overlay on it) */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/images/register-pic.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Main card */}
      <div className="relative z-10 backdrop-blur-[1px] mx-auto grid w-full max-w-7xl overflow-hidden md:min-h-[760px] md:grid-cols-2 md:rounded-3xl md:border md:border-border/60 md:bg-background md:shadow-xl md:shadow-primary/5  login-register-form-enter login-register-form-enter-delay">
        {/* Registration form */}
        <section className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-10 sm:py-12 md:min-h-0 lg:px-14 lg:py-10">
          {/* Glass layer: only on mobile, becomes transparent wrapper on md+ */}
          <div className="w-full max-w-md rounded-3xl border border-white/40 bg-white/55 p-3 shadow-xl shadow-black/10 sm:p-5 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none">
            {/* Login link */}
            <Link
              href="/login"
              className="mb-3 md:mb-6 inline-flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary sm:mb-8 md:mb-10 md:text-muted-foreground"
            >
              <ArrowRight className="size-4" />
              ورود به حساب کاربری
            </Link>

            {/* Heading */}
            <div className="mb-2 md:mb-6 space-y-3 sm:mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
                <UserRound className="size-4" />
                به خانواده رستا بپیوند
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                ثبت‌نام در رستا
              </h1>

              <p className="text-sm leading-7 text-foreground/70 sm:text-base md:text-muted-foreground">
                حساب کاربری خودت رو بساز و برای تجربه‌های جدید آماده شو.
              </p>
            </div>

            <form className="space-y-4 sm:space-y-5">
              {/* Name fields */}
              <div className="grid grid-cols-1 gap-3 md:gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">نام</Label>

                  <div className="relative">
                    <UserRound className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      placeholder="مثلاً علی"
                      className="h-12 rounded-xl bg-background pr-10 focus:border-none"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">نام خانوادگی</Label>

                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    placeholder="مثلاً احمدی"
                    className="h-12 rounded-xl bg-background focus:border-none"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">ایمیل</Label>

                <div className="relative">
                  <Mail className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    dir="ltr"
                    autoComplete="email"
                    placeholder="name@example.com"
                    className="h-12 rounded-xl bg-background pr-10 text-left focus:border-none"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">رمز عبور</Label>

                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    dir="ltr"
                    autoComplete="new-password"
                    placeholder="حداقل ۸ کاراکتر"
                    className="h-12 rounded-xl bg-background px-11 text-left focus:border-none"
                    minLength={8}
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"
                    }
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">تکرار رمز عبور</Label>

                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    dir="ltr"
                    autoComplete="new-password"
                    placeholder="رمز عبور را دوباره وارد کنید"
                    className="h-12 rounded-xl bg-background px-11 text-left focus:border-none"
                    minLength={8}
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    aria-label={
                      showConfirmPassword
                        ? "مخفی کردن تکرار رمز عبور"
                        : "نمایش تکرار رمز عبور"
                    }
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-1 md:gap-3 md:pt-1">
                <Checkbox
                  id="terms"
                  checked={acceptedTerms}
                  onCheckedChange={(checked) =>
                    setAcceptedTerms(checked === true)
                  }
                  className="mt-1 ml-1 bg-background"
                />

                <Label
                  htmlFor="terms"
                  className="flex items-start gap-1 cursor-pointer text-sm font-normal leading-6 text-foreground/70 md:text-muted-foreground"
                >
                  با{" "}
                  <Link
                    href="/terms"
                    className="font-medium whitespace-nowrap text-primary underline-offset-4 hover:underline"
                  >
                    قوانین و مقررات
                  </Link>{" "}
                  و شرایط استفاده از رستا موافقم.
                </Label>
              </div>

              {/* Submit */}
              <Button
                type="button"
                disabled={!acceptedTerms}
                className="h-12 w-full rounded-xl text-base font-semibold shadow-md shadow-primary/15 transition-all hover:shadow-lg  cursor-pointer hover:shadow-primary/20"
              >
                ساخت حساب کاربری
              </Button>

              {/* Footer */}
              <div className="flex items-center gap-4 py-1">
                <div className="h-px flex-1 bg-foreground/15 md:bg-border" />
                <span className="text-xs text-foreground/70 md:text-muted-foreground">
                  قبلاً عضو شدی؟
                </span>
                <div className="h-px flex-1 bg-foreground/15 md:bg-border" />
              </div>

              <p className="text-center text-sm text-foreground/70 md:text-muted-foreground">
                حساب کاربری داری؟{" "}
                <Link
                  href="/login"
                  className="font-semibold text-primary transition-colors hover:underline"
                >
                  وارد شو
                </Link>
              </p>
            </form>
          </div>
        </section>

        {/* ************Desktop image panel*********************** */}
        <section className="relative hidden min-h-full overflow-hidden bg-primary/10 md:block">
          <Image
            src="/images/register-pic.png"
            alt="تراس اقامتگاه با منظره دریا و کوهستان"
            fill
            priority
            sizes="(min-width: 768px) 50vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/20" />

          {/* Brand */}
          <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-3 p-8 text-white lg:p-10">
            <div className="flex size-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur-sm">
              <MapPin className="size-7" />
            </div>

            <div>
              <p className="text-2xl md:text-3xl text-center bg-primary/20 rounded-xl py-0.5 md:py-1 md:px-10 font-bold">رستا</p>
              <p className="mt-1 text-xs text-white/80">
                راهی برای تجربه‌های تازه
              </p>
            </div>
          </div>

          {/* Bottom content */}
          <div className="absolute inset-x-0 bottom-0 z-10 space-y-7 p-8 text-white lg:space-y-8 lg:p-12 xl:p-14">
            <div className="max-w-md space-y-4">
              <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                سفر بعدی از اینجا شروع می‌شه
              </span>

              <h2 className="text-3xl font-bold leading-relaxed xl:text-4xl">
                جایی برای خاطره‌های خوب،
                <br />
                تجربه‌های تازه و آرامش.
              </h2>

              <p className="text-sm leading-7 text-white/80 xl:text-base">
                از اقامتگاه‌های دنج تا مقصدهای دیدنی؛ جای بعدی خودت رو با رستا
                پیدا کن.
              </p>
            </div>

            <div className="grid gap-5 border-t border-white/20 pt-7">
              <div className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm">
                  <ShieldCheck className="size-5" />
                </div>

                <div>
                  <p className="font-semibold">رزرو با خیال راحت</p>
                  <p className="mt-1 text-sm text-white/75">
                    تجربه‌ای ساده و مطمئن
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm">
                  <MapPin className="size-5" />
                </div>

                <div>
                  <p className="font-semibold">مقصدهای متنوع</p>
                  <p className="mt-1 text-sm text-white/75">
                    از شهرهای ایران تا طبیعت بکر
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm">
                  <Heart className="size-5" />
                </div>

                <div>
                  <p className="font-semibold">اقامتگاه مناسب سلیقه تو</p>
                  <p className="mt-1 text-sm text-white/75">
                    برای سفرهایی که به یاد می‌مونن
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}