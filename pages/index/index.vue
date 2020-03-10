<template>
	<view class="cu-progress">
		<view class="show">
			<cu-progress min='0.1' max='10' step='0.5' showInfo=true></cu-progress>
			<text class="desc">默认</text>
			<cu-progress class="progress"></cu-progress>
			<text class="desc">showInfo: true</text>
			<cu-progress class="progress" showInfo='true' value=50></cu-progress>
			<text class="desc">infoEndText: **</text>
			<cu-progress class="progress" showInfo='true' infoEndText="%"></cu-progress>
			<cu-progress class="progress" showInfo='true' value="100" infoEndText="¥"></cu-progress>
			<cu-progress class="progress" showInfo='true' value="100" max="0" min="100" infoEndText="美元"></cu-progress>
			<text class="desc">max: ** min: **</text>
			<cu-progress class="progress" showInfo='true' value="-20" max="120" min="-20"></cu-progress>
			<text class="desc">max 与 min 值互换，实现从左向右减小</text>
			<cu-progress class="progress" showInfo='true' value="0" max="0" min="100"></cu-progress>
			<text class="desc">稍大max值显示测试</text>
			<cu-progress class="progress" showInfo='true' max="2000000000" infoEndText="%" value="2000000000" iconBorderRadius="20px" handleSize="20px"
			 handleBorderRadius="20px" width="90vw"></cu-progress>
			<text class="desc">activeColor: **, noActiveColor: **, handleColor: **, handleBorderRadius: **</text>
			<cu-progress class="progress" value="50" infoSize="16px" handleSize="16px" infoColor="orange" handleColor="green"
			 activeColor="blue" noActiveColor="yellow"></cu-progress>
			<cu-progress class="progress" value="50" infoSize="16px" handleBorderRadius="0" handleSize="16px" infoColor="orange"
			 handleColor="green" activeColor="blue" noActiveColor="yellow"></cu-progress>
		</view>
		<text class="desc">width: 100vw</text>
		<cu-progress class="progress" borderRadius="60px" width="100vw" :value="v1" handleBorderRadius="20" handleColor="orange"
		 handleSize="20" activeColor="red" noActiveColor="black"></cu-progress>
		<text class="desc">strokeWidth: **, infoColor: **, infoSize: **</text>
		<cu-progress class="progress" :value="0" width="100vw" handleSize="60" infoColor="yellow" handleBorderRadius="30"
		 showInfo="true" strokeWidth="50" infoSize="60px"></cu-progress>
		<cu-progress class="progress" :value="100" width="100vw" handleSize="60" infoColor="yellow" handleBorderRadius="30"
		 showInfo="true" strokeWidth="50" infoSize="60px"></cu-progress>
		<cu-progress class="progress" :value="v3" width="100vw" infoSize="30px" handleSize="60" handleBorderRadius="30"
		 showInfo="true" strokeWidth="50"></cu-progress>
		<text class="desc">handleSize: 0</text>
		<cu-progress class="progress" width="100vw" handleSize="0" value="0" strokeWidth="50"></cu-progress>
		<cu-progress class="progress" width="100vw" handleSize="0" value="50" strokeWidth="50"></cu-progress>
		<cu-progress class="progress" width="100vw" handleSize="0" value="100" strokeWidth="50"></cu-progress>
		<cu-progress class="progress" width="100vw" handleSize="0" value="80" showInfo="true" infoSize="45px" strokeWidth="50"></cu-progress>
		<text class="desc">backgroundColor: **</text>
		<cu-progress class="progress" borderRadius="60px" :value="v3" backgroundColor="orange" width="100vw" infoSize="30px"
		 handleSize="60" handleBorderRadius="30" showInfo="true" strokeWidth="45"></cu-progress>
		<text class="desc">handleColor: **</text>
		<cu-progress class="progress" borderRadius="60px" :value="v3" handleColor="orange" width="100vw" infoSize="30px"
		 handleSize="60" handleBorderRadius="30" showInfo="true" strokeWidth="45"></cu-progress>
		<text class="desc">borderRadius: **</text>
		<cu-progress class="progress" borderRadius="60px" width="100vw" showInfo="true" value="0" strokeWidth="50"></cu-progress>
		<cu-progress class="progress" borderRadius="60px" width="100vw" showInfo="true" value="50" strokeWidth="50"></cu-progress>
		<cu-progress class="progress" borderRadius="60px" width="100vw" showInfo="true" value="100" strokeWidth="50"></cu-progress>
		<cu-progress class="progress" borderRadius="60px" width="100vw" value="100" strokeWidth="50"></cu-progress>
		<cu-progress class="progress" borderRadius="60px" width="100vw" handleSize="0" value="50" strokeWidth="50"></cu-progress>
		<text class="desc">bgBorderRadius: **, borderRadius: **, backgroundColor: **, handleBorderRadius: **</text>
		<cu-progress class="progress" @dragstart="change_" activeColor="#ff0000" bgBorderRadius="60px" handleIcon="icon-youjiantou2"
		 iconSize="70px" backgroundColor="green" handleColor="orange" borderRadius="20" :value="0" width="100vw" handleSize="60"
		 handleBorderRadius="30" showInfo="true" strokeWidth="45" infoSize="60px"></cu-progress>
		<cu-progress class="progress" @dragging="change_" activeColor="#ff0000" bgBorderRadius="60px" handleIcon="icon-youjiantou2"
		 iconSize="70px" backgroundColor="green" handleColor="orange" borderRadius="20" :value="50" width="100vw" handleSize="60"
		 handleBorderRadius="30" showInfo="true" strokeWidth="45" infoSize="60px"></cu-progress>
		<cu-progress class="progress" @dragged="change_" activeColor="#ff0000" bgBorderRadius="60px" handleIcon="icon-youjiantou2"
		 iconSize="70px" backgroundColor="green" handleColor="orange" borderRadius="20" :value="100" width="100vw" handleSize="60"
		 handleBorderRadius="30" showInfo="true" strokeWidth="45" infoSize="60px"></cu-progress>
		<cu-progress class="progress" @dragcancel="change_" activeColor="#ff0000" bgBorderRadius="60px" handleIcon="icon-youjiantou2"
		 iconSize="70px" backgroundColor="green" handleColor="orange" borderRadius="20" :value="0" width="100vw" handleSize="60px"
		 handleBorderRadius="30" strokeWidth="45" infoSize="60px"></cu-progress>
		<cu-progress class="progress" @change="change_" activeColor="#ff0000" bgBorderRadius="60px" handleIcon="icon-youjiantou2"
		 iconSize="70px" backgroundColor="green" handleColor="orange" borderRadius="20" :value="80" width="100vw" handleSize="60px"
		 handleBorderRadius="30" strokeWidth="45" infoSize="60px"></cu-progress>
		<cu-progress class="progress" activeColor="#ff0000" bgBorderRadius="60px" handleIcon="icon-youjiantou2" iconSize="70px"
		 backgroundColor="green" handleColor="orange" borderRadius="20" :value="100" width="100vw" handleSize="60px"
		 handleBorderRadius="30" strokeWidth="45" infoSize="60px"></cu-progress>
		<text class="desc">disabled: true</text>
		<cu-progress class="progress" activeColor="#ff0000" bgBorderRadius="60px" handleIcon="icon-youjiantou2" iconSize="70px"
		 backgroundColor="green" handleColor="orange" borderRadius="20" :value="66" width="100vw" handleSize="60"
		 handleBorderRadius="30" strokeWidth="45" infoSize="60px" disabled="true"></cu-progress>
			<cu-progress class='progress' width='99vw' strokeWidth=50 handleSize=0 infoSize=45 showInfo="true" step=10.3 infoAlign="left" value=0.1 min=0.1></cu-progress>
			<cu-progress class='progress' width='99vw' strokeWidth=50 handleSize=0 infoSize=45 showInfo="true" step=10.3 infoAlign="center" value=50.2 min=0.1></cu-progress>
			<cu-progress class='progress' width='99vw' strokeWidth=50 handleSize=0 infoSize=45 showInfo="true" step=10.3 infoAlign="right" value=100 min=0.1></cu-progress>
		<cu-progress class="progress" @dragging="change_" activeColor="#ff0000" bgBorderRadius="60px" handleIcon="icon-youjiantou2"
		 iconSize="70px" backgroundColor="green" handleColor="orange" borderRadius="20" value="50.1" width="100vw" handleSize="60"
		 handleBorderRadius="30" showInfo="true" strokeWidth="45" infoSize="45px" direction="horizontal"
		 max='100.2' step='0.1'></cu-progress>
		 <cu-progress class="progress" @dragging="change_" infoAlign="center" activeColor="#ff0000" bgBorderRadius="60px" handleIcon="icon-youjiantou2"
		  iconSize="70px" backgroundColor="green" handleColor="orange" borderRadius="20" value="100.2" width="100vw" handleSize="60"
		  handleBorderRadius="30" showInfo="true" strokeWidth="45" infoSize="45px" direction="horizontal"
		  max="100.2" min='0.1' step=0.1></cu-progress>
		<cu-progress class="progress" @dragging="change_" infoAlign="left" activeColor="#ff0000" bgBorderRadius="60px"
		 handleIcon="icon-youjiantou2" iconSize="70px" backgroundColor="green" handleColor="orange" borderRadius="20" :value="50.21"
		 width="100vw" handleSize="60" handleBorderRadius="30" showInfo="true" strokeWidth="45" infoSize="45px" direction="horizontal"
		 step="0.01" max='99.99' min=-0.00002></cu-progress>
		 <text class="nav" @click="nav">To Vertical</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				v1: 0,
				v2: 50,
				v3: 100,
				max: 100,
				infoEndText: '$',
			}
		},
		methods: {
			nav() {
				uni.navigateTo({
					url: '../vertical/vertical'
				})
			},
			changeMax() {
				this.max = this.max == 100000 ? 10 : 100000
			},
			changeEndtext() {
				this.infoEndText = this.infoEndText == '$' ? '美元' : '$'
			},
			change_(e) {
				if (e) {
					console.log(e.type, e.value)
				}
			}
		}
	}
</script>

<style>
	.cu-progress {
		display: flex;
		flex-direction: column;
		font-size: 16px;
	}

	.show {
		display: flex;
		flex-direction: column;
		margin: 0 30px;
	}

	.progress {
		margin: 5px 0;
	}
	.progress:last-child {
		margin-bottom: 50px;
	}
	.desc {
		/* display: none; */
		margin: 0 auto;
		font-size: 18px;
		padding: 10px 0 0 10px;

	}
	.nav{
		display: inline-flex;
		margin: 0 auto;
		padding: 20px;
		
	}
</style>
