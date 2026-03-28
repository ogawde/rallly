function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-dvh bg-gray-100 p-8 dark:bg-gray-900">
      <div className="flex h-full gap-6 rounded-2xl border bg-card shadow-sm">
        {children}
      </div>
    </div>
  );
}

function FrameSidebar({ children }: { children: React.ReactNode }) {
  return <aside className="flex w-80 flex-col p-6">{children}</aside>;
}

function FrameContent({ children }: { children: React.ReactNode }) {
  return <main className="flex flex-1 flex-col">{children}</main>;
}

export { Frame, FrameSidebar, FrameContent };
