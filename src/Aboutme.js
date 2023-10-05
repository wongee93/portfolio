export default function Aboutme() {
    return (
        <>
            <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <div class="sm:col-span-1 sm:flex sm:items-center">
                    <img class="inline-block" src="/JihyunWon.jpg" alt="" width="110" height="auto" />
                </div>
                <div class="sm:flex sm:flex-col sm:justify-center">
                    <dt class="mt-6 mb-3 text-3xl font-semibold leading-6 text-gray-900 sm:mt-0 sm:col-span-1">원지현</dt>
                    <dd class="mt-3 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Front-end Developer</dd>
                </div>
            </div>

            <div class="mt-6 border-t border-gray-100">
                <div class="divide-y divide-gray-100">
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="mt-6 text-2xl font-semibold leading-6 text-gray-900 sm:mt-0 sm:col-span-1">Email address</dt>
                        <dd class="mt-1 text-xl leading-6 text-black-700 sm:col-span-2 sm:mt-0">won_gee@naver.com</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="mt-6 text-2xl font-semibold leading-6 text-gray-900 sm:mt-0 sm:col-span-1">Phone</dt>
                        <dd class="mt-1 text-xl leading-6 text-black-700 sm:col-span-2 sm:mt-0">010-5324-3448</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="mt-6 text-2xl font-semibold leading-6 text-gray-900 sm:mt-0 sm:col-span-1">Blog</dt>
                        <dd class="mt-1 text-xl leading-6 sm:col-span-2 sm:mt-0 text-blue-500"><a target="_blank" href="https://velog.io/@won_gee">https://velog.io/@won_gee</a></dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="mt-6 text-2xl font-semibold leading-6 text-gray-900 sm:mt-0 sm:col-span-1">Github</dt>
                        <dd class="mt-1 text-xl leading-6 sm:col-span-2 sm:mt-0 text-blue-500"><a target="_blank" href="https://github.com/wongee93">https://github.com/wongee93</a></dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="mt-6 text-2xl font-semibold leading-6 text-gray-900 sm:mt-0 sm:col-span-1">Introduce</dt>
                        <dd class="mt-1 text-lg leading-6 text-black-700 sm:col-span-2 sm:mt-0">
                            <p><span class="text-red-500 font-semibold">React, NextJS, Typescript</span>등 다양한 프론트엔드 기술들을 활용하여 프로젝트를 진행해오고있습니다.</p>
                            <p class="mt-3"><span class="text-red-500 font-semibold">CI/CD 구축</span>, <span class="text-red-500 font-semibold">다양한 상태관리 Tool</span>을 통해 예측 가능한 서비스를 만들고 효율적인 프로젝트 관리에 힘쓰고 있습니다. 또한 ChatGPT API를 사용하여 채팅페이지를 구축하는 등 <span class="text-red-500 font-semibold">OpenAPI 활용</span>도 적극적으로 공부 중입니다.</p>
                        </dd>
                    </div>
                </div>
            </div>
        </>
    )
}