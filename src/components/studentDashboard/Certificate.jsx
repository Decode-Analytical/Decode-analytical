import React from "react";
import { FaMedal } from "react-icons/fa";

export default function () {
  return (
    <section className="border border-gray ps-5 text-lg pe-3">
      <div className="flex flex-wrap justify-between">
        <div>
          <p className="font-bold text-small mt-2 mb-10">DECODE ANALYTICS</p>
          <p className="text-gray">This is to certify that</p>
          <p className="font-semibold ">Victoria Olayode</p>
          <p className="text-gray ">has completed </p>
          <p className="font-semibold">Early Design And Its Principles</p>
          <p className="text-gray ">online at Decode Analytics.</p>
        </div>
        <div className="flex flex-wrap text-center" >
          <div className="bg-zinc-400 w-24">
            <p className="text-xs font-semibold ">COURSE CERTIFICATE</p>
          </div>
          <FaMedal />
        </div>
      </div>
    <div className=" mb-3 mt-14">
    <p>DECODE ANALYTICS</p>
      <div className="border-b-2 border w-36"></div>
      <p className="">Signature</p>
      <p className="text-gray"> Sep 1, 2023</p>
    </div>
    </section>
  );
}
