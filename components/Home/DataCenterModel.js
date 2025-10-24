'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

function Model(props) {
  const { scene } = useGLTF('/data_center.glb')
  return (
    <primitive 
      object={scene} 
      scale={0.3} 
      position={[0, -1.5, -3]} 
      rotation={[0, Math.PI / 6, 0]} 
      {...props} 
    />
  )
}

export default function DataCenterModel() {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [12, 8, 20], fov: 40 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls 
        enableRotate={true}
        enableZoom={true} 
        enablePan={false} 
        minDistance={10} 
        maxDistance={40} 
        autoRotate={true} 
        autoRotateSpeed={0.5} 
      />
    </Canvas>
  )
}
