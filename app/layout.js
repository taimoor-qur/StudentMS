import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Siderbar from "./components/Sidebar";
import Topbar from "./components/Topbar";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ display: "flex", height: "100vh" }}>
        <Siderbar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Topbar />
          <main style={{flex: 1, overflow: "auto", padding: "1rem"}}>
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}
