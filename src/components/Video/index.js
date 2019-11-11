import React from 'react';

import { connect } from 'react-redux';

const Video = ({ activeModule, activeLesson }) => (
    <div>
        <hr />
        <strong>Módulo: {activeModule.title}</strong>
        <hr />
        <span>Aula: {activeLesson.title}</span>
        <hr />
    </div >
);

export default connect(state => ({
    activeModule: state.course.activeModule,
    activeLesson: state.course.activeLesson,
}))(Video);