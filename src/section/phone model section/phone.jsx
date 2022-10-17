import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import { PhoneWrapper } from './phoneStyled';

const PhoneModel = () => {
  return (
    <PhoneWrapper>
      <Canvas>
        <ambientLight intensity={1.25}/>
        <mesh>
          {/* <boxGeometry/> */}
          <meshStandardMaterial color="red"/>
        </mesh>
        <OrbitControls/>
      </Canvas>
    </PhoneWrapper>
  )}

export default PhoneModel 