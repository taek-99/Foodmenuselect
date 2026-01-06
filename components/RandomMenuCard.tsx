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
      <a
        href={`https://map.naver.com/p/search/${menu.name}?c=15.00,0,0,0,dh`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="text-center font-bold text-lg cursor-pointer">
          {menu.name}
        </h3>
      </a>
      {/* 필요하면 서브 정보도 */}
      {/* <p className="text-center text-sm text-gray-500 mt-2">{menu.cuisine}</p> */}
    </div>
  );
}
