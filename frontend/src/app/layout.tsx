import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Dabang Dashboard",
  description: "Sales Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: "flex" }}>
            <Sidebar />
            <Box
              component="main"
              sx={{ flexGrow: 1, p: 3, backgroundColor: "#F4F7FE" }}
            >
              <Header />
              {children}
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
