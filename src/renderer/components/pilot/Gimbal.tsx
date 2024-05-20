import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';

function SpinningCube() {
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <Box ref={meshRef}>
            <meshStandardMaterial color={'#00ff00'} />
        </Box>
    );
}

export default function Gimbal() {
    return (
        <Canvas >
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <SpinningCube />
            <OrbitControls />
        </Canvas>
    );
}