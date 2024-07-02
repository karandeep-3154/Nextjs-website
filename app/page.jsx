import Link from "next/link";

export default function Home() {

  const id = 123; // Replace with your actual user ID coming from API call
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Ji from Karandeep</h1>
      <Link href = '/colorbox'>Go to Colorbox Panel</Link>
   <Link href = {`/profile/${id}`}>Go to Admin Panel</Link>
    </main>
  );
}
