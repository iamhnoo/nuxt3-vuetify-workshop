// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	/* ssr: is Server Site Rendering for Deploy Mode. If true Server must NodeJS Server */
	ssr: true /* false is SPA=Single Page Application */,
	/* Hybrid Rendering in NuxtJS */
	routeRules: {
		"/backend/**": { ssr: false },
		//"/components/landing/Header.vue": { ssr: false },
	},
	build: {
		/* Config: to use vuetify */
		transpile: ["vuetify"],
	},
	/* call file CSS */
	css: ["@/assets/scss/style.scss"],
	/* Config vite hear */
	vite: {
		define: {
			"process.enf.DEBUG": false,
		},
	},
	modules: [
		[
			"@nuxtjs/robots",
			{
				UserAgent: "*",
				Disallow: "",
				Sitemap: "http://a69702.sitemaphosting.com/3927666/sitemap.xml",
			},
		],
	],
});
