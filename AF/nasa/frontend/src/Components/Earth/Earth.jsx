import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { TextureLoader } from "three";
import * as THREE from "three";

import EarthDayMap from "../../assest/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assest/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assest/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assest/8k_earth_clouds.jpg";

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]);
  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 10;
    cloudsRef.current.rotation.y = elapsedTime / 7;
  });

  return (
    <>
      <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2}/>
      <Stars 
        radius={400}
        depth={90}
        count={10000}
        factor={7}
        saturation={0}
        fade={true} 
      />
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.005, 32, 32]}/>
        <meshPhongMaterial 
          map={cloudsMap}
          opacity={0.4} 
          depthWrite={true} 
          transparent={true} 
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 32, 32]}/>
        <meshStandardMaterial 
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7} 
        />
      </mesh>
    </>
  );
}

// Assuming you use this in your application component or specific page.

