const CrossIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="12"
      height="12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.8061 6.70711c.39053-.39053.39053-1.02369 0-1.41422L.707107 2.1939c-.390525-.39053-.390525-1.02369 0-1.414215L.779685.707107C1.17021.316582 1.80337.316582 2.1939.707106L5.29289 3.8061c.39053.39053 1.02369.39053 1.41422 0L9.8061.707107c.3905-.390524 1.0237-.390524 1.4142 0l.0726.072578c.3905.390525.3905 1.023685 0 1.414215l-3.099 3.09899c-.39053.39053-.39053 1.02369 0 1.41422l3.099 3.09899c.3905.3905.3905 1.0237 0 1.4142l-.0726.0726c-.3905.3905-1.0237.3905-1.4142 0l-3.09899-3.099c-.39053-.39053-1.02369-.39053-1.41422 0l-3.09899 3.099c-.39053.3905-1.02369.3905-1.414214 0l-.072579-.0726c-.390524-.3905-.390525-1.0237 0-1.4142L3.8061 6.70711Z"
        fill="currentColor"
        fillOpacity=".5"
      />
    </svg>
  );
};

export default CrossIcon;
