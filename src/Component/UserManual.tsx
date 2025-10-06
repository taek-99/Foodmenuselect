import { Button } from "react-bootstrap";


function UserManual() {

    const manualhandleclick = ():void => {
        alert("김성진")
    }
    return (
        <Button onClick={manualhandleclick}>
            사용 설명서
        </Button>
    );
}

export default UserManual