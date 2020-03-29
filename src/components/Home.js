// import React, { useCallback } from 'react'
// import { useSpring, animated } from 'react-spring'

// export default function Home() {

//   const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
//   const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

//   const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

//   return (
//     <React.Fragment>
//     <header id="showcase">
//       <div className="container showcase-container">
//         <div className="mb-1" onMouseMove={({ clientX: x, clientY: y}) => set({ xy: calc(x,y) })}>
//         <animated.img src="img/vr-head.png" alt="vr-icon" className="vr-icon" style={{ transform: props.xy.interpolate(trans1) }}/>
//         <h1>Welcome</h1>
//         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi eum inventore eius ratione officiis nihil quae facilis totam fuga architecto!</p>
//         </div>
//       </div>
//     </header>
//   </React.Fragment>
//   )
// }

import React, { Component } from "react";
import { useSpring, animated } from 'react-spring'
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Home extends Component {

  componentDidMount() {
    // === THREE.JS CODE START ===

    let scene = new THREE.Scene();
    let container = document.getElementById('scene');
    let headset;
    let aspect = container.clientWidth / container.clientHeight;
    let camera = new THREE.PerspectiveCamera(20, aspect, 0.1, 500);
    camera.position.set(0, 0, 5);

    const ambient = new THREE.AmbientLight(0x404040, 3);
    scene.add(ambient);

    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(10, 10, 30);
    scene.add(light);
    let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.prepend(renderer.domElement);

    let loader = new GLTFLoader();
    loader.load('3d/scene.gltf', function (gltf) {
      scene.add(gltf.scene);
      headset = gltf.scene.children[0];
      animate();
    })

    function animate() {
      requestAnimationFrame(animate);
      headset.rotation.z += 0.005;
      renderer.render(scene, camera);
    }
  }
  render() {

    return (
      <React.Fragment>
        <header id="showcase">
          <video autoPlay loop id="myVideo">
            <source src="background.mp4" type="video/mp4"/>
           </video>
            <div className="container showcase-container">
              <div className="spacer" />
              <div className="scene" id="scene">
                <div className="spacer">
                <h1 className="text-blue">Virtual Experiences</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi eum inventore eius ratione officiis nihil quae facilis totam fuga architecto!</p>
              <Link to="/products">
                <ButtonContainer cart>browse experiences</ButtonContainer>
              </Link>
                </div>
                
              
            
              </div>
            </div>
        </header>
      </React.Fragment>
        )
      }
    }
    
    
