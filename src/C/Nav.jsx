import { useEffect, useRef } from "react";

export default function Nav() {
  const ref = useRef();
  useEffect(() => {
    let on = false;
    function scroll(e) {
      const shoudlbeOn = window.pageYOffset > ref.current?.clientHeight;

      if (shoudlbeOn && !on) {
        on = shoudlbeOn;
        document.body.style.paddingTop = ref.current?.clientHeight + "px";
        ref.current.classList.add("fixed");
      }

      if (!shoudlbeOn && on) {
        on = false;
        document.body.style.paddingTop = 0;
        ref.current.classList.remove("fixed");
      }
    }
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <>
      <nav
        ref={ref}
        className="relative top-0 left-0 w-full px-6 py-6 flex justify-between items-center bg-gray-50"
        data-config-id="toggle-mobile"
        data-config-target=".navbar-menu"
        data-config-className="hidden"
      >
        <a
          className="text-3xl font-bold leading-none"
          href="/"
          data-config-id="brand"
        >
          <img className="h-12" alt="" src={"/logo.jpeg"} width="auto" />
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-gray-400 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              data-config-id="auto-svg-1-1"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a
              className="text-sm text-blue-600 font-bold"
              href="#"
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
              href="#"
              data-config-id="link3"
            >
              Services
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
              href="#"
              data-config-id="link4"
            >
              Platform
            </a>
          </li>
          <li className="text-gray-800">
            <svg
              className="w-4 h-4 current-fill"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-config-id="auto-svg-5-1"
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
              href="#"
              data-config-id="link5"
            >
              Products
            </a>
          </li>
        </ul>
        <a
          className="hidden lg:inline-block py-2 px-6 text-white hover:bg-blue-500 text-sm bg-blue-600 font-bold rounded-l-xl rounded-t-xl transition duration-200"
          href="mailto:info@ftgroup.ae"
          data-config-id="primary-action-nav"
        >
          Contact Us
        </a>
      </nav>
    </>
  );
}
