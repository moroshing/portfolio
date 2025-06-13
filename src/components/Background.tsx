const GlowingDots = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <pattern
              id="dot-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              patternTransform="translate(0 0)"
            >
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#dot-pattern)"
            className="text-gray-200"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
};

export default GlowingDots;
