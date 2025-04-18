import AnimatedText from './AnimatedText';

const AnimationSequence = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-600 p-10">
      <AnimatedText />
      <div className="mt-20 flex min-h-5 w-full items-center justify-center">
        <button className="text-white rounded-lg bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500 px-4 py-2 text-xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95">
          <span>Purchase Now ($169) </span>
        </button>
      </div>
    </div>
  );
};

export default AnimationSequence;
