export default function Footer(){
  return <footer class="font-sans bg-black text-white py-8" >
    <div class="container mx-auto">
      <ul class="text-sm text-gray-400 list-none p-0 flex items-center">
        <li>
          <a href="/" class="block mr-4 w-16 h-18">
            
        </a>
        </li>
        <li className="flex-1">
          <p className="p-4 flex-1 text-left hidden">
          Preatoni Tower, <br />
          Jumeirah Lakes Towers
          <br />
            Office 2011 Dubai-UAE
          </p>
        </li>
        <li>
          <p class="block py-2 px-3 text-gray-400 text-xs"> ©{(new Date()).getFullYear()} FT International.   All rights reserved.</p>
        </li>  
      </ul>    
    </div>
  </footer>
}