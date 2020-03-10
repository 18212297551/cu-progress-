<template>
	<view class="vertical-main">
		<view class="row">
			<cu-progress class="progress" step=0.2 activeColor="#ff0000" bgBorderRadius="60px" handleIcon="icon-shangjiantou2"
			 iconSize="70px" backgroundColor="green" handleColor="orange" borderRadius="20" :value="0" handleSize="60"
			 handleBorderRadius="30" showInfo="true" strokeWidth="45" infoSize="60px" direction="vertical"></cu-progress>
			 <cu-progress class="progress"  activeColor="#ff0000" bgBorderRadius="60px" handleIcon="icon-shangjiantou2"
			  iconSize="70px" backgroundColor="green" handleColor="orange" borderRadius="20" :value="50" handleSize="60"
			  handleBorderRadius="30" showInfo="true" strokeWidth="45" infoSize="60px" direction="vertical"></cu-progress>
				<cu-progress class="progress"  activeColor="#ff0000" bgBorderRadius="60px" handleIcon="icon-shangjiantou2"
			  iconSize="70px" backgroundColor="green" handleColor="orange" borderRadius="20" :value="100" handleSize="60"
			  handleBorderRadius="30" showInfo="true" strokeWidth="45" infoSize="60px" direction="vertical"></cu-progress>
		</view>
		<view class="row">
			<cu-progress class="progress" handleSize='12' strokeWidth='5' direction="vertical"></cu-progress>
			<cu-progress class="progress" handleSize='12' strokeWidth='5' direction="vertical" value='50'></cu-progress>
			<cu-progress class="progress" handleSize='12' strokeWidth='5' direction="vertical" value=100></cu-progress>
		</view>
		<text class="nav" @click="nav">To Index</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			nav (){
				uni.navigateTo({
					url: '../index/index'
				})
			},
		}
	}
</script>

<style>
	.progress {
		margin: 10px;
	}
	.row {
		display: flex;
		flex-direction: row;
	}
	.nav{
		display: inline-flex;
		margin: 0 auto;
		padding: 20px;
		
	}
</style>
