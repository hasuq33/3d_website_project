import { Canvas } from "@react-three/fiber";
import { Environment , Center } from "@react-three/drei";
import BackDrop from "./Backdrop";
import CameraRig from "./CameraRig";
import Shirt from "./Shirt";

const CanvasModel = () =>{
    return(
        <Canvas 
            shadows
            camera={{position:[0,0,0],fov:30}}
            gl={{preserveDrawingBuffer:true}}
            className="w-full max-w-full h-full transition-all ease-in"
        >
            <ambientLight intensity={0.5}/>
            <Environment preset="city"/>
            <CameraRig>
                <BackDrop/>
                <Center>
                    <Shirt/>
                </Center>
            </CameraRig>
        </Canvas>
    )
}

export default CanvasModel;