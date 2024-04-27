/* eslint-disable no-unused-vars */
import React from "react";

function SubProductOne() {
  return (
    <div className="w-full md:mb-40">
      <section className="md:flex mx-auto gap-x-12  justify-center">
        <div className="md:w-2/5 h-auto w-full mb-4">
          <img
            src="https://www.dreamtheory.com/wp-content/uploads/2019/07/bulbteeming.gif"
            alt=""
          />
        </div>
        <div className="md:w-2/5 h-auto justify-center items-center text-black mt-3 px-12">
          <h1 className="text-orange-600 py-16">
            {" "}
            CREATIVE INSPIRATION IN YOUR BRAND
          </h1>
          <h3 className="text-4xl font-normal py-12">
            We'll have your brand teeming with creative inspiration.
          </h3>
          <p className="text-xl font-normal">
            To stand out in today's online ecosystem a company needs an
            awe-inspiring brand. Dream Theory adds the touch of creativity your
            brand needs to complement the growth of your company.
          </p>
          <div className="flex justify-evenly">
          <div className="py-16">
            <h1 className="text-2xl font-medium pb-10 "> Web Design </h1>
             <p className="text-xl font-normal pb-6">
             Add brilliance to your online presence. Your website should
             be a bold statement.
             </p>
             <p>Learn more.</p>
          </div>
          <div className="py-16">
          <h1  className="text-2xl font-medium pb-10">Print Work</h1>
          <p  className="text-xl font-normal pb-6">
          Handing out flyers and
          brochures is more exciting when you can stand by your brand. 
          </p>
          <p>Learn more.</p>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SubProductOne;
