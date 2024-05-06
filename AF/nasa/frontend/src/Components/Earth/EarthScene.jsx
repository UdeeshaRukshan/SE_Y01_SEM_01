import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Earth } from './Earth';
import { OrbitControls, Stars } from '@react-three/drei';

function EarthScene() {
    return (
        <Canvas style={{ width: '100vw', height: '100vh' }}>
        <ambientLight intensity={4} />
        <Earth />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.4} 
          panSpeed={0.6} 
          rotateSpeed={0.2}
        />
      </Canvas>
    );
  }
  

export default EarthScene;
