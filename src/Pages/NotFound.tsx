import { HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground px-4 text-center">
      <h1 className="text-[9rem] font-bold tracking-widest text-primary">
        404
      </h1>
      <p className="text-2xl mt-4 text-foreground">Page Not Found</p>
      <p className="mt-2 text-lg max-w-md text-muted-foreground">
        The page you are looking for does not exist. It might have been removed
        or the link is wrong.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 flex items-center justify-center gap-1 py-3 border text-foreground  font-semibold rounded"
      >
        <HomeIcon/>
        Go Home
      </Link>
    </div>
  );
}
