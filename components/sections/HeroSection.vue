

<template>
    <div class="bg-[#f3f7fc] container-section h-[458px]">
        <img src="../../public/img/earth.png" class="absolute " alt="">
        <div class="relative isolate px-6 pt-14 lg:px-8">
            <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true">
                <div
                    class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]">
                </div>
            </div>
            <div class="contianer-info mx-auto py-32 sm:py-36 lg:py-48">
                <div class="text-center">
                    <h1 class="h1-add-font-family rtl:leading-[1.1]	text-4xl font-bold w-fit-content text-transparent  sm:text-[56px] rtl:pb-5 pb-8">
                        {{ $t('Discover Our Paradise Worlds,') }}</h1>
                    <h1 class="h1-add-font-family rtl:leading-[1.1] text-4xl font-bold w-fit-content text-transparent  sm:text-[56px] pb-5">
                        {{ $t('Travel Anywhere Now!') }}</h1>

                </div>
            </div>
        </div>
    </div>


    <div class="mx-auto w-[90%] mb-10 bg-white shadow-md custom-radius p-6 border z-40 relative">

        <div class="hidden sm:flex  justify-center gap-10 items-center mb-4 w-[319px] h-[32px] m-auto">
            <label class="inline-flex items-center">
                <input type="radio" class="custom-radio" name="tripType" value="one-way">
                <span class="rtl:mr-2 ml-2 font-semibold	text-[#333333] focus:outline-none focus:ring-0">{{ $t('One Way') }}</span>
            </label>
            <label class="inline-flex items-center">
                <input type="radio" class="custom-radio" name="tripType" value="round-trip" checked>
                <span class="rtl:mr-2 ml-2 font-semibold	text-[#333333] focus:outline-none focus:ring-0 ">{{ $t('Round Trip') }}</span>
            </label>
        </div>

        <div>

            <form class="sm:hidden flex max-w-32 mx-auto">
                <select
                    class="ml-2 font-semibold rtl:ml-0	text-[#333333] focus:outline-none focus:ring-0 bg-white shadow-none border-0 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-0 block w-full p-2.5">
                    <option selected>{{ $t('Round Trip') }}</option>
                    <option value="US">{{ $t('One Way') }}</option>
                </select>
            </form>

        </div>

        <div class="line w-full h-[1px] bg-[#ffdfa6] mx-auto my-8"></div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 m-auto lg:grid-cols-6  gap-4">
            <div>
                <div class="flex items-center gap-2 mb-3">
                    <img src="../../public/img/fly.png" class="w-[26.63px] h-[23.23px]" alt="">
                    <label class="font-bold text-[#333333]">{{ $t('From') }}</label>
                </div>
                <input class="font-light text-[15px] text-[#7C8DB0] mt-[20px] focus:border-none focus:outline-none"
                    :placeholder="$t('Flight from?')">
            </div>
            <div>
                <div class="flex items-center gap-2 mb-3">
                    <img src="../../public/img/fly-to.png" class="w-[26.63px] h-[23.23px]" alt="">
                    <label class="font-bold text-[#333333]">{{ $t('To') }}</label>
                </div>
                <input class="font-light text-[15px] text-[#7C8DB0] mt-[20px] focus:border-none focus:outline-none"
                    :placeholder="$t('Where to?')">
                <div class="w-full md:w-[80%] h-[2px] bg-[#EAA121] mt-2"></div>
            </div>
            <div>
                <div class="flex items-center gap-2 mb-3">
                    <img src="../../public/img/depart.png" class="w-[26.63px] h-[23.23px]" alt="">
                    <label class="font-bold text-[#333333]">{{ $t('Depart') }}</label>
                </div>
                <input type="date"
                    class="border-0 font-light text-[15px] text-[#7C8DB0] mt-3 focus:border-0 focus:outline-0 uppercase"
                   placeholder="DD/MM/YYYY">

            </div>
            <div>
                <div class="flex items-center gap-2 mb-3">
                    <img src="../../public/img/depart.png" class="w-[26.63px] h-[23.23px]" alt="">
                    <label class="font-bold text-[#333333]">{{ $t('Return') }}</label>
                </div>
                    <input type="date"
                        class="border-0 font-light text-[15px] text-[#7C8DB0] mt-3 focus:border-0 focus:outline-0 uppercase"
                     placeholder="DD/MM/YYYY">

                </div>

            <div>
                <div class="flex items-center gap-2 mb-.5">
                    <img src="../../public/img/cabin.png" class="w-[26.63px] h-[23.23px]" alt="">
                    <label class="font-bold text-[#333333] whitespace-nowrap">{{ $t('Cabin Class & Travelers') }}</label>
                </div>

                    <form class="max-w-sm mx-0 sm:mx-auto">

                        <div class="dropdown relative">
                            <div @click="seen = !seen"
                                class="select bg-white border-none mt-[26px] text-[#7C8DB0] text-sm rounded-lg focus:ring-0 focus:border-0 pl-0 block w-full p-2.5 cursor-pointer dropbtn flex justify-between items-center">
                                {{ $t('1 adult, Economy') }}
                                <i class="hidden lg:block fas fa-chevron-down text-[11px] text-black font-bold"></i>
                            </div>

                            <div v-show="seen"
                                class="dropdown-content block absolute bg-white w-[100%] rounded-lg shadow-md mt-2 z-10">
                                <a href="#"
                                    class="flex text-[#7C8DB0] text-[14px] font-light items-center py-[12px] px-[16px] hover:bg-gray-100">
                                    <img src="../../public/img/adult.png" class="w-[18px] h-[18px] mr-2">
                                    {{ $t('1 adult, Economy') }}
                                </a>
                                <div class="h-[1px] w-full bg-[#88909917]"></div>

                                <a href="#"
                                    class="flex text-[#7C8DB0] text-[14px] font-light items-center py-[12px] px-[16px] hover:bg-gray-100">
                                    <img src="../../public/img/adult.png" class="w-[18px] h-[18px] mr-2">
                                    {{ $t('2 adult, Class') }}
                                </a>
                                <div class="h-[1px] w-full bg-[#88909917]"></div>

                                <a href="#"
                                    class="flex text-[#7C8DB0] text-[14px] font-light items-center py-[12px] px-[16px] hover:bg-gray-100">
                                    <img src="../../public/img/adult.png" class="w-[18px] h-[18px] mr-2">
                                    {{ $t('2 adult, Economy') }}
                                </a>
                            </div>
                        </div>

                    </form>

            </div>
            <div class="flex justify-start lg:justify-center items-center">
                <button
                    class="w-full sm:w-[64px] h-[48px] flex justify-center items-center rounded sm:bg-[#EAA121] bg-[#183867]   search"><img
                        src="../../public/img/search.png" alt=""> <span
                        class="text-white text-[18px] sm:hidden block mx-2">{{ $t('Search') }}</span></button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const seen = ref(false)
</script>


<style scoped>
[type=date]:focus {
    --tw-ring-color: transparent !important;
}

[type=radio],
[type=radio]:focus {
    color: transparent !important;
    --tw-ring-color: transparent !important;
    background-color: transparent !important;
}

.custom-radio {
    appearance: none;
    width: 24px;
    height: 24px;
    border: 2px solid #E5E7EB;
    border-radius: 50%;
    position: relative;
    outline: none;
}

.custom-radio:checked {
    border-color: #EAA121;
}

.custom-radio:checked::before {
    content: '';
    width: 12px;
    height: 12px;
    background-color: #EAA121;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.h1-add-font-family {
    font-family: Playfair Display;
    background: linear-gradient(93.37deg, #183867 28.05%, #EAA121 44.33%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}

.custom-radius {
    border-radius: 15px 1px;
}

@media (max-width: 805px) {
    .contianer-info {
        padding-top: 50px;
    }

    .custom-radius {
        border-radius: 15px;
    }

    .h1-add-font-family {
        font-size: 24px;
        padding-bottom: 1px;
    }
}

@media (max-width:1024px) {
    .container-section {
        height: 396px;
    }
}

@media (max-width:805px) {
    .container-section {
        height: 240px;
    }
}
</style>
