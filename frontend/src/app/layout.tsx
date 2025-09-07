import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material/styles";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server"; // Import auth for server-side check
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
  const { userId } = auth(); // Get auth status on the server

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/*// If user is logged in, render the full dashboard layout*/}
            <Box sx={{ display: "flex", height: "100vh" }}>
              <Sidebar />
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  height: "100vh", // Full height container for header + content
                  display: "flex",
                  flexDirection: "column", // Stack header and content vertically
                }}
              >
                <Header />
                <Box
                  sx={{
                    flexGrow: 1, // This box takes all remaining vertical space
                    overflowY: "auto", // ONLY this box will scroll
                    p: 3,
                    backgroundColor: "#F4F7FE",
                  }}
                >
                  {children}
                </Box>
              </Box>
            </Box>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

// import type { Metadata } from "next";
// import { ThemeProvider } from "@mui/material/styles";
// import { theme } from "@/theme/theme";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import Sidebar from "@/components/layout/Sidebar";
// import Header from "@/components/layout/Header";
// import {
//   ClerkProvider,
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs";

// export const metadata: Metadata = {
//   title: "Dabang Dashboard",
//   description: "Sales Dashboard",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body>
//           <ThemeProvider theme={theme}>
//             <CssBaseline />
//             <Box sx={{ display: "flex" }}>
//               <Sidebar />
//               <Box
//                 component="main"
//                 sx={{ flexGrow: 1, p: 3, backgroundColor: "#F4F7FE" }}
//               >
//                 <Header />
//                 {children}
//               </Box>
//             </Box>
//           </ThemeProvider>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }
