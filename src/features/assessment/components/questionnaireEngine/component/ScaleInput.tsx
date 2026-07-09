export function ScaleInput({ min, max, step = 1, value, onChange }: any) {
  const currentValue = value ?? min;

  return (
    <div className="rounded-[24px] border border-white/70 bg-white/55 p-5">
      <div className="mb-4 flex items-center justify-between text-sm font-bold text-[#66584d]">
        <span>{min}</span>

        <span className="rounded-full bg-[#d59a8f] px-5 py-2 text-white font-black">
          {currentValue}
        </span>

        <span>{max}</span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#8b9472]"
      />
    </div>
  );
}
