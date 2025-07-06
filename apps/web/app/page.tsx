import { prisma } from "@repo/db/client";

export default async function Home() {
  const user = await prisma.user.findFirst();
  return (
    <div>
      <h1>Username : {user?.username}</h1>
      <p>Password : {user?.password}</p>
    </div>
  );
}