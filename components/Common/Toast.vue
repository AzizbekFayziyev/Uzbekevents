<template>
	<div class="relative flex items-center justify-between bg-white overflow-hidden p-4 rounded-xl z-50">
		<span class="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 h-7 w-1.5 rounded-full bg-destructive" v-if="type === 'error'"></span>
		<span class="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 h-7 w-1.5 rounded-full bg-green-600" v-if="type === 'success'"></span>
		<span class="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 h-7 w-1.5 rounded-full bg-yellow-600" v-if="type === 'warning'"></span>

		<div class="flex items-center">
			<img src="/assets/svg/toast/succes.svg" alt="icon" v-if="type === 'success'" />
			<img src="/assets/svg/toast/error.svg" alt="icon" v-if="type === 'error'" />
			<img src="/assets/svg/toast/warning.svg" alt="icon" v-if="type === 'warning'" />
			<div class="ml-2">
				<h2 class="text-foreground font-semibold text-sm pr-7">{{ text }}</h2>
			</div>
		</div>
		<!-- <div id="countdown" class="relative h-7 w-7 text-center bg-transparent rounded-full flex items-center justify-center">
			<div id="countdown-number" class="text-xl p-1 leading-6 text-gray-200">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 26 26">
					<path fill="currentColor" d="m8.054 16.673l-.727-.727L11.273 12L7.327 8.079l.727-.727L12 11.298l3.921-3.946l.727.727L12.702 12l3.946 3.946l-.727.727L12 12.727z"></path>
				</svg>
			</div>
			<svg><circle r="18" cx="20" cy="20"></circle></svg>
		</div> -->
	</div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	text: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true
	}
});
</script>

<style>
.Vue-Toastification__toast {
	align-items: flex-start;
	border-radius: 14px !important;
	border: 1px rgba(255, 255, 255, 0.08) !important;
	background: rgba(28, 23, 45, 0.88) !important;
	box-shadow: 0px 4px 20px 0px rgba(17, 16, 20, 0.16) !important;
	backdrop-filter: blur(4px) !important;
	display: flex !important;
	justify-content: space-between !important;
	min-height: auto !important;
	overflow: visible !important;
	padding: 0 !important;

	svg {
		height: 44px;
		position: absolute;
		right: -7px;
		top: -9px;
		transform: rotateY(-180deg) rotate(-90deg) scale(0.6);
		width: 44px;
		circle {
			stroke-dasharray: 113px;
			stroke-dashoffset: 0;
			stroke-linecap: round;
			stroke-width: 3px;
			stroke: #eaeaea;
			fill: none;
			animation: countdown-45cd7ec0 5s linear forwards;
		}
	}
}

@keyframes countdown-45cd7ec0 {
	0% {
		stroke-dashoffset: 0;
	}

	100% {
		stroke-dashoffset: 113px;
	}
}
</style>
