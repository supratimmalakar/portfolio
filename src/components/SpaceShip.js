import React from 'react'
import { useGLTF } from '@react-three/drei'


const Model = () => {
    const gltf = useGLTF('/scene.gltf')
    return <primitive object={gltf.scene} dispose={null}/>
}

function SpaceShip() {

  return (
    <group position={[0,250,0]}>
        <mesh position={[0,35,0]}>
            <Model/>
        </mesh>
    </group>
  )
}

export default SpaceShip