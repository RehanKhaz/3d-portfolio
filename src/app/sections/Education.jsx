'use client'
import { Canvas } from "@react-three/fiber"
import { useState } from "react"
import { education } from "../constants"
import CanvasLoader from "../components/CanvasLoader"
import { Suspense } from "react"
import MyAvatar from "../components/MyAvatar"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"

const Education = () => {
  const [animation, setAnimation] = useState('idle')
  return (
    <section id={'education'} className="my-10 min-h-screen max-md:my-7 padding">
      <h3 className='text-4xl font-semibold tracking-wide text-neutral-400'>
        My Education
      </h3>
      <div className="w-full grid grid-cols-1 h-full my-10 max-md:my-4 gap-5 lg:grid-cols-3">
        <div className="bg-[#0E0E10] w-full max-md:h-[50vh] flex-center rounded-2xl border-[1px] border-neutral-800 col-span-1">
          <Canvas className="h-full w-full">
            <Suspense fallback={<CanvasLoader />} >
              <directionalLight intensity={3} />
              <MyAvatar animationName={animation} scale={3} position={[0, -3, 0]} />
              <ambientLight intensity={Math.PI / 2} position={[10, 10, 10]} />
              <PerspectiveCamera position={[2, 2, 4]} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
            </Suspense>

          </Canvas>
        </div>
        <div className="col-span-2 bg-[#0E0E10] h-full  flex-center gap-4  rounded-2xl border-neutral-800 border-[1px]">
          <div className="px-4 py-6 ">
            {
              education.map((item, index) => {
                const { id, name, pos, duration, title,  animation } = item
                return <div key={index} onClick={() => setAnimation(animation.toLowerCase())} onPointerOver={() => setAnimation(animation.toLowerCase())} onPointerOut={() => setAnimation('idle')} className="grid group grid-cols-[auto_1fr] items-start gap-5  transition-all ease-in-out duration-500 cursor-pointer py-3 hover:bg-[#1C1C21] rounded-lg sm:px-5 px-2">
                  <div className="flex flex-col items-start gap-3 justify-center">
                    <div className="rounded-3xl p-3 bg-[#1A1A1A]">
                      <p className="text-3xl font-semibold text-neutral-300">
                        0{id}
                      </p>
                    </div>
                    <div className={'flex-1 w-0.5 mt-4 h-full bg-neutral-300 group-hover:bg-neutral-400 group-last:hidden'} />
                  </div>

                  <div className="sm:px-4">
                    <p className="font-bold text-lg text-neutral-300">{name}</p>
                    <p className="text-sm text-neutral-400 mb-5">
                      {pos} -- <span>{duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all text-neutral-400 ease-in-out duration-500">{title}</p>
                  </div>


                </div>
              })
            }

          </div>

        </div>

      </div>

    </section>
  )
}

export default Education