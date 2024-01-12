import { ThemeProvider } from "@/components/darktheme/theme-provider";
import { AnimatePresence } from "framer-motion";
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

import Home from "@/home";
import HomeLayout from "@/home/homelayout";
import Payments from "@/payments";
import SingleProperty from "@/home/singleproperty";
import Login from "@/dashboard/auth/login";
import Signup from "@/dashboard/auth/signup";

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

const signupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/accounts/auth/signup",
  component: Signup,
});
const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/accounts/auth/signin",
  component: Login,
});
const singlePropertyRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/property/id",
  component: SingleProperty,
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

const home = homeRoute.addChildren([]);
const routeTree = rootRoute.addChildren([
  dashboard,
  home,
  subscribeRoute,
  loginRoute,
  signupRoute,
  singlePropertyRoute,
]);

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
      <AnimatePresence>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </AnimatePresence>
    </StrictMode>
  );
}
