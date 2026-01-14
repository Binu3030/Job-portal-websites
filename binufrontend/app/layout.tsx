import React from "react";
import { JobsProvider } from "@/contexts/JobsContext";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <JobsProvider>
          {children}
        </JobsProvider>
      </body>
    </html>
  );
}
