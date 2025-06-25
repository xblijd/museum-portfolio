import { React, useRef} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'

import House from './components/HouseTransformed'
import OakTrees from './components/OakTreesTransformed'
import CherryTrees from './components/CherryTreesTransformed'
import Bridge from './components/BridgeTransformed'
import Azalea from './components/AzaleaTransformed'
import Campfire from './components/CampfireTransformed'
import Extra from './components/ExtrasTransformed'
import Extra2 from './components/Extras2Transformed'
import Extra3 from './components/Extras3Transformed'
import Grass from './components/GrassTransformed'
import GroundNorth from './components/GroundNorthTransformed'
import GroundMiddle from './components/GroundMiddleTransformed'
import GroundSouth from './components/GroundSouthTransformed'

const Scene = ({controls}) => {
    useFrame(() => {
        // console.log("position")
        // console.log(controls.current.getPosition())
        // console.log("rotation")
        // console.log(controls.current.camera.rotation())
    })
}

const Experience = () => {
    const controls = useRef()

  return (
    <>
      <Canvas 
        camera= {{
          position: [-64, 34, -26],
          fov: 90,
          }}>  

        <CameraControls ref = {controls}/>
        <mesh>
            <boxGeometry/>
            <meshStandardMaterial/>
        </mesh>
        <directionalLight position={[0, 0, 5]} color ="red"/>
        <Scene controls={controls} />

        <Azalea/>
        <Campfire/>
        <Extra/>
        <Extra2/>
        <Extra3/>
        <Grass/>
        <GroundNorth/>
        <GroundMiddle/>
        <GroundSouth/>

        <House/>
        <OakTrees/>
        <CherryTrees/>
        <Bridge/>
      </Canvas>
    </>
  )
}

export default Experience