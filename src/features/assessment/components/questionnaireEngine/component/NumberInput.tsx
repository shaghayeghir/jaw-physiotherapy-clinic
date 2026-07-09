export function NumberInput({ min, max, placeholder, value, onChange }: any) {
  return (
    <input
      type="number"
      min={min}
      max={max}
      placeholder={placeholder}
      value={value ?? ""}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full rounded-2xl border border-white/70 bg-white/65 px-4 py-4 text-right text-base font-bold text-[#302922] outline-none focus:border-[#d59a8f]"
    />
  );
}
