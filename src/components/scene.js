import React from "react";
import * as BABYLON from '@babylonjs/core/Legacy/legacy';




 
class Test extends React.Component {
    render() {
        const SceneStyle = { border: '2px dotted red'};

        return ( 
            <canvas id="renderCanvas" style={SceneStyle} touch-action="none"></canvas>
        );

    }
}

export default Test; 