/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Link from "next/link";
import { api } from "~/utils/api";

export default function Home() {
  const list = api.item.list.useQuery();

  return (
    <main className=" min-h-screen   bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <h1 className="pt-10 text-center pl-4 text-4xl">Items for Sale</h1>
      <div className="container m-auto grid grid-cols-3 gap-8 pt-10">
        {list.data?.map((item) => (
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/item?id=${item.id}`}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              description: {item.description}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              price: ${item.price}
            </p>
            <Link
              href={`/item/${item.id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
