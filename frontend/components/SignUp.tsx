import Image from "next/image";

const SignUpButton = () => {
  return (
    <button className="border-2 border-gray-300 text-gray-700 font-semibold rounded-full px-5 py-2 text-base bg-white hover:bg-gray-100 transition">
      Sign Up
    </button>
  );
};

export const SignUP = () => {
  return (
    <div className="flex items-center justify-between rounded-3xl border border-gray-200 bg-gray-100 max-w-4xl w-full p-4 mt-7">
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg">
          <Image width={20} height={20} src="/inbox.svg" alt="inbox icon" />
        </div>
        <span className="text-black font-semibold text-base">
          Don&apos;t get left behind, get notified of new agents directly in
          your inbox!
        </span>
      </div>

      <SignUpButton />
    </div>
  );
};
