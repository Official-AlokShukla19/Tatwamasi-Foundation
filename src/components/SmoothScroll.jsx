import { ReactLenis } from '@studio-freight/react-lenis';

const SmoothScroll = ({ children }) => {
  // We bypass Lenis to provide 100% instant, native browser scrolling
  // This removes any artificial inertia, lag, or "scroll-jacking" feel.
  return <>{children}</>;
};

export default SmoothScroll;
