const Planes = () => {
  return (
    <>
      <div className="container mx-auto mt-14">
        <h1 className="text-center text-purple-black font-bold text-4xl mb-8">
          ¿Ya conocias nuestros planes?
        </h1>
        <div className="flex flex-col sm:flex-row p-4  justify-between items-start gap-5">
          {/* Primera */}
          <div className="bg-[url(/image/plan-1.png)] bg-no-repeat md:w-1/2 max-h-full w-[646px] h-[667px]">
            <h3 className="uppercase border-b-4 border-pink-gray w-max text-pink-gray font-bold mx-auto text-center"></h3>
            <ul className="list-disc  mx-auto max-w-sm text-lg ml-4 lg:mx-auto"></ul>
          </div>

          <div className="hidden md:block">
            <div className="w-1 h-[15vh] bg-pink-gray opacity-60 "></div>
          </div>

          {/* Segunda */}
        </div>
        <img src="/image/planes.svg" alt="" className="mx-auto" />
      </div>
    </>
  );
}

export default Planes