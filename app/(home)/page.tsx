"use client"

import { Suspense, useState, lazy } from "react";
import FoodTypeSelector from "../../components/FoodTypeSelector";
import { supabase } from '../../lib/supabaseClient'

const RandomMenuCard = lazy(() => import("../../components/RandomMenuCard")); // ✅ lazy 로딩

type FilterState = {
  main_type: string[];
  meat_type: string[];
  taste: string[];
  cooking_style: string[];
  cuisine: string[];
};

type Menu = {
  id: number;
  name: string;
  cuisine: string;
  main_type: string;
  click_count: number
  // 필요하면 meat_type, taste 등 더 추가
};

export default function Home() {
  const types = {
    MainDish: [
      { label: "밥", value: "rice" },
      { label: "면", value: "noodle" },
      { label: "빵", value: "bread" },
      { label: "국물", value: "soup" },
      { label: "고기", value: "meat" },
      { label: "샐러드", value: "salad" }
    ],

    Meat: [
      { label: "돼지", value: "pork" },
      { label: "소", value: "beef" },
      { label: "닭", value: "chicken" },
      { label: "해산물", value: "seafood" },
      { label: "없음", value: "none" }
    ],

    Taste: [
      { label: "매운", value: "spicy" },
      { label: "담백한", value: "light" },
      { label: "단짠", value: "sweet_salty" },
      { label: "느끼한", value: "greasy" },
      { label: "고소한", value: "savory" }
    ],

    cookingStyle: [
      { label: "구이", value: "grill" },
      { label: "볶음", value: "stir_fry" },
      { label: "튀김", value: "fried" },
      { label: "찜/조림", value: "steamed" },
      { label: "날것", value: "raw" },
      { label: "찌개", value: "stew" },
      { label: "국", value: "simmer" },
      { label: "오븐", value: "baked" }
    ],

    cuisine: [
      { label: "한식", value: "korean" },
      { label: "중식", value: "chinese" },
      { label: "일식", value: "japanese" },
      { label: "양식", value: "western" },
      { label: "아시안", value: "asian" },
      { label: "패스트푸드", value: "fastfood" },
      { label: "분식", value: "snack" }
    ]
  };

  const [menus, setMenus] = useState<Menu[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [randomMenu, setRandomMenu] = useState<Menu | null>(null);
  const [noMenu, setNoMenu] = useState(false)
  const [loading, setLoading] = useState(false);  


  const fetchMenus = async () => {
    let query = supabase.from("menus").select("*");
    setNoMenu(false);
    setShowResult(false); // 이전 결과 잠깐 숨기고
    setLoading(true);  

    (Object.keys(selected) as (keyof FilterState)[]).forEach((key) => {
      if (selected[key].length > 0) query = query.in(key, selected[key]);
    });

    const { data, error } = await query;

    if (error) {
    console.error(error);
  } else {
    setMenus(data ?? []);   // 🔥 여기서 state에 저장

    if (data && data.length > 0 ) {
      const index = Math.floor(Math.random() * data.length);
      setRandomMenu(data[index]); 
      setNoMenu(false);
      setShowResult(true);
    }else{
      setNoMenu(true);
      setShowResult(false);
      setRandomMenu(null);
    }

  }
    setLoading(false); 
  };

  const keyMap: { [key: string]: keyof FilterState } = {
  MainDish: "main_type",
  Meat: "meat_type",
  Taste: "taste",
  cookingStyle: "cooking_style",
  cuisine: "cuisine",
};


const [selected, setSelected] = useState<FilterState>({
  main_type: [],
  meat_type: [],
  taste: [],
  cooking_style: [],
  cuisine: []
})




const updateFilter = (type: keyof FilterState, value: string) => {
  setSelected((prev) => {
    const exists = prev[type].includes(value);

    return {
      ...prev,
      [type]: exists
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value]
    };
  });
};

  return (
    <div className="min-h-screen flex flex-col items-center pt-20 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">밥메추</h1>

      <div
      className="grid gap-10 w-full max-w-6xl p-3
                grid-cols-1
                [@media(min-width:650px)]:grid-cols-2
                [@media(min-width:990px)]:grid-cols-3">
      {Object.entries(types).map(([key, items]) => (
        <FoodTypeSelector 
          key={key} 
          title={key} 
          items={items} 
          onChange={(value) => updateFilter(keyMap[key], value)}
          />
      ))}
      </div>
      
      <button
        onClick={fetchMenus}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
                  px-6 py-2 rounded-lg shadow transition"
      >
        검색 시작
      </button>

     <div className="grid grid-cols-1 gap-4 mt-6 mb-6">
        {loading && <h1>메뉴 가져오는 중...</h1>}

        <Suspense fallback={<h1>매뉴 가져오는 중...</h1>}>
          {showResult && randomMenu && (
            <RandomMenuCard menu={randomMenu} />
          )}
        </Suspense>

          {noMenu &&(
            <p className="text-center text-gray-600 mt-5">조건에 맞는 메뉴가 없습니다. 필터를 다시 선택해주세요.</p>
          )}
      </div>
    </div>
  );
}
