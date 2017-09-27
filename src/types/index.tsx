export interface RootState {
    controlWidget: ControlWidgetState;
    serverConfig: MQTTServerConfig;
    controlBoard: ControlBoardState;
}

export interface ControlWidgetState {
  enabled: boolean;
  level: number;
}

export interface MQTTServerConfig {
  address: string;
  name: string;
}
export interface TopicControlOptions {
  topic: string;
  sendTopic?: string;
} 

export interface ControlBoardState {
  controls: TopicControlOptions[];
}
