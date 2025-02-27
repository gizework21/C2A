import { CircularLoading } from "@/components/loading";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen font-bold text-2xl">
      <CircularLoading />
    </div>
  );
}
