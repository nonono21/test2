import React from 'react';
import * as THREE from "three";









class Scene extends React.Component {


    componentDidMount() {
        // === THREE.JS CODE START ===
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z = 5;


        // Resize de la scene
        window.addEventListener('resize', onResize, false);

        function onResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
          }

        var animate = function () {
          requestAnimationFrame( animate );
          cube.rotation.x += 0.08;
          cube.rotation.y += 0.01;
          renderer.render( scene, camera );
        };

        animate();

    }

    render() {
        return <div>toito</div>
    }
}



export default Scene