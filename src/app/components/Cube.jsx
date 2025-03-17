import { useRef, useState } from "react";
import { Float, useGLTF, useTexture } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'


const Cube = ({scale, position}  ) => {
    const cubeRef = useRef(null)
    const [hovered, setHovered] = useState(false)
    const texture = useTexture('/textures/cube.png')
    const { nodes } = useGLTF('models/cube.glb');

    useGSAP(()=>{
        gsap.timeline({
            repeat:-1,
            repeatDelay: 0.
        }).to( cubeRef.current && cubeRef.current.rotation, {
            x: hovered ? '+=0.4' : `+=${Math.PI * 2}`,
            y: hovered ? '+=0.6' : `+=${Math.PI * 2}`,
            duration: 5,
            ease: 'power2.inOut',
            stagger:{
                each:0.5
            }
        })
    })

    return <Float floatIntensity={2}>
        <group   rotation={[2.6, 0.8, -1.8]} scale={scale} position={position}  dispose={null}>
            <mesh
                ref={cubeRef}
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={nodes.Cube.material}
                onPointerEnter={() => setHovered(true)}>
                <meshMatcapMaterial matcap={texture} toneMapped={false} />
            </mesh>
        </group>
    </Float>
}

export default Cube;