import Link from "next/link";

const Home: React.FC = () => {
  return (
    <section className="relative isolate px-6 lg:px-8 overflow-hidden">
      <section className="absolute inset-0 -z-10">
        <div className="absolute right-1/2 -translate-y-1/2 translate-x-1/2 transform-gpu blur-3xl">
          <div className="aspect-[577/310] w-[36.125rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{ clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)' }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl py-28 relative">
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
          <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{ clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)' }}
          />
        </div>

        <div className="text-center space-y-8">
          <section className="mb-8 flex justify-center">
            <div className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-[1px]">
              <div className="relative rounded-full px-4 py-2 text-sm leading-6 text-gray-300 bg-black/90 backdrop-blur-sm flex items-center gap-2 transition-transform duration-300 group-hover:scale-[1.02]">
                <span className="inline-block w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                <span>Announcing our next release</span>
                <Link href="/announcement" className="inline-flex items-center font-semibold text-indigo-400 hover:text-indigo-300 ml-2">
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-indigo-400 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                    Read more
                  </span>
                  <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </section>
          <div className="relative">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text relative z-10 animate-fade-in">
              Build Beautiful UI Components with Nexium
            </h1>
          </div>

          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            A modern, accessible, and customizable UI component library for React applications.
            Build stunning interfaces faster with our pre-built components.
          </p>

          <section className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/docs/components"
              className="group relative rounded-lg px-6 py-3 text-sm font-semibold hover:bg-indigo-500 hover:text-white text-black shadow-sm bg-white   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-all duration-300"
            >
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur group-hover:opacity-50 transition-opacity duration-300" />
              <span className="relative">Browse Components</span>
            </Link>
            <Link href="/docs" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors group">
              Learn more <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </section>
        </div>
      </section>
      <div className="absolute top-16 left-16 w-8 h-8 border border-gray-700 rounded-full animate-bounce [animation-delay:0.2s]" />
      <div className="absolute top-32 right-32 w-4 h-4 bg-indigo-500 rounded-full animate-ping [animation-delay:0.4s]" />
      <div className="absolute bottom-16 left-32 w-6 h-6 bg-purple-500 rounded-full animate-pulse [animation-delay:0.6s]" />
    </section>
  );
};

export default Home;
