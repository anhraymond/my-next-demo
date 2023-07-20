export default async function page() {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh",
    {
      next: {
        revalidate: 5,
      },
    }
  );

  const data = await res.json();
  return (
    <div>
      <h1>{data.datetime}</h1>
    </div>
  );
}
