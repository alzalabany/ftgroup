export default function Hero( ) {
  return (
    <section className="skewed-bottom-right mb-4" id="about">
    <div className="bg-gray-50 pt-12 lg:pt-20 pb-20 radius-for-skewed">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
            <div className="w-full text-center lg:text-left">
                <div className="max-w-md mx-auto lg:mx-0">
                <span class="text-gray-400 mb-3 font-bold" data-config-id="badge">FT International for Stocklots Trading</span>
                <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                  <span data-config-id="header-p1">The power to succeed,</span>
                  <span className="text-blue-600" data-config-id="header-p2">
                    without limits.
                  </span>
                </h2>
              </div>
              <div className="max-w-sm mx-auto lg:mx-0">
                <p className="mb-6 text-gray-400 leading-loose">
                  Our strength, network, and innovation have made us an industry leader with a full spectrum of stocklots trading of A-brands.
                  </p>
                  <p className="mb-12 text-gray-400 leading-loose">
                  Our mission is to fuel our clients’ and partners’ achievements, powered by honesty and reliability, expertise, and superior support.
Everything we do is to aid and inspire our clients so they can maximize their potential and accomplish their unique goals.</p>

              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative zindex-0">
              <img
                className="h-full w-full max-w-2xl object-cover rounded-3xl md:rounded-br-none"
                src={require("../img/main2.png")}
                alt=""
              />
              <img
                className="hidden md:block absolute"
                style={{ top: "-2rem", right: "3rem", zIndex: -1 }}
                src="/arrow.svg"
                alt=""
                data-config-id="auto-img-1"
              />
              <img
                className="hidden flip-x md:block absolute"
                style={{ top: "-2rem", right: "-2rem", zIndex: -1 }}
                src="/arrow.svg"
                alt=""
                data-config-id="auto-img-2"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
  );
}
