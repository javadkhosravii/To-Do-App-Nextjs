import Nav from "./components/Nav";
import TodoClient from "./components/Todo";

export default function Home() {
  return (
    <main className="flex text-center flex-col gap-32">
      <Nav />
      <h1 className="font-bold text-3xl text-gray-600">
        With each step of improvement, guided by a steadfast plan, hope blossoms
        within.
      </h1>
      <TodoClient />
    </main>
  );
}
