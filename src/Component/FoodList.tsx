import { useEffect, useState, useTransition } from "react";
import { Container } from "react-bootstrap";

interface FoodItem {
  id: number;
  name: string;
  Category: string;
  spicy: string;
  rice: string;
  meat: string;
  price: number;
  description: string;
}

interface FoodListProps {
  filters: Filters;
  searchKey: number;
}

function FoodList({filters, searchKey}: FoodListProps) {   

    const [isPending, startTransition] = useTransition();
    const [foodListData, setFoodListData] = useState<FoodItem[]>([]);

    const fetch_food = async (): Promise<FoodItem[]> => {
        const response = await fetch('/foodlist.json');
        const data = await response.json()
        return data;
    };

    useEffect(() => {
        startTransition(async () => {
        const data = await fetch_food();
        if (data) {
            setFoodListData(data);
            return;
        }
        })
    }, [])
    
    return (
        <Container>
            {isPending ? "데이터 불러오는 중..." : foodListData.length}
        </Container>
    );
}

export default FoodList



