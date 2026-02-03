
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {

  
  return (
    <div className="min-h-screen">
      {/* Header always fixed */}
      <Header  />

      {/* Main content */}
      <main className="relative z-0">{children}</main>
    </div>
  );
}
