export default function FoodTypeSelector({ title, items }) {
  return (
    <div className="flex flex-col items-center space-y-3 mb-6 w-full">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

      <div
        className="
          grid grid-cols-3
          gap-3
          sm:grid-cols-3
          xs:grid-cols-2
          max-xs:grid-cols-1
        "
      >
        {items.map((item) => (
          <label key={item.value} className="cursor-pointer text-center">
            <input
              type="checkbox"
              value={item.value}
              className="peer hidden"
            />
            <div
              className="
                w-[80px] h-[40px] border border-gray-300 rounded-lg
                peer-checked:bg-indigo-600 peer-checked:text-white
                peer-checked:border-indigo-600
                transition flex items-center justify-center text-center
              "
            >
              {item.label}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
