import { forwardRef, type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const control =
  "w-full rounded border border-charcoal-900/12 bg-white/70 px-4 text-[0.9375rem] text-charcoal-900 placeholder:text-slate-400 shadow-[0_1px_2px_rgba(15,18,20,0.04)] transition-colors duration-200 hover:border-charcoal-900/25 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 aria-[invalid=true]:border-red-700/60";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function Input(
  { className, ...props },
  ref,
) {
  return <input ref={ref} className={cn(control, "h-12", className)} {...props} />;
});

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(function Textarea(
  { className, ...props },
  ref,
) {
  return <textarea ref={ref} className={cn(control, "min-h-[140px] py-3", className)} {...props} />;
});

const chevron =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23565f66' stroke-width='1.5'%3E%3Cpath d='m3 4.5 3 3 3-3'/%3E%3C/svg%3E\")";

export const Select =forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(function Select(
  { className, children, ...props },
  ref,
) {
  return (
    <select
      ref={ref}
      className={cn(control, "h-12 appearance-none bg-no-repeat pr-10", className)}
      style={{ backgroundImage: chevron, backgroundSize: "12px", backgroundPosition: "right 1rem center" }}
      {...props}
    >
      {children}
    </select>
  );
});

export function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-charcoal-800">
      {children}
      {required && (
        <span className="ml-0.5 text-brand-600" aria-hidden>
          *
        </span>
      )}
    </label>
  );
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-red-800">
      {message}
    </p>
  );
}
