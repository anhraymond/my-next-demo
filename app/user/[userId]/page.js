import { notFound } from "next/navigation";
const page = async ({ params }) => {
  const { userId = 0 } = params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res) {
    return notFound();
  }
  const data = await res.json();

  return (
    <div>
      <h1>{data?.name}</h1>
    </div>
  );
};

export default page;
