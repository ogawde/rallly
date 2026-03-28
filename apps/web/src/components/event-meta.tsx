import { cn } from "@rallly/ui";
import { OptimizedAvatarImage } from "@/components/optimized-avatar-image";
import TruncatedLinkify from "@/components/poll/truncated-linkify";

export function EventMetaTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h1 className={cn(className, "font-semibold text-xl tracking-tight")}>
      {children}
    </h1>
  );
}

export function EventMetaDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn(
        className,
        "mt-2 min-w-0 whitespace-pre-wrap text-pretty text-sm leading-relaxed",
      )}
    >
      <TruncatedLinkify>{children}</TruncatedLinkify>
    </p>
  );
}

export function EventMetaList({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <ul className={cn(className, "mt-6 space-y-3")}>{children}</ul>;
}

export function EventMetaItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <li
      className={cn(
        className,
        "flex items-center gap-1.5 text-muted-foreground text-sm",
      )}
    >
      {children}
    </li>
  );
}

export function EventMetaHost({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn(className, "mb-2")}>{children}</div>;
}

export const EventMetaHostAvatar = OptimizedAvatarImage;

export function EventMetaHostName({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn(className, "mt-2 font-medium text-gray-500 text-sm")}>
      {children}
    </p>
  );
}
