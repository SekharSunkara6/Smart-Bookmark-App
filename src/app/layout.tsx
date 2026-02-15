import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Smart Bookmark",
  description: "Private realtime bookmark manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white min-h-screen">
        {children}
         <Toaster position="top-center" />
      </body>
    </html>
  );
}
