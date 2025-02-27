import { CircularLoading } from "@/components/loading";
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center py-6">
      <CircularLoading />
    </div>
  );
};

export default Loading;
