import { string } from "prop-types";
import { ToggleButtonGroup, ToggleButton, Container } from "react-bootstrap";

type Options = {
    value: string | number;
    label: React.ReactNode;
};

interface ToggleButtonsProps {
    label: string;
    options: Options[];
    value: any;
    onChange: (val: any) => void;
    variant: string;
    idPrefix: string;
}

function ToggleButtons({label, options, value, onChange, variant="secondary", idPrefix="tbg"}: ToggleButtonsProps) {
    return (
        <Container className="mb-3">
            <h4>{label}</h4>
            <ToggleButtonGroup type="checkbox" value={value} onChange={onChange} name={idPrefix}>
                {options.map((opt) => (
                    <ToggleButton
                        key={opt.value}
                        id={`${idPrefix}-${opt.value}`}
                        value={opt.value}
                        variant={variant}
                    >
                        {opt.label}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </Container>
    );
}

export default ToggleButtons