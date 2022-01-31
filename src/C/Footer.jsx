export default function Footer(){
  return <footer class="font-sans bg-black text-white py-8" >
    <div class="container mx-auto">
      <ul class="text-sm text-gray-400 list-none p-0 flex items-center">
        <li> <a href="/" class="block mr-4 w-16 h-18">
            <img src="/logo.jpeg" class="" alt="logo" />
        </a>
        </li>
        <li className="flex-1">
          <p className="p-4 flex-1 text-left">
          Preatoni Tower, <br />
          Jumeirah Lakes Towers
          <br />
            Office 2011 Dubai-UAE
          </p>
        </li>
        <li>
          <p class="block py-2 px-3 text-gray-400 text-xs"> Telephone: <a href="tel:+97147777777">+971 4777 7777</a></p>
          <p class="block py-2 px-3 text-gray-400 text-xs"> Email: <a href="mailto:info@ftgroup.ae">ft@ftgroup.com</a></p>
          <p class="block py-2 px-3 text-gray-400 text-xs"> ©{(new Date()).getFullYear()} FT Group.   All rights reserved.</p>
        </li>  
      </ul>    
    </div>
  </footer>
}