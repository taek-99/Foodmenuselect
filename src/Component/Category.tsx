import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import ToggleButtons from "./ToggleButtons";


function Category () {
    const [filters, setFilters] = useState({
        spicy: [],
        cuisine: [],
        foodtype: [],
        riceandnoodle: [],
    })

    const handleGroupChange = (key: any) => (val: any) => {
        setFilters((prev) => ({...prev, [key]: val}));
    }

    return (
        <Container>

            <ToggleButtons
                label="카테고리"
                idPrefix="foodtype"
                options={[
                    { value: "korea", label: "한식"},
                    { value: "japan", label: "일식"},
                    { value: "china", label: "중식"},
                    { value: "usa", label: "양식"},
                ]}
                value={filters.foodtype}
                onChange={handleGroupChange("foodtype")
                }
                variant="secondary"
            />

            <ToggleButtons
                label="맵기"
                idPrefix="spicy"
                options={[
                    { value: "mild", label: "안맵게"},
                    { value: "medium", label: "중간"},
                    { value: "hot", label: "맵게"},
                ]}
                value={filters.spicy}
                onChange={handleGroupChange("spicy")
                }
                variant="secondary"
            />

            <ToggleButtons
                label="주식"
                idPrefix="riceandnoolde"
                options={[
                    { value: "rice", label: "밥"},
                    { value: "noodle", label: "면"},
                    { value: "guiter", label: "그 외"},
                ]}
                value={filters.riceandnoodle}
                onChange={handleGroupChange("riceandnoodle")
                }
                variant="secondary"
            />

            <ToggleButtons
                label="뭔 고기"
                idPrefix="typeofmeat"
                options={[
                    { value: "pig", label: "돼지"},
                    { value: "cow", label: "소"},
                    { value: "chicken", label: "닭"},
                    { value: "meatguiter", label: "기타"},
                    { value: "vegan", label: "고기x"},
                ]}
                value={filters.foodtype}
                onChange={handleGroupChange("foodtype")
                }
                variant="secondary"
            />
        </Container>
    );
}


export default Category