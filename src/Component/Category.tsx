import { Container, } from "react-bootstrap";
import ToggleButtons from "./ToggleButtons";
import type { Filters } from "../Types/food";


interface CategoryProps {
  value: Filters;
  onChange: (next: Filters) => void;
}


function Category ({ value, onChange }: CategoryProps) {


    const handleGroupChange =
    <K extends keyof Filters>(key: K) =>
    (val: Filters[K]) => onChange({ ...value, [key]: val });

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
                value={value.foodtype}
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
                value={value.spicy}
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
                    { value: "bread", label: "빵"},
                    { value: "guiter", label: "그 외"},
                ]}
                value={value.riceandnoodle}
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
                value={value.typeofmeat}
                onChange={handleGroupChange("typeofmeat")
                }
                variant="secondary"
            />

            <ToggleButtons
                label="가격대"
                idPrefix="averageprice"
                options={[
                    { value: 9999, label: "만원 이하"},
                    { value: 10000, label: "만원 이상"},
                    { value: 20000, label: "2만원 이상"},
                    { value: 30000, label: "3만원 이상"},
                ]}
                value={value.averageprice}
                onChange={handleGroupChange("averageprice")
                }
                variant="secondary"
            />
        </Container>
    );
}


export default Category