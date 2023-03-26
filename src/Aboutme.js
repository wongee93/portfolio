export default function Aboutme() {
    return (
        <>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
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
                            <p><span class="text-red-500 font-semibold">3년간 IT솔루션 회사에서 재직</span>하였습니다.</p>
                            <p class="mt-3">영업 직무를 수행하며 경청을 통해 고객과 회사간 중간점을 찾아야 했고 다양한 부서와 고객간의 소통을 도모하였습니다.</p>
                            <p class="mt-3 text-gray-500">
                                - 현대기아차 : DataFeeding API 제공(일일 원자재 시황, 주요 원자재 가격 전망 등)
                            </p>
                            <p class="text-gray-500">
                                - 중소기업을 위한 Lite 버전 커스텀 서비스 제공 등
                            </p>
                            <p class="mt-3">
                                많은 시간 IT팀과의 소통을 통해 고객의 니즈가 실질적인 서비스로 만들어지는 과정에 흥미를 느끼게 되었고 서비스를 직접 만드는 개발자의 꿈을 키웠습니다.
                            </p>
                            <p>
                                이후, 코드스테이츠에서 주관하는 프론트엔드 부트캠프를 이수 하였으며 기본적인 <span class="text-red-500 font-semibold">HTML, CSS, JS, React, NextJS, Typescript</span>를 활용하여 프로젝트를 진행해왔습니다.
                                다양하고 새로운 기술에 대한 흥미를 기반으로 계속해서 새로운 기술을 탐구하고 있습니다.
                            </p>
                            <p class="mt-3 text-gray-500">
                                - 블로그 : 기초프로그래밍, 알고리즘 내용 정리
                            </p>
                            <p class="text-gray-500">
                                - 깃허브 : 팀프로젝트 외 다양한 프로젝트 진행 중
                            </p>
                        </dd>
                    </div>
                </div>
            </div>
        </>
    )
}