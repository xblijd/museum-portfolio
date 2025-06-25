import { React, Suspense, useRef} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { CameraControls, OrbitControls, Environment, PerspectiveCamera, View, useHelper } from '@react-three/drei'

import * as THREE from "three"

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
import Museum from './components/MuseumGebouwTransformed'

const CameraHelper = ({cameraRef}) => {
  useHelper(cameraRef, THREE.CameraHelper)

  return null;
}

const DebugCurve = ({curve})

const Scene = ({camera}) => {

  const cameraCurve = new THREE.CatmullRomCurve3 ([
    new THREE.Vector3(-65, 33, 29),
    new THREE.Vector3(-65, 33, -14),
    new THREE.Vector3(-60, 33, -2)
  ])

    useFrame(() => {
      if(camera){
        console.log("position")
        console.log(camera.current.position)
        console.log("rotation")
        console.log(camera.current.rotation)
      }
    })
return (<>
     <Environment 
        background={true}
        files={[
          '/cubemap/px.webp', 
          '/cubemap/nx.webp', 
          '/cubemap/py.webp', 
          '/cubemap/ny.webp', 
          '/cubemap/pz.webp', 
          '/cubemap/nz.webp'
          ]} 
        />


      <Suspense fallback={null}>
        <Azalea/>
        <Campfire/>
        <Extra/>
        <Extra2/>
        <Extra3/>
        <Grass/>
        <GroundNorth/>
        <GroundMiddle/>
        <GroundSouth/>
        <Museum/>
        <House/>
        <OakTrees/>
        <CherryTrees/>
        <Bridge/>
      </Suspense>
    </>
  )
}

const Experience = () => {
    const controls1 = useRef()
    const controls2 = useRef()
    const camera1 = useRef()
    const camera2 = useRef()

  return (
    <>

      <View 
        style ={{ 
          width: 402, 
          height: 875, 
          position: "absolute", 
          top: 0, 
          right: 0
        }}
        >
        <Scene camera={camera1}/>
        <PerspectiveCamera ref={camera1} makeDefault fov={90} position={[-64, 34, -26]} />
        <OrbitControls ref={controls1} camera={camera1.current}/>
        </View>, position: "absolute", top: 0
      <View 
        style ={{ 
          width: 750, 
          height: 750, 
          position: "absolute", 
          top: 0
          }}
        >
        <PerspectiveCamera ref={camera2} makeDefault fov={90} position={[-64, 34, -26]} />
        <Scene/>
        <CameraControls ref={controls2} camera={camera2.current}/>'
        <CameraHelper cameraRef={camera1}/>
      </View>
      <Canvas
      eventSource={document.getElementById("root")}
        // camera= {{
        //   position: [-64, 34, -26],
        //   fov: 90,
        //   }}
      >  

        <View.Port/>
      </Canvas>
    </>
  )
}

export default Experience