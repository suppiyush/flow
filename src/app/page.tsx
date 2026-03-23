"use client";

import LogoutButton from "./logout";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Page = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const testAI = useMutation(
    trpc.testAI.mutationOptions({
      onSuccess: () => toast.success("AI Job Queued"),
    }),
  );

  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => toast.success("Job Queued"),
    }),
  );

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center gap-3 justify-center">
      <div>Protected Server Component</div>
      <div>{JSON.stringify(data)}</div>

      <Button disabled={testAI.isPending} onClick={() => testAI.mutate()}>
        Test AI
      </Button>

      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create Workflow
      </Button>
      <LogoutButton />
    </div>
  );
};

export default Page;
