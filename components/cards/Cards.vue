<template>
    <section class="bg-[#f3f7fc] py-8 antialiased md:py-12">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h2 class="font-bold text-[36px] text-[#183867] mb-2">{{ $t('Popular Destinations') }}</h2>
            <p class="font-normal text-[16px] text-[#183867]">{{ $t('Vacations to make your experience enjoyable in Indonesia!') }}</p>
            <div class="mb-4 grid h-auto xl:h-[332px] gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4 mt-10">

                <div
                    class="hover:border-[#f0a41f] h-[332px] hover:bg-[#f3f1ec] transition rounded-lg border border-white bg-[#F0F0F073] pt-2 shadow-sm ">
                    <img class="mx-auto h-[180px] w-full" src="../../public/img/card.png" alt="" />
                    <div class="pl-3 mb-3 flex items-center">
                        <img class="w-[14px] h-[14px] mr-2" src="../../public/img/Location.png" alt="">
                        <span class="text-[13px] text-[#8F8F8F]">{{ $t('Manggarai Barat') }}</span>
                    </div>
                    <div class="px-3">
                        <h3 class="text-[#183867] font-bold text-[16px] mb-3 ">{{ $t('Flores Road Trip 3D2N') }}</h3>
                        <p class="text-gray-600 font-normal text-[14px] mb-4">{{ $t('3 Days') }}</p>
                        <span class="text-[#F0A41F] font-bold text-[14px]">{{ $t('$375') }}</span>
                    </div>
                </div>

                <div
                    class="hover:border-[#f0a41f] h-[332px] hover:bg-[#f3f1ec] transition rounded-lg border border-white bg-[#F0F0F073] pt-2 shadow-sm ">
                    <img class="mx-auto h-[180px] w-full" src="../../public/img/card-2.png" alt="" />
                    <div class="pl-3 mb-3 flex items-center">
                        <img class="w-[14px] h-[14px] mr-2" src="../../public/img/Location.png" alt="">
                        <span class="text-[13px] text-[#8F8F8F]">{{ $t('Bogor') }}</span>
                    </div>
                    <div class="px-3">
                        <h3 class="text-[#183867] font-bold text-[16px] mb-3">{{ $t('Forrester Glamping Co Bogor') }}</h3>
                        <p class="text-gray-600 font-normal text-[14px] mb-4">{{ $t('1 Days') }}</p>
                        <span class="text-[#F0A41F] font-bold text-[14px]">{{ $t('$375') }}</span>
                    </div>
                </div>

                <div class="rounded-lg border border-[#F0A41F] bg-[#EAA12112] pt-2 shadow-sm ">
                    <img class="mx-auto h-[180px] w-full" src="../../public/img/card-3.png" alt="" />
                    <div class="pl-3 mb-3 flex items-center">
                        <img class="w-[14px] h-[14px] mr-2" src="../../public/img/Location.png" alt="">
                        <span class="text-[13px] text-[#8F8F8F]">{{ $t('Jakarta') }}</span>
                    </div>
                    <div class="px-3">
                        <h3 class="text-[#183867] font-bold text-[16px] w-[72%] mb-5">{{ $t('Paket Tiket Pesawat Jakarta Bali') }}</h3>
                        <span class="text-[#F0A41F] font-bold text-[14px]">{{ $t('$375') }}</span>
                    </div>
                </div>

                <div
                    class="hover:border-[#f0a41f] h-[332px] hover:bg-[#f3f1ec] transition rounded-lg border border-white bg-[#F0F0F073] pt-2 shadow-sm ">
                    <img class="mx-auto h-[180px] w-full" src="../../public/img/card.png" alt="" />
                    <div class="pl-3 mb-3 flex items-center">
                        <img class="w-[14px] h-[14px] mr-2" src="../../public/img/Location.png" alt="">
                        <span class="text-[13px] text-[#8F8F8F]">{{ $t('Kota Semarang') }}</span>
                    </div>
                    <div class="px-3">
                        <h3 class="text-[#183867] font-bold text-[16px] mb-3">{{ $t('Desa Wisata Kandri') }}</h3>
                        <p class="text-gray-600 font-normal text-[14px] mb-4">{{ $t('14 Days') }}</p>
                        <span class="text-[#F0A41F] font-bold text-[14px] pt-3 mt-3">{{ $t('$375') }}</span>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>
