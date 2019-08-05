import React, { Component } from 'react';

import { TimeStyle, TimeBorder } from './TimeStyle'

class Time extends Component {
    render() {
        return (
            <TimeStyle>
                <TimeBorder hasBorder="true" className="day">
                    <span>17天，2个瞬间</span>
                </TimeBorder>
            </TimeStyle>
        );
    }
}

export default Time;