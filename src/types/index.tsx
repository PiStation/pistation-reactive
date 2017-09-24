export interface RootState {
    controlWidget: ControlWidgetState;
}
export interface ControlWidgetState {
  enabled: boolean;
  level: number;
}