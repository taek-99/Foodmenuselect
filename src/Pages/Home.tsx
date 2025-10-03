import Category from "../Component/Category";
import TopNavBar from "../Section/TopNavBar"
import { Button } from "react-bootstrap";


function Home(){
    return(
        <div>
            <TopNavBar/>
            <h1>밥메추</h1>
            <Category/>
            <Button variant="primary">
                검색 시작
            </Button>
        </div>
    );
}


export default Home