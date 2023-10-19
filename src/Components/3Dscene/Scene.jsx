import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";
import FantasyBook from "../3Dmodels/Model";
import FlythroughScene from "../../assets/fly.json";

function Seen() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  return (
    <>
      <color attach='background' args={["black"]} />

      <ambientLight />
      <PerspectiveCamera
        theatreKey='camera'
        makeDefault
        position={[0, 0, 0]}
        fov={90}
        near={0.1}
        far={70}
      />

      <FantasyBook />
    </>
  );
}

const Scene = () => {
  const sheet = getProject("fly trough", { state: FlythroughScene }).sheet(
    "Seen"
  );

  return (
    <div className='w-screen h-screen'>
      <Canvas gl={{ preserveDrawingBuffer: true }}>
        <ScrollControls pages={5} damping={1} maxSpeed={0.1}>
          <SheetProvider sheet={sheet}>
            <Seen />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Scene;
