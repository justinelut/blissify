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
import HomeLayout from "@/home/homelayout";
import Payments from "@/payments";

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
  component: () => (
    <>
      <HomeLayout>
        <Home />
      </HomeLayout>
    </>
  ),
});

const authRoute = new Route({
  getParentRoute: () => homeRoute,
  path: "accounts/auth/signup",
  component: Signup,
});

const subscribeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "payment/subscribe",
  component: Payments,
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

const indexdashboardRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: "/",
  component: Dashboard,
});

const propertiesRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: "properties",
  component: Properties,
});

const dashboard = dashboardRoute.addChildren([
  indexdashboardRoute,
  propertiesRoute,
]);
const home = homeRoute.addChildren([authRoute]);
const routeTree = rootRoute.addChildren([dashboard, home, subscribeRoute]);

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
