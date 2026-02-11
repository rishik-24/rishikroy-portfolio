import { Doto as DotoFont } from "next/font/google";

const dotoFont = DotoFont({
  weight: ["400", "600"],
});

const FooterSec = () => {
  return (
    <>
      <div className="pb-10">
        <div
          className={`${dotoFont.className} text-3xl font-bold text-blue-400`}>
          RIK
        </div>
        <div className="mt-2 text-sm text-gray-400">
          That&apos;s all, folks | Designed & built with more headache... © 2026
          Rishik Roy. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default FooterSec;
