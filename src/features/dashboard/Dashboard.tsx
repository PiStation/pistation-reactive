import * as React from 'react';
import { ControlBoardState, TopicControlOptions } from '../../types/index';
import ControlWidget from './ControlWidget';
import { connect } from 'react-redux';

interface WidgetboardProps {
    widgets: TopicControlOptions[];
}
interface WidgetBoardState {

}

export class Widgetboard extends React.Component<WidgetboardProps, WidgetBoardState> {
    render() {
        return <ControlWidget/>;
    }
}

function mapStateToProps({controls}: ControlBoardState) {
  return {
      widgets: controls
  };
}

export default connect(mapStateToProps, {})(Widgetboard);