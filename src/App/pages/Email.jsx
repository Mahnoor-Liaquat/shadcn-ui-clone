import React from 'react';
import { HiOutlineInbox, HiOutlinePencilAlt, HiOutlinePaperAirplane, HiOutlineExclamationCircle, HiOutlineTrash, HiOutlineArchive } from 'react-icons/hi';
import { TiSocialGithub, TiShoppingCart } from "react-icons/ti";
import { MdForum, MdSystemUpdate  } from "react-icons/md";



const Email = () => {
  return (
    <div className="flex">
      <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
        <div>
          <div className="inline-flex size-16 items-center justify-center">
            <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">M</span>
          </div>

          <div className="border-t border-gray-100">
            <div className="px-2">
              <div className="py-4">
                <a href="#" className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700">
                  <HiOutlineInbox className="size-5 opacity-75" />
                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Inbox
                  </span>
                </a>
              </div>

              <ul className="space-y-1 border-t border-gray-100 pt-4">
                <li>
                  <a href="#" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                    <HiOutlinePencilAlt className="size-5 opacity-75" />
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Drafts
                    </span>
                  </a>
                </li>

                <li>
                  <a href="#" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                    <HiOutlinePaperAirplane className="size-5 opacity-75" />
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Sent
                    </span>
                  </a>
                </li>

                <li>
                  <a href="#" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                    <HiOutlineExclamationCircle className="size-5 opacity-75" />
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Junk
                    </span>
                  </a>
                </li>

                <li>
                  <a href="#" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                    <HiOutlineTrash className="size-5 opacity-75" />
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Trash
                    </span>
                  </a>
                </li>

                <li>
                  <a href="#" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                    <HiOutlineArchive className="size-5 opacity-75" />
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Archive
                    </span>
                  </a>
                </li>
                <hr/>
                <li>
                  <a href="#" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                    <TiSocialGithub className="size-5 opacity-75" />
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Social
                    </span>
                  </a>
                </li>

                <li>
                  <a href="#" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                    <MdSystemUpdate className="size-5 opacity-75" />
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Updates
                    </span>
                  </a>
                </li>

                <li>
                  <a href="#" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                    <MdForum className="size-5 opacity-75" />
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Forums
                    </span>
                  </a>
                </li>

                <li>
                  <a href="#" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                    <TiShoppingCart className="size-5 opacity-75" />
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Shopping
                    </span>
                  </a>
                </li>

                <li>
                  <a href="#" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                    <HiOutlineArchive className="size-5 opacity-75" />
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Promotions
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-screen flex-1 justify-between border-e bg-white">
        <div className="px-4 py-6">
          <ul className="mt-14 space-y-1">
            <li>
              <a href="#" className="block rounded-lg bg-gray-700 px-4 py-2 text-sm font-medium text-gray-200">
                Inbox &nbsp; 128
              </a>
            </li>

            <li>
                
            <a href="#" className="block rounded-lg  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700">
                Drafts &nbsp; 9
              </a>
                 
            </li>

            <li>
              <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                Sent
              </a>
            </li>

            <li>
              <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                Junk &nbsp; 23
              </a>
            </li>

            <li>
            <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                Trash
              </a>

            </li>

            <li>
            <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                Archive
              </a>

            </li>
            <hr />

            <li>
              <a href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 font-medium hover:bg-gray-100 hover:text-gray-7000">
                Social &nbsp; 972
              </a>
            </li>

            <li>
                
            <a href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 font-medium  hover:bg-gray-100 hover:text-gray-700">
                Updates &nbsp; 342
              </a>
                 
            </li>

            <li>
              <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                Forums &nbsp; 128
              </a>
            </li>

            <li>
              <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                Shopping &nbsp; 8
              </a>
            </li>

            <li>
            <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                Promotions  &nbsp; 21
              </a>
            </li>
          </ul>
        </div>
      </div>

        <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">Mahnoor Liaquat Ali</span>
          <span class="mt-1 text-gray-500 text-sm">3 July 2024</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Great Customization</h2>
          <p class="leading-relaxed">Shadcn offers fantastic customization options that allowed us to easily adapt the components to our design needs..</p>
          <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">Mudassar Liaquat Ali</span>
          <span class="mt-1 text-gray-500 text-sm">1 July 2024</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Accessible Components</h2>
          <p class="leading-relaxed">The focus on accessibility in shadcn ensures our application is usable by a wide audience, which is a huge plus.</p>
          <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">Muzammil Liaquat Ali</span>
          <span class="text-sm text-gray-500">30 Jun 2024</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Comprehensive Documentation</h2>
          <p class="leading-relaxed">The documentation provided by shadcn is thorough and very helpful for integrating and customizing components..</p>
          <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default Email;
