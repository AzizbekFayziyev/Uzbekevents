<template>
	<div class="relative h-[840px] lg:h-[900px] rounded-b-3xl z-10 pt-[120px] sm:!pt-[192px] sm:pb-20 overflow-hidden">
		<div class="container flex flex-col gap-6 lg:justify-between h-full relative">
			<div class="flex flex-col gap-6 sm:gap-10">
				<h1 class="text-2xl md:text-4xl lg:text-6xl xl:text-[80px] text-white font-bold xl:leading-[72px]">
					{{ translations['Header.just_one_click'] }}
				</h1>
				<div class="flex items-start justify-between relative">
					<div class="flex flex-col gap-6 sm:gap-10">
						<p class="text-sm sm:text-xl text-white max-w-[576px]">
							{{ translations['Header.Build_a_brand_position'] }}
						</p>
						<div class="flex items-center flex-col sm:flex-row gap-4 sm:gap-6 max-w-[576px]">
							<Button class="bg-white max-sm:w-full">
								{{ translations['Header.contact_us'] }}
							</Button>
							<a href="https://uzbekbusinessconnect.com/davron_khusanov" target="_blank">
								<Button variant="outline" class="text-white max-sm:w-full">
									{{ translations['Header.Get_a_demo'] }}
								</Button>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="lg:mt-auto">
				<ul class="flex flex-wrap gap-4 max-w-[660px]">
					<li class="px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-base text-white border-2 border-white/[0.08] bg-white/[0.16] rounded-[35px]">
						{{ translations['sections.social_networks'] }}
					</li>
					<li class="px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-base text-white border-2 border-white/[0.08] bg-white/[0.16] rounded-[35px]">
						{{ translations['sections.website'] }}
					</li>
					<li class="px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-base text-white border-2 border-white/[0.08] bg-white/[0.16] rounded-[35px]">
						{{ translations['sections.briefcase'] }}
					</li>
					<li class="px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-base text-white border-2 border-white/[0.08] bg-white/[0.16] rounded-[35px]">
						{{ translations['sections.mini-site'] }}
					</li>
					<li class="px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-base text-white border-2 border-white/[0.08] bg-white/[0.16] rounded-[35px]">
						{{ translations['sections.services'] }}
					</li>
				</ul>
			</div>
			<div class="absolute right-[-16px] sm:right-8 bottom-[0px] sm:bottom-[-120px] max-w-[424px] max-h-[330px] lg:max-w-[700px] lg:max-h-[560px]">
				<img src="/assets/images/Group.png" alt="" class="w-full object-contain" />
			</div>
		</div>

		<div class="absolute top-0 left-0 z-[-1] w-full h-full">
			<img src="/assets/images/hero-bg.png" alt="" class="w-full h-full object-cover" />
		</div>
	</div>
</template>

<script setup>
import { useTranslationsStore } from '~/stores/translations.js';

const translationsStore = useTranslationsStore();

const { translations } = storeToRefs(translationsStore);
</script>
