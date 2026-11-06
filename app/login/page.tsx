"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "@/components/home/ShowupAnimation.module.css";
import FieldError from "@/components/forms/field-error";

import {
  ArrowRight,
  Eye,
  EyeOff,
  Heart,
  LockKeyhole,
  LogIn,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);
    setErrors({});
    setGeneralError("");

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data: {
        message?: string;
        errors?: Record<string, string>;
      } = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setGeneralError(data.message || "ورود ناموفق بود. دوباره تلاش کن.");
        }

        return;
      }

      router.replace("/profile");
    } catch {
      setGeneralError("ارتباط با سرور برقرار نشد. دوباره تلاش کن.");
    } finally {
      setIsLoading(false);
    }
  }

  function clearFieldError(field: string) {
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-muted/30 md:flex md:items-center md:justify-center md:p-5 lg:p-8">
      {/* Mobile background image */}
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
      <div className="relative z-10 backdrop-blur-[1px] mx-auto grid w-full max-w-7xl overflow-hidden md:min-h-[760px] md:grid-cols-2 md:rounded-3xl md:border md:border-border/60 md:bg-background md:shadow-xl md:shadow-primary/5 login-register-form-enter login-register-form-enter-delay">
        {/* Login form */}
        <section className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-10 sm:py-12 md:min-h-0 lg:px-14 lg:py-10">
          {/* Glass layer */}
          <div className="w-full max-w-md rounded-3xl border border-white/40 bg-white/55 p-3 shadow-xl shadow-black/10 sm:p-5 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none">
            {/* Register link */}
            <Link
              href="/register"
              className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary sm:mb-8 md:mb-10 md:text-muted-foreground"
            >
              <ArrowRight className="size-4" />
              ساخت حساب کاربری
            </Link>

            {/* Heading */}
            <div className="mb-2 space-y-3 sm:mb-8 md:mb-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
                {/* <LogIn className="size-4" /> */}
                خوش برگشتی!
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                ورود به رستا
              </h1>

              <p className="text-sm leading-7 text-foreground/70 sm:text-base md:text-muted-foreground">
                برای ادامه مسیر و دسترسی به حساب کاربری خودت وارد شو.
              </p>
            </div>

            {/* Login form */}
            <form
              className="space-y-4 sm:space-y-5"
              noValidate
              onSubmit={handleSubmit}
            >
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
                    onChange={() => clearFieldError("email")}
                    className={
                      errors.email
                        ? "h-12 rounded-xl bg-background pr-10 text-left focus:border-none border-destructive focus-visible:ring-destructive"
                        : "h-12 rounded-xl bg-background pr-10 text-left focus:border-none"
                    }
                    required
                  />
                </div>
                <FieldError message={errors.email} />
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
                    autoComplete="current-password"
                    placeholder="رمز عبور خود را وارد کنید"
                    onChange={() => clearFieldError("password")}
                    className={
                      errors.password
                        ? "h-12 rounded-xl bg-background px-11 text-left focus:border-none border-destructive focus-visible:ring-destructive"
                        : "h-12 rounded-xl bg-background px-11 text-left focus:border-none"
                    }
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

								<FieldError message={errors.password} />
              </div>

              {/* Forgot password */}
              <div className="flex justify-start">
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-primary transition-colors hover:underline"
                >
                  رمز عبورت رو فراموش کردی؟
                </Link>
              </div>

              {generalError && <FieldError message={generalError} />}

              {/* Submit */}
              <Button
                type="submit"
                disabled={isLoading}
                className="h-12 w-full cursor-pointer rounded-xl text-base font-semibold shadow-md shadow-primary/15 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                {isLoading ? "در حال بررسی درخواست..." : "ورود به حساب کاربری"}
              </Button>

              {/* Footer divider */}
              <div className="flex items-center gap-4 py-1">
                <div className="h-px flex-1 bg-foreground/15 md:bg-border" />

                <span className="text-xs text-foreground/70 md:text-muted-foreground">
                  هنوز عضو رستا نشدی؟
                </span>

                <div className="h-px flex-1 bg-foreground/15 md:bg-border" />
              </div>

              {/* Register link */}
              <p className="text-center text-sm text-foreground/70 md:text-muted-foreground">
                حساب کاربری نداری؟{" "}
                <Link
                  href="/register"
                  className="font-semibold text-primary transition-colors hover:underline"
                >
                  ثبت‌نام کن
                </Link>
              </p>
            </form>
          </div>
        </section>

        {/* ***********************Desktop image panel********************** */}
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
              <p className="rounded-xl bg-primary/20 py-0.5 text-center text-2xl font-bold md:px-10 md:py-1 md:text-3xl">
                رستا
              </p>

              <p className="mt-1 text-xs text-white/80">
                راهی برای تجربه‌های تازه
              </p>
            </div>
          </div>

          {/* Bottom content */}
          <div className="absolute inset-x-0 bottom-0 z-10 space-y-7 p-8 text-white lg:space-y-8 lg:p-12 xl:p-14">
            <div className="max-w-md space-y-4">
              <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                دوباره به دنیای سفر برگرد
              </span>

              <h2 className="text-3xl font-bold leading-relaxed xl:text-4xl">
                سفرهای تازه،
                <br />
                خاطره‌های ماندگار و آرامش.
              </h2>

              <p className="text-sm leading-7 text-white/80 xl:text-base">
                وارد حساب کاربری خودت شو و برای تجربه مقصدهای جدید با رستا آماده
                شو.
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
