import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "./label";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  error?: any;
  // Icon?: React.ReactNode;
  // onIconClick?: () => void;
  // IconPosition?: string;
  showEye?: boolean;
}
function Input({
  className,
  type = "text",
  label = null,
  error = "",
  // Icon = null,
  // IconPosition = 'right-0 inset-y-0 pr-2',
  // onIconClick,
  ...props
}: InputProps) {  return (
    <div className="flex flex-col gap-1.5 w-full">
      {(label || error) && (
        <div className="flex items-center justify-between">
          {error ? (
            <span className="text-xs text-destructive">{error}</span>
          ) : (
            <Label>{label}</Label>
          )}
        </div>
      )}
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
    </div>
  )
}

export { Input }
