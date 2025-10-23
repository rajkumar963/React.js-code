import useMacBookStore from '../store'
import clsx from 'clsx'
import {Canvas} from '@react-three/fiber'
import StudioLights from "./three/StudioLights.jsx";
import ModelSwitcher from './three/modelSwitcher.jsx'
import { useMediaQuery } from 'react-responsive'

 

const ProductViewer = () => {

    const {color, scale, setScale, setColor}=useMacBookStore();

    const isMobile=useMediaQuery({query:'(max-width: 1024px)'});

  return (
    <section id='product-viewer'>
        <h2>Take a Closer Look.</h2>

        <div className='controls'>
            {/* <p className='info'>MacBook Pro | Available in 14" and 16" in Space Gray and Silver  {scale} in {color}</p> */}

            <div className='flex-center gap-5 mt-5'>
                <div className="color-control">
                    <div onClick={()=>setColor('#adb5bd')} 
                      className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')}
                    />
                    <div onClick={()=>setColor('#2e2c2e')} 
                      className={clsx('bg-neutral-900', color === '#adb5bd' && 'active')}
                    />
                </div>
                <div className="size-control">
                    <div onClick={()=>setScale(0.06)} 
                      className={clsx(scale === 0.06 ?'bg-white text-black' : 'bg-transparent text-white', 'cursor-pointer')}
                    > 
                     <p>14"</p>
                    </div>
                    <div onClick={()=>setScale(0.08)} 
                      className={clsx(scale === 0.08 ?'bg-white text-black' : 'bg-transparent text-white', 'cursor-pointer')}
                    > 
                     <p>16"</p>
                    </div>
                </div>
            </div>
        </div>

        <Canvas id='canvas' camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}>
            <StudioLights/>
            {/* <MacbookModel14 scale={0.06} color={color} /> */}
            <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
          {/* <OrbitControls enableZoom={false} /> */}
        </Canvas>
    </section>
  )
}

export default ProductViewer