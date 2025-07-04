/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 GroundNorthTransformed.glb --transform -d 
Files: GroundNorthTransformed.glb [2.45MB] > C:\Users\xav\Desktop\Minor\Compressed GLB\GroundNorthTransformed-transformed.glb [2.31MB] (6%)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import useGLTFWithKTX2  from '../utils/useGLTFWithKTX'
import { convertMaterialsToMeshBasicMaterial } from '../utils/convertMaterial'

export default function Model(props) {
  const { nodes, materials } = useGLTFWithKTX2('/GroundNorthTransformed-transformed.glb')
  convertMaterialsToMeshBasicMaterial(materials)
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Grass_dirt_north.geometry} material={materials.Grass_dirt_north} />
    </group>
  )
}
