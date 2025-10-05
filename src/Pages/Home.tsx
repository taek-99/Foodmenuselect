import { useEffect, useState } from "react";
import Category from "../Component/Category";
import FoodList from "../Component/FoodList";
import TopNavBar from "../Section/TopNavBar"
import { Button } from "react-bootstrap";
import type { Filters } from "../Types/food";

function Home(){
  const [filters, setFilters] = useState<Filters>({
    spicy: [],
    foodtype: [],
    riceandnoodle: [],
    typeofmeat: [],
    averageprice: [],
  });

  const [searchKey, setSearchKey] = useState(0);

    useEffect(() => {
    console.log("현재 선택된 필터:", filters);
  }, [filters]);

    useEffect(() =>{
      console.log("횟수", searchKey)
    }, [searchKey])

    return(
        <div>
            <TopNavBar/>
            <h1>밥메추</h1>
            <Category value={filters} onChange={setFilters}/>
            <Button variant="primary" onClick={() => setSearchKey((prev) => prev + 1)}>
                검색 시작
            </Button>
            <FoodList filters={filters} searchKey={searchKey}/>
        </div>
    );
}


export default Home