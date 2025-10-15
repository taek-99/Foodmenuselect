import { Button } from "react-bootstrap";


function UserManual() {

    const manualhandleclick = ():void => {
        alert("알아서 잘 사용하쇼")
    }
    return (
        <Button onClick={manualhandleclick}>
            사용 설명서
        </Button>
    );
}

export default UserManual