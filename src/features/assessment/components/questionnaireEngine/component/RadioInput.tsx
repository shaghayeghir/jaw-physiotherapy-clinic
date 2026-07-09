export function RadioInput({ options, value, onChange }: any) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option: any) => {
        const selected = value === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`min-h-[60px] rounded-2xl border px-4 py-3 text-right text-sm font-bold transition ${
              selected
                ? "border-[#d59a8f] bg-[#d59a8f] text-white"
                : "border-white/70 bg-white/60 text-[#574b42] hover:border-[#8b9472]"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
