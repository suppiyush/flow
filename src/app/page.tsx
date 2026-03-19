import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { Button } from "@/components/ui/button";
import LogoutButton from "./logout";

const Page = async () => {
  await requireAuth();

  const data = await caller.getUsers();

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      Protected Server Component {JSON.stringify(data)}
      <LogoutButton />
    </div>
  );
};

export default Page;
