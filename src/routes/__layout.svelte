<script lang="ts">
	import "@/app.css";
	import { dev } from "$app/env";
	import Header from "@/components/Header.svelte";
	import Footer from "@/components/Footer.svelte";
	import '../app.css';
</script>

<Header />

<main class="bg-white border-y border-zinc-200">
	<slot />
</main>

<Footer />