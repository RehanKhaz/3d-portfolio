import Beam from '../components/Beam'
import { AiOutlinePlus } from 'react-icons/ai'
import Form from '../components/Form'


const Contact = () => {
    return (
        <section id='contact' className='padding  '>
            <div className='w-full relative min-h-[130vh] flex-center  bg-[#0F0F11] rounded-3xl border-[1.4px] border-neutral-500'>
                <div className='absolute bg-gradient-to-r via-[#787879] rounded-t-3xl overflow-hidden to-[#1B1B1D] from-[#303032] flex justify-between top-0 left-0 px-10 max-md:px-5 py-4 max-md:py-2 w-full'>
                    <div className='flex-center gap-4'>
                        {['#F46B5D', '#F9BD4E', '#57C353'].map((bg, index) => {
                            return <Beam key={index} bg={bg} />
                        })
                        }
                    </div>
                    <AiOutlinePlus className='size-8 fill-[#4A4A4B]' />
                </div>
                <div className='min-h-screen absolute py-4 px-3  top-[8em] w-[30em] max-md:w-[80vw]  max-sm:w-[90vw] '>
                    <div className='flex flex-col gap-3'>

                        <h3 className='text-4xl max-md:text-3xl font-medium text-neutral-300 tracking-wide '>
                            Let&apos;s Talk
                        </h3>
                        <p className='text-lg font-medium tracking-wide text-neutral-400'>
                            Whether you&apos;re looking to build a new website, improve your existing platform, or bring a unique project to life, I&apos;m here to help.
                        </p>
                        <Form />
                    </div>


                </div>


            </div>

        </section>
    )
}

export default Contact