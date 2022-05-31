<script context="module" lang="ts">
	import { dev } from "$app/env";
	export const hydrate = dev;
</script>

<script lang="ts">
	import Link from "@/components/Link.svelte";
</script>

<svelte:head>
	<title>Timothy Qian</title>
</svelte:head>


<div class="container py-6">
  <h2 class="text-3xl font-serif mb-2">About</h2>
  <div class="grid grid-cols-3 gap-4 lg:gap-6 mb-4">
    <section class="col-span-3 sm:col-span-2 space-y-2">
			<p>
				Hi! I'm Timothy Qian, a student at MIT majoring in electrical engineering and computer science. I was previously a part of Montgomery Blair High School's STEM magnet program. 
			</p>
    </section>
    <section class="col-span-3 sm:col-span-1">
      <img
        class="img-fluid"
        alt="Timothy Qian"
        src="/assets/images/profile.jpg"
      />
    </section>
  </div>

  <div class="grid grid-cols-2 gap-4 lg:gap-6">
    <section class="col-span-2 md:col-span-1 space-y-2">
      <h2 class="text-2xl font-serif">Competitive Programming</h2>
      <p>
        I enjoy solving puzzles, and participate in competitive programming in my free time. 
      </p>
    </section>
    <section class="col-span-2 md:col-span-1 space-y-2">
      <h2 class="text-2xl font-serif">Coursework</h2>

    </section>
  </div>
</div>