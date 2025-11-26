import type React from "react";
import { Link, useLocation } from "react-router-dom";

export const ActiveLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const location = useLocation();

  return (
    <Link
      className={`${
        location.pathname === href ? "bg-black text-white" : ""
      } flex items-center gap-3 p-3 rounded-2xl`}
      to={href}
    >
      {children}
    </Link>
  );
};
