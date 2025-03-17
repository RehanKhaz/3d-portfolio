import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Target = ({scale , position} ) => {
    const targetRef = useRef(null)
    const { scene } = useGLTF(
        'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
      );

      useGSAP(()=>{
        if(!targetRef.current) return;
        gsap.to(targetRef.current?.position, {
            y: targetRef.current?.position.y + 0.1,
            duration: 1,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
      })
      })

    return (
        <mesh scale={scale}  ref={targetRef} rotation={[0, 120, 0]} position={position} >
            <primitive object={scene} />
        </mesh>
    )
}

export default Target