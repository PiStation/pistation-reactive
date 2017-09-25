export interface RootState {
    controlWidget: ControlWidgetState;
    serverList: MQTTServerConfig[];
}
export interface ControlWidgetState {
  enabled: boolean;
  level: number;
}

export interface MQTTServerConfig {
  address: string;
  name: string;
}