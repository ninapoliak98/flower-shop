import type { PropsWithChildren } from "react";


export default function AdminLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <div>
      <h1>Admin Layout</h1>
      {children}
    </div>
  );
}
