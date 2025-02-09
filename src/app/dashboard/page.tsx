"use client";

import SearchBar from "@/components/SearchBar";
import { usePhotos } from "@/lib/context/PhotosContext";
import { useAuth } from "@/lib/hooks/useAuth";
import { Suspense } from "react";

const Dashboard = () => {
  const { logout } = useAuth();
  const { loading } = usePhotos();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <header className="flex justify-between">
        <h1>Dashboard</h1>
        <button onClick={logout}>Log out</button>
      </header>
      <div className="space-y-4">
        <SearchBar />
      </div>
    </Suspense>
  );
};

export default Dashboard;
