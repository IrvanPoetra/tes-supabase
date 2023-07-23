export default function Header() {
  return (
    <header>
      <div class="flex justify-end items-center py-6 px-10 bg-indigo-600">
        
        <div class="lg:block">
          <ul class="flex items-center w-full">
            <li class="group pl-6">
              <span class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  About Me
                </span>
              <span class="block h-0.5 w-full group-hover:bg-yellow">
              </span>
            </li>
            <li class="group pl-6">
              <span class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  Gallery
                </span>
              <span class="block h-0.5 w-full group-hover:bg-yellow">
              </span>
            </li>
            <li class="group pl-6">
              <span class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  Contact
                </span>
              <span class="block h-0.5 w-full group-hover:bg-yellow">
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
