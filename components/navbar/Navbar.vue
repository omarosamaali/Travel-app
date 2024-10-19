<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const seen = ref(false)
const currentLanguage = ref('en') // البداية باللغة العربية

const egFlag = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/2560px-Flag_of_the_United_Kingdom_%283-5%29.svg.png'
const ukFlag = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1024px-Flag_of_Egypt.svg.png'

function switchLanguage(lang) {
    currentLanguage.value = lang
    locale.value = lang  // تحديث لغة التطبيق فعلياً
    seen.value = false
}
</script>

<template>
    <nav class="bg-[#f3f7fc] fixed w-full top-0 start-0 z-50">
        <div
            class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 flex-d flex-row-reverse	md:flex-row	">
            <a href="#"
                class="md:mx-0 mx-auto width-[204px] flex items-center space-x-3 pr-[20px] md:pr-[0] rtl:space-x-reverse">
                <img src="../../public/img/logo.png" class="w-[140px] h-[28.13px] md:h-[41px] md:width-[204px]"
                    alt="Flowbite Logo" />
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button"
                    class="hidden md:block text-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center bg-[#EAA121] hover:bg-[#c18214">
                    {{ $t('Sign In') }}
                </button>

                <button data-collapse-toggle="navbar-sticky" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:text-[#EAA121] focus:bg-[#DBECFD]"
                    aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>

            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul
                    class="items-center flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-[#f3f7fc] dark:border-gray-700">
                    <div class="dropdown relative">
                        <div @click="seen = !seen"
                            class="w-[56px] flex select bg-white border-none  text-[#7C8DB0] text-sm rounded-lg focus:ring-0 focus:border-0 gap-2 block w-full p-2.5 cursor-pointer dropbtn flex justify-center items-center">
                            <img :src="currentLanguage === 'en' ? ukFlag : egFlag" class="w-[18px] h-[18px] mr-2">
                            <span>{{ currentLanguage === 'en' ? 'Ar' : 'En' }}</span>
                            <i class="hidden lg:block fas fa-chevron-down text-[11px] text-black font-bold"></i>
                        </div>

                        <div v-show="seen"
                            class="dropdown-content block absolute bg-white w-[100%] rounded-lg shadow-md mt-2 z-10">
                            <button @click="switchLanguage('en')"
                                class="w-full gap-2 justify-center flex text-[#7C8DB0] text-[14px] font-light items-center py-[12px]  hover:bg-gray-100">
                                <img :src="ukFlag" class="w-[18px] h-[18px] mr-2">
                                Ar
                            </button>
                            <div class="h-[1px] w-full bg-[#88909917]"></div>

                            <button @click="switchLanguage('ar')"
                                class="w-full gap-2 justify-center flex text-[#7C8DB0] text-[14px] font-light items-center py-[12px]  hover:bg-gray-100">
                                <img :src="egFlag" class="w-[18px] h-[18px] mr-2">
                                En
                            </button>
                            <div class="h-[1px] w-full bg-[#88909917]"></div>
                        </div>
                    </div>

                    <li>
                        <a href="#"
                            class="block py-2 px-3 text-[16px] text-[#EAA121] rounded md:bg-transparent md:text-[#EAA121] md:p-0 md:dark:text-[#EAA121]"
                            aria-current="page">{{ $t('Home') }}</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-[#333333] font-normal md:p-0">{{ $t('Promo') }}</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-[#333333] font-normal md:p-0">{{ $t('My Booking') }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>
