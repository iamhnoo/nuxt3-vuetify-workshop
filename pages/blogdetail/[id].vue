<script setup lang="ts">
// อ่าน id ที่สุงมา
const route = useRoute();
// console.log(route.params.id);
const { data: product, pending } = await useFetch(`https://www.itgenius.co.th/sandbox_api/mrta_flutter_api/public/api/news/${route.params.id}`);

useHead({
	title: `${product.value.topic}`,
	meta: [
		{
			name: "keywords",
			content: `${product.value.topic}, บล็อก,โปรแกรมบัญชี, CD Organizer, Backend`,
		},
		{
			name: "Description",
			content: `${product.value.topic},บล็อก โปรแกรมบัญชี,  Com Developer co.th`,
		},
	],
});
</script>
<template>
	<div class="container mb-5">
		<div v-if="!pending">
			<div class="wrapper">
				<v-row justify="center">
					<v-col cols="12" sm="10" md="9" lg="7">
						<div class="text-center">
							<h2 class="ui-title font-weight-bold text-white mb-4 mt-5">หัวข้อข่าว</h2>
							<p class="text-white"></p>
						</div>
					</v-col>
				</v-row>
			</div>
			<client-only>
				<v-container>
					<img :src="product.imageurl" alt="product.topic" class="w-100" />
					<h3>{{ product.detail }}</h3>
					<p>{{ product.created_at }}</p>
					<a :href="product.linkurl" target="_blank">อ่านเพิ่มเติม</a>
				</v-container>
			</client-only>
		</div>
		<div class="text-center py-5" v-else>Loading...</div>
	</div>
</template>

<style scoped>
.ui-title {
	font-size: 32px;
}

.font-18 {
	font-size: 18px;
}

.wrapper {
	background: #2196f3;
	padding: 40px 0 20px;
	min-height: 250px;
	display: flex;
	align-items: center;
	margin-bottom: 20px;
}

.blog-card {
	transition: 0.2s ease-in;
}

.blog-card:hover {
	transform: translateY(-10px);
}

.blog-title {
	color: #263238 !important;
	line-height: 22px;
	font-weight: bold;
}

.blog-title:hover {
	color: #607df9 !important;
}
</style>
