import { Ripple } from "../components/magicui/ripple";
import testImg from "../assets/test.png";

const Loading: React.FC = () => {
  return (
    <Ripple>
      <div className="flex flex-col items-center justify-center h-full">
        <span className="text-gray-800 drop-shadow-2xl font-code animate-pulse font-mono">
          <img
            src={testImg}
            alt="Loading"
            className="w-32 h-32 object-contain"
            draggable={false}
          />
        </span>
      </div>
    </Ripple>
  );
};

export default Loading;
