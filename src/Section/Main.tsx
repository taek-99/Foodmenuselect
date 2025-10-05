import { Container } from "react-bootstrap";
import foodpicture from "../assets/foodpicture.jpg"
import "./main.css"


function Main() {
    return(
        <Container className="py-0">
            <div className="img-box">
            <img className="img" src={foodpicture} alt="걍 여러 음식 사진임" />
            <h1 className="title">밥메추</h1>
            </div>
        </Container>
    );
}

export default Main