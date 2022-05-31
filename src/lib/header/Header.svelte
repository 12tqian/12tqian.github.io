<script lang="ts">
	import { page } from '$app/stores';

	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'Resume', href: '/resume' }
	];
</script>

<header>
	<nav>
		{#each links as link (link)}
			<a
				href={link.href}
				class="nav-link"
				class:active={$page.url.pathname === link.href}
			>
			{link.name}
		</a>
		{/each}
	</nav>
</header>

<style lang="postcss">
	.nav-link {
		@apply border-b border-transparent transition-colors text-blue-700;
	}

	.nav-link:is(:hover, .active) {
		@apply border-blue-700;
	}
</style>