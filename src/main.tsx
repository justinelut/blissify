// import React from "react";
// import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/darktheme/theme-provider";
import Dashboard from "@/dashboard/index.tsx";
import Properties from "@/dashboard/properties/index.tsx";
import Layout from "@/dashboard/Layout.tsx";
import "@/globals.css";


import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  Router,
  Route,
  RootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Signup from "@/dashboard/auth/signup";


const rootRoute = new RootRoute({
  component: () => (
    <>
      <Layout />
      <TanStackRouterDevtools />
    </>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/dashboard/properties",
  component: Properties,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

const authRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/accounts/auth",
  component: Signup,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, authRoute]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
}
