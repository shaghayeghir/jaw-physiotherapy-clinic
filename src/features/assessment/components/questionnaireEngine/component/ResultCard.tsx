export function ResultCard({ result, onRestart }: any) {
  return (
    <section className="mt-6 rounded-[36px] border border-white/70 bg-white/55 p-6 text-center">
      <h2 className="text-2xl font-black text-[#2e2823]">
        {result.interpretation}
      </h2>

      <p className="mt-3 text-sm text-[#65594f]">{result.message}</p>

      <a
        href="tel:+989132702137"
        className="inline-flex items-center justify-center rounded-2xl bg-[#5f6f52] px-5 py-3 text-white"
      >
        تماس با سپیده مصری پور
      </a>
    </section>
  );
}
