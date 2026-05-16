import { ReactLenis } from '@studio-freight/react-lenis';

const SmoothScroll = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.2, wheelMultiplier: 1.2, smoothTouch: false, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
