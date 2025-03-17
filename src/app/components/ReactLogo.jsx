import React from 'react'
import { Float, useGLTF } from '@react-three/drei'

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/react.glb')
  return (
    <Float floatIntensity={1}  dispose={null}>
      <group  >
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          rotation={[0, 0, -Math.PI / 2]}
          {...props}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')
export default ReactLogo;
