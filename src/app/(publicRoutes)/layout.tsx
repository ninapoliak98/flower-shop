import type { Metadata } from "next";
import type { PropsWithChildren } from "react";


export const metadata: Metadata = {
  title: "Flower Home",
  description: "A flower shop",
};

export default function PublicLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <div>
      <h1>Public Layout</h1>
      {children}
    </div>
  );
}
