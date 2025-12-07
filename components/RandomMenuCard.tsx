// app/(경로)/RandomMenuCard.tsx
"use client";

type Menu = {
  id: number;
  name: string;
  cuisine: string;
  main_type: string;
};

export default function RandomMenuCard({ menu }: { menu: Menu }) {
  return (
    <div className="border p-4 shadow rounded bg-white mx-auto">
      <h3 className="text-center font-bold text-lg">{menu.name}</h3>
      {/* 필요하면 서브 정보도 */}
      {/* <p className="text-center text-sm text-gray-500 mt-2">{menu.cuisine}</p> */}
    </div>
  );
}
