import { useEffect, useState, useTransition } from "react";
import { Container } from "react-bootstrap";
import type { FoodItem, Filters, FoodListProps } from "../Types/food";
import { Link } from "react-router-dom";


function FoodList({filters, searchKey}: FoodListProps) {   

    const [isPending, startTransition] = useTransition();
    const [allData, setAllData] = useState<FoodItem[]>([]);
    const [viewData, setViewData] = useState<FoodItem[]>([]);

    const fetch_food = async (): Promise<FoodItem[]> => {
        const response = await fetch('/foodlist.json');
        const data = await response.json()
        return data;
    };

    useEffect(() => {
        startTransition(async () => {
        const data = await fetch_food();
        if (data) {
            setAllData(data);
            return;
        }
        })
    }, [])


    const applyFilters = (data: FoodItem[], f:Filters) => {
        const {
            spicy,
            foodtype,
            riceandnoodle,
            typeofmeat,
            averageprice,
        } = f;

        return data.filter((item) => {
            const okSpicy = spicy.length === 0 || spicy.includes(item.spicy);
            const okFoodType = foodtype.length === 0 || foodtype.includes(item.Category);
            const okRice = riceandnoodle.length === 0 || riceandnoodle.includes(item.rice);
            const okMeat = typeofmeat.length === 0 || typeofmeat.includes(item.meat);
            const okPrice = averageprice.length === 0 || averageprice.includes(item.price);

            return okFoodType && okMeat && okPrice && okRice && okSpicy
        })
    }

    useEffect(() => {
        startTransition(() => {
            const next = applyFilters(allData, filters);
            setViewData(next);
        });
    }, [searchKey]);
    
    return (
        <Container>
            {isPending ? "데이터 불러오는 중..." : 
             viewData.length === 0 ? "조건에 맞는 결과가 없습니다.":
            <ul>
                {viewData.map((f) => (
                    <li key={f.id}>
                        <Link to={`/${f.name}`}>{f.name}</Link>
                    </li>
                ))}
            </ul>
            }
            
        </Container>
    );
}

export default FoodList



