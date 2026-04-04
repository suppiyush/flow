import type { Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/client";
import { Toaster } from "sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Provider } from "jotai";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flow",
  description: "Create and share your own automated workflows with Flow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <TRPCReactProvider>
          <NuqsAdapter>
            <Provider>{children}</Provider>
            <Toaster />
          </NuqsAdapter>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
