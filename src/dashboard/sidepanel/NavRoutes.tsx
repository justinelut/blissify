import React, { useEffect, useState } from "react";
import Route from "@/dashboard/sidepanel/routes.json"; // Assuming you have a types file for your routes
import { Home } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Route {
  name: string;
  icon: string;
  link: string;
  children?: Route[];
}

const RecursiveRouteRenderer: React.FC = () => {
  const [loadedRoutes, setLoadedRoutes] = useState<Route[]>([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        // Simulate an asynchronous import (replace this with your actual import logic)
        const importedRoutes = await import(
          "@/dashboard/sidepanel/routes.json"
        );
        setLoadedRoutes(importedRoutes.default || importedRoutes);
      } catch (error) {
        console.error("Error loading routes:", error);
      }
    };

    fetchRoutes();
  }, []); 

  const renderRoutes = (routes: Route[] | undefined) => {
    if (!routes || !Array.isArray(routes)) {
      return null; 
    }

    return routes.map((route, index) => (
      <div key={index}>
        <div>
          <div className="flex flex-row justify-start items-center gap-2 text-lg mt-2 hover:text-blue-500">
            <Home size={18} strokeWidth={1.3} />
            <Link to={`${route.link}`}>{route.name}</Link>
          </div>
        </div>
        {/* Check if route has children and it's an array */}
        {route.children &&
          Array.isArray(route.children) &&
          route.children.length > 0 && (
            <div className="ml-6">
              {renderRoutes(route.children)}
            </div>
          )}
      </div>
    ));
  };

  return (
    <div>
      {renderRoutes(loadedRoutes.length > 0 ? loadedRoutes : undefined)}
    </div>
  );
};

export default RecursiveRouteRenderer;
