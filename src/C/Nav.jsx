import { useEffect, useRef, useState } from "react";


export default function Nav() {
  const ref = useRef({}).current;
  const ref2 = useRef(null);
  const [active, setActive] = useState(0);
  
  useEffect(() => {
    document.body.style.paddingTop = ref2.current?.clientHeight + 'px';

    function scroll(e) {
      document.body.style.paddingTop = ref2.current.clientHeight + 'px';
      if (!ref.about) ref.about = document.getElementById("about");
      if (!ref.stocklots) ref.stocklots = document.getElementById("stocklots");
      if(!ref.contact)ref.contact = document.getElementById("contact");
      
      const currentLocation = window.pageYOffset + (window.innerHeight*0.2);
      
      if (currentLocation > ref.contact?.offsetTop) {
        setActive(2)
      } else if (currentLocation > ref.stocklots?.offsetTop) {
        setActive(1)
      } else  { 
        setActive(0)
      }
    }
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <>
      <nav ref={ref2} className="fixed z-10 top-0 left-0 w-full px-6 md:px-12 lg:px-20 flex justify-between items-center bg-gray-50">
        <div className="container py-2 lg:py-0 relative flex flex-col md:flex-row">
        <a
          className="text-3xl block font-bold leading-none"
          href="/"
          data-config-id="brand"
        >
          <img className="h-16 mb-4 md:h-24 mx-auto " alt="" src={"/logo.png"} width="auto" />
        </a>
        <ul className="flex main-nav mx-auto items-center space-x-6">
          <li>
            <a
              className={"text-sm "+(active===0?"active":"")}
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
              className={"text-sm "+(active===1?"active":"")}
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
            <a className={"text-sm text-gray-800 "+ (active===2?"active":"")} href="#contact" >
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
