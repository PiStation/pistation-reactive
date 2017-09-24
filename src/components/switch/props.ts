export interface ToggleElementProps {
    enabled: boolean;
    for?: string;
}

export interface SwitchProps {
    children?: React.ReactNode;
    enabled: boolean;
    name?: string; 
    onSwitchChange: () => void;
}