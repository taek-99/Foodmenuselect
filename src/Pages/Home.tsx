import { useState } from "react";
import Category from "../Component/Category";
import FoodList from "../Component/FoodList";
import TopNavBar from "../Section/TopNavBar"
import { Button, Container } from "react-bootstrap";
import type { Filters } from "../Types/food";
import Main from "../Section/Main";
import "./home.css"


function Home(){
  const [filters, setFilters] = useState<Filters>({
    spicy: [],
    foodtype: [],
    riceandnoodle: [],
    typeofmeat: [],
    averageprice: [],
  });

  const [searchKey, setSearchKey] = useState(0);

    return(
        <Container>
            <TopNavBar/>
            <Main/>
            <Category value={filters} onChange={setFilters}/>
            <Button variant="primary" onClick={() => setSearchKey((prev) => prev + 1)}>
                검색 시작
            </Button>
            <FoodList filters={filters} searchKey={searchKey}/>
        </Container>
    );
}


export default Home