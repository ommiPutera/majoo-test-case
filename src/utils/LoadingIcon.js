const LoadingIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: "auto",
      background: "0 0",
      display: "block",
      shapeRendering: "auto",
      animationPlayState: "running",
      animationDelay: "0s",
    }}
    width={54}
    height={54}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <circle
      cx={54}
      cy={54}
      r={27}
      strokeWidth={8}
      stroke="#2563eb"
      strokeDasharray="42.411500823462205 42.411500823462205"
      fill="none"
      strokeLinecap="round"
      style={{
        animationPlayState: "running",
        animationDelay: "2s",
      }}
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        keyTimes="0;1"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>
);

export default LoadingIcon;
