import Link from "next/link";

const MyWorksBtn = () => {
  return (
    <Link
      href="/MyWorks"
      className="px-4 py-2 bg-rose-700 hover:bg-rose-800 transition duration-200 rounded-lg text-rose-50 shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
    >
      My Works
    </Link>
  );
};

export default MyWorksBtn;
