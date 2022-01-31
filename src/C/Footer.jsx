export default function Footer(){
  return <footer class="font-sans bg-black text-white py-8" >
    <div class="container mx-auto">
      <ul class="text-sm text-gray-400 list-none p-0 flex items-center justify-center lg:justify-end">
        <li>
          <p class="block py-2 px-3 text-gray-400 text-xs"> ©{(new Date()).getFullYear()} FT International.   All rights reserved.</p>
        </li>  
      </ul>    
    </div>
  </footer>
}