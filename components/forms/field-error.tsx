import { AlertCircle } from "lucide-react";

type FieldErrorProps = {
  message?: string;
};

export default function FieldError({ message }: FieldErrorProps) {
  if (!message) return null;

  return (
    <p
      role="alert"
      className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-destructive"
    >
      <AlertCircle className="size-2 sm:size-3.5 shrink-0" />
      {message}
    </p>
  );
}
