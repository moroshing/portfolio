import { Skeleton } from "../../components/ui/skeleton";

export default function ContactSkeleton() {
  return (
    <div className="space-y-4 max-w-xl mx-auto">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-10 w-1/2" />
    </div>
  );
}
