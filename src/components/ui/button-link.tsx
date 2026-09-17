import Link from "next/link";
import type { ComponentProps } from "react";
import { Arrow } from "./arrow";

type Props = ComponentProps<typeof Link> & { variant?: "primary" | "secondary"; arrow?: boolean };

export function ButtonLink({ children, className = "", variant = "primary", arrow = true, ...props }: Props) {
  return (
    <Link className={`button button-${variant} ${className}`} {...props}>
      {children}{arrow && <Arrow diagonal />}
    </Link>
  );
}
