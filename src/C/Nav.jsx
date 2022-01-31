
export default function Nav() {
  // const ref = useRef();
  // useEffect(() => {
  //   let on = false;
  //   function scroll(e) {
  //     const shoudlbeOn = window.pageYOffset > ref.current?.clientHeight;

  //     if (shoudlbeOn && !on) {
  //       on = shoudlbeOn;
  //       document.body.style.paddingTop = ref.current?.clientHeight + "px";
  //       ref.current.classList.add("fixed");
  //     }

  //     if (!shoudlbeOn && on) {
  //       on = false;
  //       document.body.style.paddingTop = 0;
  //       ref.current.classList.remove("fixed");
  //     }
  //   }
  //   window.addEventListener("scroll", scroll);
  //   return () => window.removeEventListener("scroll", scroll);
  // }, []);
  return (
    <>
      <nav className="sticky z-10 top-0 left-0 w-full px-6 md:px-12 lg:px-20 flex justify-between items-center bg-gray-50">
        <div className="container py-2 lg:py-0 relative flex">
        <a
          className="text-3xl top-0 left-4 font-bold leading-none"
          href="/"
          data-config-id="brand"
        >
          <img className=" h-12 md:h-24 " alt="" src={"/logo.png"} width="auto" />
        </a>
        <ul className="flex mx-auto items-center space-x-6">
          <li>
            <a
              data-to-scrollspy-id="about"
              className="text-sm"
              href="#about"
              data-config-id="link2"
            >
              About Us
            </a>
          </li>
          <li className="text-gray-800">
            <svg
              className="w-4 h-4 current-fill"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-config-id="auto-svg-3-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
          </li>
          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-500"
                href="#stocklots"
                data-to-scrollspy-id="stocklots"
              data-config-id="link3"
            >
              Stocklots
            </a>
          </li>
          <li className="text-gray-800">
            <svg
              className="w-4 h-4 current-fill"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-config-id="auto-svg-4-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
          </li>
          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-500"
                href="#contact"
                data-to-scrollspy-id="contact"
              data-config-id="link4"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <a
          className="hidden offlg:inline-block py-2 px-6 text-white hover:bg-blue-500 text-sm bg-blue-600 font-bold rounded-l-xl rounded-t-xl transition duration-200"
          href="mailto:info@ftinternational.ae"
          data-config-id="primary-action-nav"
        >
          Contact Us
          </a>
      </div>
      </nav>
    </>
  );
}
