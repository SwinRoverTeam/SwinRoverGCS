import React, { useRef, useEffect} from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import { Html } from '@react-three/drei';
import { Typography } from '@mui/joy';
import modelUrl from '../../../assets/RoverCOmpressed.STL';
import { STLLoader } from 'three-stdlib';
import { useLoader } from '@react-three/fiber';
import { Suspense } from 'react';

// pos x: -20, y 9 z-5
// rot x: -2, y: -1, z: -2


function Model({ url }: { url: string }) {
  const meshRef = useRef();
  const geometry = useLoader(STLLoader, url);
  const { camera } = useThree();

  useEffect(() => {
    // Set the camera's initial position
    camera.position.x = -20;
    camera.position.y = 9;
    camera.position.z = -5;

    // Set the camera's initial rotation
    camera.rotation.x = -2;
    camera.rotation.y = -1;
    camera.rotation.z = -2;
  }, [camera]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
      
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial color={'#00ff00'} wireframe={true} />
      <Html position={[0, 0, 0]} fullscreen>
        <Typography level="h2" component="h1">
          Systems Overview
        </Typography>
      </Html>
    </mesh>
  );
}

export default function ThreeWindow() {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model url={modelUrl} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}