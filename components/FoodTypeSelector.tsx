



type Item = {
  label: string;
  value: string;
};

type Props = {
  title: string;
  items: Item[];
  onChange: (value: string) => void;
};




export default function FoodTypeSelector({ title, items, onChange }: Props) {

  const handleCheck = (value) => {
    onChange(value);
  }

  return (
    <div className="flex flex-col items-center space-y-3 mb-10 w-full min-w-[350px]">
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
              onChange={() => handleCheck(item.value)}
            />
            <div
              className="
                w-[100px] h-[40px] border border-gray-300 rounded-lg
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
