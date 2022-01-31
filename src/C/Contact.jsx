export default function Contact() {
  return <section class="flex py-16 bg-gray-100 min-w-screen" id="contact">
    <div class="container px-12 mx-auto bg-gray-100 md:px-16 xl:px-10">
        <div class="flex flex-col items-center lg:flex-row justify-between">
            <div class="w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
                <p class="mb-2 block text-base font-medium tracking-tight text-indigo-500 uppercase">Take Action Now</p>
                <h2 class="text-4xl min-w-[400px] font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">Contact Us</h2>
            </div>
            <div class="w-full lg:w-1/2">
                <a href="mailto:info@ftgroup.ae" class="flex items-center justify-between w-full col-span-1 p-6 bg-white rounded-lg shadow">
                    <div class="flex flex-col pr-8">
                        <div class="relative pl-12">
                          <svg class="absolute left-0 w-8 h-10 text-indigo-500 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="3 3 16 16"><path d="m-17.918 9.601q3.111 0 5.235 2.143 2.124 2.143 2.124 5.178 0 1.707-.74 2.826-.721 1.119-2.105 1.119-1.422 0-2.124-1.385-.929 1.385-2.655 1.385-1.555 0-2.617-1.081-1.062-1.1-1.062-2.788 0-1.669 1.062-2.769 1.062-1.1 2.542-1.1 1.46 0 2.428 1.119h.076v-.853h1.366v4.95q0 .493.266.891.284.398.853.398 1.347 0 1.347-2.712 0-2.504-1.745-4.23-1.745-1.726-4.249-1.726-2.504 0-4.249 1.726-1.745 1.726-1.745 4.23 0 2.504 1.745 4.23 1.745 1.726 4.249 1.726 1.347 0 2.409-.531l.531 1.29q-1.328.607-2.94.607-3.148 0-5.292-2.124-2.143-2.143-2.143-5.197 0-3.035 2.143-5.178 2.162-2.143 5.292-2.143m-1.764 9.161q.683.664 1.631.664.948 0 1.612-.664.683-.664.683-1.764 0-1.1-.683-1.764-.664-.664-1.612-.664-.948 0-1.631.664-.664.664-.664 1.764 0 1.1.664 1.764" transform="matrix(1.09272 0 0 1.09272 30.63-7.492)"/></svg>
                          <p class="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">Email</p>
                        </div>

                        <h3 class="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                            info@ftgroup.ae
                        </h3>
                    </div>
                </a>
                <a href="tel:+97147777777" class="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
                    <div class="flex flex-col pr-10">
                        <div class="relative pl-12">
                            <svg class="absolute left-0 w-8 h-10 text-indigo-500 fill-current"  xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000">
                              <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M1916.4,4915.3c-904.5-385.6-1570.6-937.2-1766.9-1456.1c-44.4-116.9-51.4-182.3-49.1-462.8c2.3-607.7,149.6-1280.8,446.4-2033.4C951.1-60.6,1547.1-983.8,2409.6-1923.4c1537.9-1673.4,3604-2776.6,5377.9-2865.4c331.9-18.7,486.1,11.7,745.6,147.2c432.4,224.4,965.3,937.2,1285.5,1717.9c93.5,224.4,100.5,271.1,51.4,364.6C9830.2-2481.9,7673-948.7,7539.8-902c-95.8,30.4-203.3,21-306.2-30.4c-35.1-18.7-226.7-233.7-427.7-476.8c-409-497.8-465.1-542.2-691.8-544.6c-123.9,0-158.9,11.7-446.4,170.6C4372.8-1075,3809.6-511.7,3101.4,783.1c-158.9,289.8-170.6,322.6-170.6,448.8c2.3,224.4,53.8,289.8,544.6,691.8c238.4,194,451.1,388,476.8,427.7c49.1,86.5,56.1,271.1,14,355.3c-16.4,30.4-378.6,549.2-804,1149.9c-497.8,708.2-794.7,1107.8-836.7,1128.9C2229.6,5034.5,2175.8,5025.2,1916.4,4915.3z"/></g></g>
                            </svg>
                            <p class="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">Phone</p>
                        </div>
                        <h3 href="tel:+97147777777" class="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm">
                            +971 4777 7777
                        </h3>
                        <p class="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>
}