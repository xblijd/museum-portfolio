import { MeshBasicMaterial } from 'three';


export const convertMaterialsToMeshBasicMaterial = (material) =>{
    Object.keys(material).forEach((materialKey) => {
        const material = materials[materialKey]

        if(material.emmisiveMap){
            materials[materialKey] = new MeshBasicMaterial({
                map: material.emmisiveMap,
        });
    } else {
        materials[materialKey] = new MeshBasicMaterial({
            map: material.map,
            transparent: true,
            alphaTest: 0.5,
            });
        }
    });
    return materials;
}
