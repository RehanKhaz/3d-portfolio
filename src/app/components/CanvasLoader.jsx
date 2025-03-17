import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
    const {progress} = useProgress()
    return (
        <Html as="div" center >
            <div className=" bg-white mt-[-4em] flex  w-40   h-[.3em] rounded-2xl">
                <div style={{
                    width: progress !== 0 ? `${Math.floor(progress)}%` : '100%'
                }} className='h-full rounded-2xl bg-cyan-400'/>
            </div>
                <p className="text-xl mt-3 text-center  w-full text-white font-semibold">Loading 3d Model ...</p>
        </Html>
    )
}

export default CanvasLoader;