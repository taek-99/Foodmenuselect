import { Container, Form, Navbar, Button } from "react-bootstrap";
import TopNavBar from "../Section/TopNavBar";
import Main from "../Section/Main";
import { useForm } from "react-hook-form";


function Login() {
    const {
    register,
    handleSubmit,
    } = useForm()

    const onSubmit = (data: any) => console.log(data)

    return(
        <Container>
            <TopNavBar/>
            <Main/>
            <h1>로그인 페이지</h1>
            <div>
            <Navbar/>
            <Form onSubmit={handleSubmit(onSubmit)} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" {...register("example")} />
                <Form.Text className="text-muted">
                    로그인 하는곳
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register("exampleRequired", {required: true})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
        </Container>
    );
}

export default Login