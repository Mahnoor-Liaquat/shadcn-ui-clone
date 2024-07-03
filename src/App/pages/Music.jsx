import React from 'react'

const Music = () => (
  <div>
   
       <div className="text-center mt-4">
      <h3 className="text-gray-900 text-xl font-semibold hover:bg-gray-200 hover:text-gray-800 py-2 px-6 rounded-md cursor-pointer">
        Listen Now
      </h3>
    </div>
    <div className="h-screen flex items-center justify-center">
      <div class="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl">
    

        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <a href="#">
                <img src="https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I" class="w-96 h-auto" />
              </a>
            </div>
            <div class="flex flex-row mt-2 gap-2">
              <a href="#">
                <img src="https://picsum.photos/seed/1/40/40" class="rounded-full max-h-10 max-w-10" />
              </a>
              <div class="flex flex-col">
                <a href="#">
                  <p class="text-gray-100 text-sm font-semibold">Learn Tailwind CSS</p>
                </a>
                <p class="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
              </div>
            </div>
          </card>
        </div>

        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <a href="#">
                <img src="https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so" class="w-96 h-auto" />
              </a>
            </div>
            <div class="flex flex-row mt-2 gap-2">
              <a href="#">
                <img src="https://picsum.photos/seed/4/40/40" class="rounded-full max-h-10 max-w-10" />
              </a>
              <div class="flex flex-col">
                <a href="#">
                  <p class="text-gray-100 text-sm font-semibold">Learn Material UI</p>
                </a>
                <p class="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
              </div>
            </div>
          </card>
        </div>

        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <a href="#">
                <img src="https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU" class="w-96 h-auto" />
              </a>
            </div>
            <div class="flex flex-row mt-2 gap-2">
              <a href="#">
                <img src="https://picsum.photos/seed/88/40/40" class="rounded-full max-h-10 max-w-10" />
              </a>
              <div class="flex flex-col">
                <a href="#">
                  <p class="text-gray-100 text-sm font-semibold">Learn Shadcn</p>
                </a>
                <p class="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
              </div>
            </div>
          </card>
        </div>

        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <a href="#">
                <img src="https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o" class="w-96 h-auto" />
              </a>
            </div>
            <div class="flex flex-row mt-2 gap-2">
              <a href="#">
                <img src="https://picsum.photos/seed/57/40/40" class="rounded-full max-h-10 max-w-10" />
              </a>
              <div class="flex flex-col">
                <a href="#">
                  <p class="text-gray-100 text-sm font-semibold">Learn Hyper Ui</p>
                </a>
                <p class="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
              </div>
            </div>
          </card>
        </div>
      
      </div>
    </div>
  </div>
);

export default Music;