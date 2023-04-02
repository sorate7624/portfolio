import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Text,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  let color = '#f5e1fd';

  // if(props.skill === "excellent") {
  //   color = "#804dee";
  // } else if(props.skill === "good") {
  //   color = "#b399d4";
  // } else if(props.skill === "normal") {
  //   color = "#f5e1fd";
  // }

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0.05, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
        {/* <Text
          position={[1, 1, 0]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.5}
          color="red"
        >
          Test
        </Text> */}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, name, skill }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} name={name} skill={skill} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
