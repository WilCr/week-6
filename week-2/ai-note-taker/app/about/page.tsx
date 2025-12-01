export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            About Tacos
          </h1>
          <div className="max-w-2xl space-y-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <p>
              Tacos are a traditional Mexican dish consisting of a corn or wheat tortilla folded or rolled around a filling. They are one of the most beloved foods in the world, known for their versatility and delicious flavors.
            </p>
            <p>
              Whether you prefer soft or hard shells, beef, chicken, fish, or vegetarian fillings, there's a taco for everyone. From street food stalls in Mexico to gourmet restaurants worldwide, tacos have become a global favorite.
            </p>
            <p>
              The beauty of tacos lies in their simplicity - just a tortilla, your favorite filling, and some fresh toppings like salsa, cilantro, onions, and lime. Simple, delicious, and always satisfying.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

