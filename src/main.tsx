import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Route, Routes, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/darktheme/theme-provider";
import Dashboard from "@/dashboard/index.tsx";
import Properties from "@/dashboard/properties/index.tsx";
import Layout from "@/dashboard/Layout.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout is set as the root layout
    children: [
      { index: true, element: <App /> }, // App component is nested within the Layout
      { path: "dashboard", element: <Dashboard /> },
      { path: "dashboard/properties", element: <Properties /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
