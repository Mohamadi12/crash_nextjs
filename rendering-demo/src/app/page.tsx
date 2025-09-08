import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Home;
