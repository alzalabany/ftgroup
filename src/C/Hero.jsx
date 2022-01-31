export default function Hero( ) {
  return (
    <section className="skewed-bottom-right mb-4">
    <div className="bg-gray-50 pt-12 lg:pt-20 pb-20 radius-for-skewed">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
            <div className="w-full text-center lg:text-left">
                <div className="max-w-md mx-auto lg:mx-0">
                <span class="text-gray-400 mb-3 font-bold" data-config-id="badge">FT Group for Stocklots Trading</span>
                <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                  <span data-config-id="header-p1">The power to succeed,</span>
                  <span className="text-blue-600" data-config-id="header-p2">
                    without limits.
                  </span>
                </h2>
              </div>
              <div className="max-w-sm mx-auto lg:mx-0">
                <p
                  className="mb-6 text-gray-400 leading-loose"
                  data-config-id="desc"
                >
                  Our strength, network, and innovation have made us an industry leader with a full spectrum of stocklots trading of A-brands.
                </p>
                <div>
                  <a
                    className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                    href="tel:+9717777777"
                    data-config-id="primary-action-hero"
                  >
                    Contact us
                  </a>
                  <a
                    className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200"
                    href="#solutions"
                    data-config-id="secondary-action-hero"
                  >
                    How it works
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
            <div className="relative zindex-0">
              <img
                className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none"
                src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                alt=""
                data-config-id="image1"
              />
              <img
                className="hidden md:block absolute"
                style={{ top: "-2rem", right: "3rem", zIndex: -1 }}
                src="/arrowsquare.svg"
                alt=""
                data-config-id="auto-img-1"
              />
              <img
                className="hidden flip-x md:block absolute"
                style={{ top: "-2rem", right: "-2rem", zIndex: -1 }}
                src="/arrowsquare.svg"
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
