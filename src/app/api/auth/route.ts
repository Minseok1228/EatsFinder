export async function POST() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_NODE_SERVER}/auth/signup`,
    {
      method: 'POST',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    },
  );
  const data = await res.json();

  return Response.json({ data });
}
