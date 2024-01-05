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
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Signup from "@/dashboard/auth/signup";
import Home from "@/home";


const rootRoute = new RootRoute({
  component: () => (
    <>
       <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});


//home page routes


const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const authRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/accounts/auth/signup",
  component: Signup,
});




//all routes that are under dashboard

const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "dashboard",
  component: () => (
    <>
       <Layout />
    </>
  ),
});

const propertiesRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: "properties",
  component: Properties,
});




const dashboard = dashboardRoute.addChildren([propertiesRoute]) 



const routeTree = rootRoute.addChildren([dashboard, authRoute, homeRoute]);

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
