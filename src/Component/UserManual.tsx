import { Button } from "react-bootstrap";


function UserManual() {

    const handleclick = ():void => {
        alert("김성진")
    }
    return (
        <Button onClick={handleclick}>
            사용 설명서
        </Button>
    );
}

export default UserManual