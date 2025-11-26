// layout/main-layout.tsx
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/layout/app-sidebar';
import { Outlet, Navigate } from 'react-router-dom';
import cookie from 'js-cookie';

export default function Layout() {
  const token = cookie.get('token');
  
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 p-4">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}