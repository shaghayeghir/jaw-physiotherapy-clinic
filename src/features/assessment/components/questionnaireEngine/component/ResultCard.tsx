export function ResultCard({ result, onRestart }: any) {
  return (
    <section className="mt-6 rounded-[36px] border border-white/70 bg-white/55 p-6 text-center">
      <h2 className="text-2xl font-black text-[#2e2823]">
        {result.interpretation}
      </h2>

      <p className="mt-3 text-sm text-[#65594f]">{result.message}</p>

      <button
        onClick={() => {}}
        className="mt-5 rounded-full bg-[#8b9472] px-6 py-3 text-white font-bold"
      >
        تماس با سپیده مصری پور
      </button>
    </section>
  );
}
