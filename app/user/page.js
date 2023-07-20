import Link from "next/link";

export const metadata = {
  title: "Page List User",
  description: "Page List User",
};

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={`/user/${item.id}`}>
              {item.id} - {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
