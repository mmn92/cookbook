import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <header className="container">App Title | Links | User(?)</header>
      <Outlet />
    </>
  );
}
