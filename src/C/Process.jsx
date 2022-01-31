export default function Process() {
  return<section id="process">
  <div class="py-10 bg-gray-50 radius-for-skewed">
          <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center">
          <div class="mb-16 max-w-md mx-auto text-center">
              <span class="text-blue-600 font-bold" data-config-id="badge">Our focus is on these categories</span>
              <h2 class="text-4xl md:text-5xl font-bold" data-config-id="header">Let us buy your surplus.</h2>
            </div>
              <div class="w-full  flex flex-wrap ">
                <div class="mb-8 lg:mb-0 w-full md:w-1/3 px-4">
                  <div class="mb-8 py-6 pl-6 pr-4 shadow flex flex-col justify-center items-center md:block rounded-lg bg-white">    
                    <img src={require("../img/sport.png")} alt="sport" class=" w-20 h-20 mb-4 shadow rounded-lg" />
                    <h4 class="mb-2 text-2xl font-bold font-heading" data-config-id="header2">Sports</h4>
                  </div>
                  <div class="py-6 pl-6 pr-4 shadow flex flex-col justify-center items-center md:block rounded bg-white">
                    <img src={require("../img/fashion.png")} alt="sport" class=" w-20 h-20 mb-4 shadow rounded-lg" />
                    <h4 class="mb-2 text-2xl font-bold font-heading" data-config-id="header2">Fashion</h4>
                  </div>
                </div>
                <div class="w-full md:w-1/3 px-4">
                  <div class="mb-8 py-6 pl-6 pr-4 shadow flex flex-col justify-center items-center md:block rounded-lg bg-white">
                    <img src={require("../img/beauty.png")} alt="sport" class=" w-20 h-20 mb-4 shadow rounded-lg" />
                    <h4 class="mb-2 text-2xl font-bold font-heading">Beauty</h4>
                  </div>
                  <div class="py-6 pl-6 pr-4 shadow mb-8 flex flex-col justify-center items-center md:block rounded-lg bg-white">
                    <img src={require("../img/electro.png")} alt="sport" class=" w-20 h-20 mb-4 shadow rounded-lg" />
                    <h4 class="mb-2 text-2xl font-bold font-heading">Electronics</h4>
                  </div>
                </div>
                <div class="mb-8 lg:mb-0 w-full md:w-1/3 px-4">
                  <div class="mb-8 py-6 pl-6 pr-4 shadow flex flex-col justify-center items-center md:block rounded bg-white">
                    <img src={require("../img/house.png")} alt="sport" class=" w-20 h-20 mb-4 shadow rounded-lg" />
                    <h4 class="mb-2 text-2xl font-bold font-heading">House and Garden</h4>
                  </div>
                  <div class="py-6 pl-6 pr-4 shadow flex flex-col justify-center items-center md:block rounded bg-white">
                    <img src={require("../img/toys.png")} alt="sport" class=" w-20 h-20 mb-4 shadow rounded-lg" />
                    <h4 class="mb-2 text-2xl font-bold font-heading">Toys & Hobby</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
    </section>
}