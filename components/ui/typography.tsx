import React from "react";
import { cn } from "@/lib/utils";
import {
  typography,
  variantMapping,
  type TypographyVariant,
} from "@/lib/typography";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
  children: React.ReactNode;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant = "p1Primary", as, className, children, ...props }, ref) => {
    // Determine the component to render
    const Component = (as ||
      variantMapping[variant] ||
      "div") as React.ElementType;
    const typographyClasses = typography[variant].className;

    return (
      <Component
        ref={ref}
        className={cn(typographyClasses, className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Typography.displayName = "Typography";
