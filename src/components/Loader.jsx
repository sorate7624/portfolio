import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load">
        <p
          style={{
            fontSize: 20,
            color: 'rgba(255, 255, 255, .5)',
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {progress.toFixed(2)}
        </p>
      </span>
    </Html>
  );
};

export default Loader;
