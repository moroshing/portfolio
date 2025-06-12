import { Skeleton } from "../../components/ui/skeleton";

export default function HeroSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-10 w-3/4" />
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="h-52 w-full rounded-xl" />
    </div>
  );
}
