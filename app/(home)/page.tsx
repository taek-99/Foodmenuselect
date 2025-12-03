import FoodTypeSelector from "../../components/FoodTypeSelector";

export default function Home() {

  const types = {
    MainDish: [
      { label: "밥", value: "rice" },
      { label: "면", value: "noodle" },
      { label: "빵", value: "bread" }
    ],
    Meat: [
      { label: "돼지", value: "pig" },
      { label: "소", value: "cow" },
      { label: "닭", value: "chicken" }
    ],
    Taste: [
      { label: "매움", value: "spicy" },
      { label: "단짠", value: "sweet_salty" },
      { label: "깔끔", value: "clean" }
    ],
    price: [
      { label: "만원", value: 10000 },
      { label: "2만원", value: 20000 },
      { label: "3만원", value: 30000 }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-20 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">밥메추</h1>

    <div className="grid grid-cols-3 gap-6 w-full max-w-4xl
                sm:grid-cols-3 
                xs:grid-cols-2 
                max-xs:grid-cols-1">
      {Object.entries(types).map(([key, items]) => (
        <FoodTypeSelector key={key} title={key} items={items} />
      ))}
      </div>

      <form className="flex flex-col items-center space-y-4 mt-6">
        <input
          type="text"
          placeholder="먹고 싶은 느낌을 적어보세요"
          className="border border-gray-300 rounded-lg px-4 py-2 w-64 shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
        />

        <input
          type="submit"
          value="오늘의 메뉴는?"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                     px-6 py-2 rounded-lg shadow transition"
        />
      </form>
    </div>
  );
}
