import { createFileRoute, Link } from "@tanstack/react-router";
import { destinations } from "./index";
import { DestinationCard } from "../components/ui/DestinationCard";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/destinations")({
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <div className="min-h-screen bg-muted/30 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">All Destinations</h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Explore our complete collection of hand-picked destinations around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((d, i) => (
            <div key={d.name}>
              <DestinationCard dest={d} index={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
