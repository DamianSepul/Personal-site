import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col pt-16 selection:bg-emerald-500/30">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
