import React, {
  Component
} from 'react';
import * as THREE from 'three';
import './App.css';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';

class App extends Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
    // let scene = new THREE.Scene();
    // let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    // let renderer = new THREE.WebGLRenderer();
    // renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );
    // let geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // let cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );
    // camera.position.z = 5;
    // let animate = function () {
    //   requestAnimationFrame( animate );
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
    //   renderer.render( scene, camera );
    // };
    // animate();
    // === THREE.JS EXAMPLE CODE END ===
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(50, 500 / 400, 0.1, 1000);

    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
    let material = new THREE.MeshNormalMaterial();
    let cube = new THREE.Mesh(geometry, material);
    scene.add(cube);


    camera.position.z = 10;
    let render = function () {
      requestAnimationFrame(render);

      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    render();

  }
  render() {
    return ( <div className = "App" > {
        /* <h1>포트폴리오 작성 목록 정리</h1>
                <ul>
                  <li>
                    컨셉 구상 
                    <p>우주</p>
                  </li>
                  <li>
                    <p>인트로 구현</p>
                    <p>로딩바</p>
                    <p>빅뱅</p>
                    <p onClick={()=>{
                      alert();
                    }}>지구</p>
                    <p>지구표본&ndash;&gt;집&ndash;&gt;컴퓨터 화면</p>
                  </li>
                  <li>반응형 구현(pc, tablet, mobile 호환) </li>
                  <li>헤더 구현 </li>
                  <li>메인 구현 </li>
                  <li>내용 작성 </li>
                  <li>데코레이션 </li>
                  <li>프로젝트 추가 </li>
                </ul> */
      } </div>
    );
  }
}

export default App;