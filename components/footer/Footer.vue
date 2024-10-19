<template>
    <footer class="bg-white">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
                <div class="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 md:grid-cols-4 w-full">

                    <div class="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" class="flex items-center">
                            <img src="../../public/img/logo.png" class="h-[41px] w-[204px] me-3" alt="Logo" />
                        </a>
                    </div>
                    <div>
                        <h2 class="mb-6 text-[18px] font-bold text-[#6E7491]">{{ $t('About') }}</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4 text-[16px] text-[#7C8DB0] font-normal">
                                <a href="https://flowbite.com/" class="hover:underline">{{ $t('About GooseFlight') }}</a>
                            </li>
                            <li class="mb-4 text-[16px] text-[#7C8DB0] font-normal">
                                <a href="https://flowbite.com/" class="hover:underline">{{ $t('How it works') }}</a>
                            </li>

                            <li class="mb-4 text-[16px] text-[#7C8DB0] font-normal">
                                <a href="https://flowbite.com/" class="hover:underline">{{ $t('Blog') }}</a>
                            </li>

                            <li class="mb-4 text-[16px] text-[#7C8DB0] font-normal">
                                <a href="https://flowbite.com/" class="hover:underline">{{ $t('Forum') }}</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-[18px] font-bold text-[#6E7491]">{{ $t('Support') }}</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4 text-[16px] text-[#7C8DB0] font-normal">
                                <a href="https://flowbite.com/" class="hover:underline">{{ $t('Help Center') }}</a>
                            </li>
                            <li class="mb-4 text-[16px] text-[#7C8DB0] font-normal">
                                <a href="https://flowbite.com/" class="hover:underline">{{ $t('Contact us') }}</a>
                            </li>

                            <li class="mb-4 text-[16px] text-[#7C8DB0] font-normal">
                                <a href="https://flowbite.com/" class="hover:underline">{{ $t('Privacy policy') }}</a>
                            </li>

                            <li class="mb-4 text-[16px] text-[#7C8DB0] font-normal">
                                <a href="https://flowbite.com/" class="hover:underline">{{ $t('Terms of service') }}</a>
                            </li>

                            <li class="mb-4 text-[16px] text-[#7C8DB0] font-normal">
                                <a href="https://flowbite.com/" class="hover:underline">{{ $t('Trust and safety') }}</a>
                            </li>

                            <li class="mb-4 text-[16px] text-[#7C8DB0] font-normal">
                                <a href="https://flowbite.com/" class="hover:underline">{{ $t('Accessibility') }}</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 class="mb-6 text-[18px] font-bold text-[#6E7491]">{{ $t('Get the app') }}</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4 text-[16px] text-[#7C8DB0] font-normal">
                                <a href="https://flowbite.com/" class="hover:underline">{{ $t('Tripma for Android') }}</a>
                            </li>
                            <li class="mb-4 text-[16px] text-[#7C8DB0] font-normal">
                                <a href="https://flowbite.com/" class="hover:underline">{{ $t('Tripma for iOS') }}</a>
                            </li>

                            <li class="mb-4 text-[16px] text-[#7C8DB0] font-normal">
                                <a href="https://flowbite.com/" class="hover:underline">{{ $t('Mobile site') }}</a>
                            </li>

                            <li class="mb-4">
                                <img src="../../public/img/app-store.png" class="w-[135px] h-[40px]" alt="App Store" />
                            </li>


                            <li class="mb-4">
                                <img src="../../public/img/google-play.png" class="w-[135px] h-[40px]" alt="Google Play" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
