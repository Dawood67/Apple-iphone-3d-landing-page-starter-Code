import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from '@react-three/drei';
import { PhoneWrapper } from './phoneStyled';
import { Model } from '../../components/Scene';
import { Suspense } from 'react';

const PhoneModel = () => {
  return (
    <PhoneWrapper id='phone-model'>
      <Canvas camera={{ fov: 14 }}>
        <ambientLight intensity={1.25}/>
        <directionalLight intensity={0.4} />
        <mesh>
          {/* <boxGeometry/> */}
          <Suspense fallback={null}>
          <Model />
        </Suspense>
         
          {/* <meshStandardMaterial color="red"/> */}
        </mesh>
        {/* <OrbitControls/> */}
        <Environment preset="night" />
      </Canvas>
    </PhoneWrapper>
  )}

export default PhoneModel 