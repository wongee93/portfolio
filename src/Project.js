export default function Project() {
    return (
        <>
            <div class="px-4 py-2 4xs:grid 4xs:grid-cols-1 4xs:gap-1 4xs:px-10 rounded-3xl mb-10 border border-gray-400">
                <div class="sm:col-span-1 sm:flex sm:justify-center">
                    <div class="flex justify-center">
                        <img class="inline-block self-center" src="/class4989.png" alt="" width="350" />
                    </div>
                    <div class="ml-10 sm:col-span-2 sm:flex sm:flex-col sm:justify-center">
                        <div class="text-gray-900 font-bold text-3xl pt-5 pb-5 mt-10 mb-2">CLASS 4989</div>
                        <p class="text-black-700 text-lg text-base">
                            Class4989는 ‘누구나 쉽게 배움을 공유하고 배울 수 있다.’ 는 취지를 기반으로 한 교육 모바일 웹 앱 서비스입니다.
                        </p>
                        <p class="text-gray-600 text-base mt-4">
                            - 6인 팀프로젝트
                        </p>
                        <p class="text-gray-600 text-base mt-2">
                            - 모바일 기반 웹 앱
                        </p>
                        <p class="text-gray-600 text-base mt-2">
                            - <span class="text-red-600 font-semibold">Next.js의 SSG</span> 활용
                        </p>
                        <p class="text-gray-600 text-base mt-2">
                            - <span class="text-red-600 font-semibold">검색엔진 최적화(SEO)</span>
                        </p>
                        <p class="text-gray-600 text-base mt-2">
                            - Webhook을 활용한 에러 핸들링 기능 구현
                        </p>
                        <p class="text-gray-600 text-base mt-2">
                            - Figma UI 기획
                        </p>
                        <p class="text-gray-600 text-base mt-2">
                            - 로그인/로그아웃
                        </p>
                        <p class="text-gray-600 text-base mt-2">
                            - 카테고리 필터링/검색 화면
                        </p>
                        <p class="text-gray-600 text-base mt-2">
                            - 내 클래스/내가올린 클래스 화면
                        </p>
                        <p class="text-gray-600 text-base mt-2">
                            - 커스텀 Tab 컴포넌트
                        </p>
                        <div class="mt-6 ml-2 sm:flex sm:flex-col sm:justify-center">
                            <span class="text-m font-bold text-blue-700 mr-2 mb-2"><a target="_blank" href="https://class4989-sage.vercel.app/">👉 배포 링크 바로가기</a></span>
                            <span class="text-m font-bold text-blue-700 mr-2 mb-2"><a target="_blank" href="https://github.com/wongee93/seb40_main_008">👉 깃허브 바로가기</a></span>
                            <span class="text-m font-bold text-blue-700 mr-2 mb-2"><a target="_blank" href="https://www.notion.so/Class4989-dcf13d74d334423a8b1987b1ef551137">👉 포트폴리오 바로가기</a></span>
                        </div>
                        <div class="mt-5 mb-10">
                            <span class="inline-block bg-yellow-200 rounded-full px-6 py-3 text-m font-semibold text-gray-700 mr-2 mb-2">#NextJS</span>
                            <span class="inline-block bg-yellow-200 rounded-full px-6 py-3 text-m font-semibold text-gray-700 mr-2 mb-2">#Typescript</span>
                            <span class="inline-block bg-yellow-200 rounded-full px-6 py-3 text-m font-semibold text-gray-700 mr-2 mb-2">#AWS</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="px-4 py-2 4xs:grid 4xs:grid-cols-1 4xs:gap-1 4xs:px-10 rounded-3xl mb-10 border border-gray-400">
                <div class="sm:col-span-1 sm:flex sm:justify-center">
                    <div class="flex justify-center">
                        <img class="inline-block self-center" src="/sortingbar.png" alt="" width="350" />
                    </div>
                    <div class="ml-10 sm:col-span-2 sm:flex sm:flex-col sm:justify-center">
                        <div class="text-gray-900 font-bold text-3xl pt-5 pb-5 mt-10 mb-2">Sorting Bars</div>
                        <p class="text-black-700 text-lg text-base">
                            높이가 랜덤하게 주어지는 Bar들을 다양한 정렬 알고리즘을 통해 정렬하는 과정을 시각적으로 확인할 수 있습니다.
                        </p>
                        <p class="text-gray-600 text-base mt-4">
                            - 각 Bar들의 높이를 숫자로 표시하여 정렬과정을 제대로 볼 수 있도록 하였습니다.
                        </p>
                        <p class="text-gray-600 text-base mt-2">
                            - 비교 대상이 되는 Bar와 비교를 마친 Bar의 색상을 다르게하여 시각적인 효과를 주었습니다.
                        </p>
                        <p class="text-gray-600 text-base mt-2">
                            - <span class="text-red-600 font-semibold">Redux</span>를 통해 Bar에 대한 randomArray를 전역에서 관리하였습니다.
                        </p>
                        <p class="text-black-600 text-lg font-bold text-base mt-4">
                            Reset
                        </p>
                        <p class="text-gray-600 text-base mt-2">
                            1부터 20까지의 높이를 가진 Bar들을 랜덤하게 생성합니다.
                        </p>
                        <p class="text-black-600 text-lg font-bold text-base mt-4">
                            Bubble Sort
                        </p>
                        <p class="text-gray-600 text-base mt-2">
                            서로 인접한 요소들의 크기를 비교하여 정렬하는 알고리즘입니다.
                        </p>
                        <p class="text-black-600 text-lg font-bold text-base mt-4">
                            Merge Sort
                        </p>
                        <p class="text-gray-600 text-base mt-2">
                            요소들을 같은 크기의 배열로 반복적으로 2분할하여 정렬한 뒤 이후에 다시 병합하여 정렬하는 방식의 알고리즘입니다.
                        </p>
                        <div class="mt-6 ml-2 sm:flex sm:flex-col sm:justify-center">
                            <span class="text-m font-bold text-blue-700 mr-2 mb-2"><a target="_blank" href="https://sorting-bars.vercel.app/">👉 배포 링크 바로가기</a></span>
                            <span class="text-m font-bold text-blue-700 mr-2 mb-2"><a target="_blank" href="https://github.com/wongee93/sorting_bars">👉 깃허브 바로가기</a></span>
                        </div>
                        <div class="mt-5 mb-10">
                            <span class="inline-block bg-yellow-200 rounded-full px-6 py-3 text-m font-semibold text-gray-700 mr-2 mb-2">#React</span>
                            <span class="inline-block bg-yellow-200 rounded-full px-6 py-3 text-m font-semibold text-gray-700 mr-2 mb-2">#Redux</span>
                            <span class="inline-block bg-yellow-200 rounded-full px-6 py-3 text-m font-semibold text-gray-700 mr-2 mb-2">#Styled-Components</span>
                            <span class="inline-block bg-yellow-200 rounded-full px-6 py-3 text-m font-semibold text-gray-700 mr-2 mb-2">#Vercel</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="px-4 py-2 4xs:grid 4xs:grid-cols-1 4xs:gap-1 4xs:px-10 rounded-3xl mb-10 border border-gray-400 pt-10 pb-10">
                <div class="sm:col-span-1 sm:flex sm:justify-center">
                    <div class="flex justify-center">
                        <img class="inline-block self-center" src="/myportfolio.png" alt="" width="350" />
                    </div>
                    <div class="ml-10 sm:col-span-2 sm:flex sm:flex-col sm:justify-center">
                        <div class="text-gray-900 font-bold text-3xl pt-5 pb-5 mt-10 mb-2">Jihyun's Portfolio</div>
                        <p class="text-black-700 text-lg text-base">
                            발전하는 프론트엔드 개발자 원지현의 개인 이력이나 프로젝트 진행사항을 업데이트하는 포트폴리오 홈페이지입니다.
                        </p>
                        <p class="text-gray-600 text-base mt-14">
                            - React 기반 <span class="text-red-600 font-semibold">SPA</span> 홈페이지
                        </p>
                        <p class="text-gray-600 text-base mt-14">
                            - <span class="text-red-600 font-semibold">Tailwind CSS</span> 활용
                        </p>
                        <p class="text-gray-600 text-base mt-14">
                            - 페이지 크기에 따라 UI가 바뀌는 <span class="text-red-600 font-semibold">반응형 웹페이지</span> 제작
                        </p>

                        <div class="mt-6 ml-2 sm:flex sm:flex-col sm:justify-center">
                            <span class="text-m font-bold text-blue-700 mr-2 mb-2"><a target="_blank" href="">👉 배포 링크 바로가기</a></span>
                            <span class="text-m font-bold text-blue-700 mr-2 mb-2"><a target="_blank" href="https://github.com/wongee93/portfolio">👉 깃허브 바로가기</a></span>
                        </div>
                        <div class="mt-5 mb-10">
                            <span class="inline-block bg-yellow-200 rounded-full px-6 py-3 text-m font-semibold text-gray-700 mr-2 mb-2">#React</span>
                            <span class="inline-block bg-yellow-200 rounded-full px-6 py-3 text-m font-semibold text-gray-700 mr-2 mb-2">#Tailwind</span>
                            <span class="inline-block bg-yellow-200 rounded-full px-6 py-3 text-m font-semibold text-gray-700 mr-2 mb-2">#Vercel</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}