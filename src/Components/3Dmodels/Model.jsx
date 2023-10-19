import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const actionNames = ["The Life"];

const FantasyBook = () => {
  const model = useGLTF("/public/fantasyBook/medieval_fantasy_book.glb");

  const animations = useAnimations(model.animations, model.scene);

  const action = animations.actions[actionNames[0]];

  useFrame(() => {
    action.play();
  });

  return (
    <mesh>
      <primitive object={model.scene} />
    </mesh>
  );
};

export default FantasyBook;
