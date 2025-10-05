import { useEffect, useState } from "react";
import Category from "../Component/Category";
import FoodList from "../Component/FoodList";
import TopNavBar from "../Section/TopNavBar"
import { Button } from "react-bootstrap";

interface Filters {
  spicy: string[];
  foodtype: string[];
  riceandnoodle: string[];
  typeofmeat: string[];
  averageprice: (number | string)[];
}

function Home(){
  const [filters, setFilters] = useState<Filters>({
    spicy: [],
    foodtype: [],
    riceandnoodle: [],
    typeofmeat: [],
    averageprice: [],
  });

  const [searchkey, setSearchKey] = useState(0);

    useEffect(() => {
    console.log("현재 선택된 필터:", filters);
  }, [filters]);

    return(
        <div>
            <TopNavBar/>
            <h1>밥메추</h1>
            <Category value={filters} onChange={setFilters}/>
            <Button variant="primary" onClick={() => setSearchKey((prev) => prev + 1)}>
                검색 시작
            </Button>
            {/* <FoodList filters={filters} searchkey={searchkey}/> */}
        </div>
    );
}


export default Home