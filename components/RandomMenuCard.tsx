"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient"; // Supabase 클라이언트 import

type Menu = {
  id: number;
  name: string;
  cuisine: string;
  main_type: string;
  click_count: number;
};

export default function RandomMenuCard({ menu }: { menu: Menu }) {
  const [clickCount, setClickCount] = useState(menu.click_count); // 초기 클릭 횟수 설정

  // 오늘 기준 7일 전 날짜를 계산하는 함수
  const getWeekStartDate = () => {
    const date = new Date();
    date.setDate(date.getDate() - 7); // 7일 전
    return date.toISOString().split('T')[0]; // YYYY-MM-DD 형식으로 반환
  };

  // 클릭 시 클릭 횟수 증가
  const handleClick = async () => { 
    try {
      // 클릭 횟수 증가 시 최신 상태 값으로 갱신
      const newClickCount = clickCount + 1;

      // Supabase에서 클릭 횟수 증가
      const { error: updateError } = await supabase
        .from("menus")
        .update({ click_count: newClickCount })
        .eq("id", menu.id); // 메뉴 ID로 해당 메뉴 업데이트

      if (updateError) {
        throw new Error(updateError.message); // 클릭 횟수 업데이트 에러 처리
      }

      // rank_menus 테이블에 클릭 횟수 반영
      const { data, error: rankError } = await supabase
        .from("rank_menus")
        .upsert([
          {
            menu_id: menu.id, // 메뉴 id
            click_count: newClickCount, // 증가한 클릭 횟수
            week_start_date: getWeekStartDate(), // 7일 전 날짜를 주의 시작 날짜로 사용
          },
        ]);

      if (rankError) {
        throw new Error(rankError.message); // rank_menus 업데이트 에러 처리
      }

      // 로컬 상태 업데이트
      setClickCount(newClickCount);

      // 성공적으로 업데이트된 데이터 출력
      console.log("Rank data updated:", data);

    } catch (error) {
      console.error("Error updating click count or rank:", error);
    }
  };

  return (
    <div className="border p-4 shadow rounded bg-white mx-auto">
      <a
        href={`https://map.naver.com/p/search/${menu.name}?c=15.00,0,0,0,dh`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick} // 클릭 시 횟수 증가
      >
        <h3 className="text-center font-bold text-lg cursor-pointer">
          {menu.name}
        </h3>
      </a>
      {/* 클릭 횟수 표시 */}
      <p className="text-center text-sm text-gray-500 mt-2">
        클릭 횟수: {clickCount}
      </p>
    </div>
  );
}
