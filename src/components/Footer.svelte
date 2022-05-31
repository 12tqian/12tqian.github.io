<script lang="ts">
	import Fa from "svelte-fa"; // favicons
	import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
	import {
		faGithub,
		faFacebook,
		faInstagram,
	} from "@fortawesome/free-brands-svg-icons";;

	const links = [
		{
			name: "Github",
			href: "https:/github.com/12tqian",
			icon: faGithub,
			color: "#24292e",
		},
		{
			name: "Facebook",
			href: "https://fb.me/12tqian",
			icon: faFacebook,
			color: "#3b5998",
		},
		{
			name: "Email",
			href: "mailto:tcqian@mit.edu",
			icon: faEnvelope,
			color: "#333",
		},
		{
			name: "Instagram",
			href: "https://www.instagram.com/12tqian/",
			icon: faInstagram,
			color: "#333",
		},
	];
</script>

<footer class="p-6 pb-8 space-y-4">
	<div class="flex justify-center space-x-4">
		{#each links as link (link)}
			<a style="color: {link.color}" href={link.href}>
				<Fa
					icon={link.icon}
					size="2x"
					class="opacity-75 transition-opacity hover:opacity-100"
				/>
			</a>
		{/each}
	</div>
	<p class="text-center text-gray-400 font-light">
		Content by Timothy Qian, design <del>copied from</del> inspired by Eric Zhang :P
	</p>
</footer>