/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useRouter } from "next/router";
import { api } from "~/utils/api";

export default function Home() {
  const router = useRouter();

  const result = api.item.get.useQuery(
    { id: router.query.id as string }, 
    { enabled: !!router.query.id }
  );

  return (
    <main className=" flex flex-col items-center min-h-screen   bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <h1 className="pt-10 text-center pl-4 text-4xl">Item Info</h1>
      <div className=" gap-15 px-4 py-16 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight ">
          name: {result.data?.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          id: {result.data?.id}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          description: {result.data?.description}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          price: ${result.data?.price}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          createdAt: {new Date(result.data?.createdAt ?? "").toLocaleString()}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          updatedAt: {new Date(result.data?.updatedAt ?? "").toLocaleString()}
        </p>
      </div>
    </main>
  );
}
