[33mcommit 52391d18540a0e06452ab748ba51c4519513134c[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m, [m[1;31morigin/master[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: tjalp <60233996+tjalp@users.noreply.github.com>
Date:   Sun Sep 4 23:13:08 2022 +0200

    feat: add github cards

[1mdiff --git a/src/pages/index.astro b/src/pages/index.astro[m
[1mindex a8b2791..212fbdf 100644[m
[1m--- a/src/pages/index.astro[m
[1m+++ b/src/pages/index.astro[m
[36m@@ -7,6 +7,16 @@[m [mimport Card from '../components/Card.astro';[m
 	<main>[m
 		<h1 style="text-align: center">This is <span class="text-gradient">⚓Anchor.</span></h1>[m
 		<ul role="list" class="link-card-grid">[m
[32m+[m			[32m<Card[m
[32m+[m				[32mhref="https://github.com/tjalp/"[m
[32m+[m				[32mtitle="tjalp's github profile"[m
[32m+[m				[32mbody="Check out my amazing profile!"[m[41m [m
[32m+[m			[32m/>[m
[32m+[m			[32m<Card[m
[32m+[m				[32mhref="https://github.com/tjalp/anchor/"[m
[32m+[m				[32mtitle="Anchor's github repository"[m
[32m+[m				[32mbody="Take a look at this website's source code"[m[41m [m
[32m+[m			[32m/>[m
 			<Card[m
 				href="/test"[m
 				title="Test Page"[m
[36m@@ -73,7 +83,7 @@[m [mimport Card from '../components/Card.astro';[m
 [m
 	.link-card-grid {[m
 		display: grid;[m
[31m-		grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));[m
[32m+[m		[32mgrid-template-columns: repeat(auto-fit, minmax(48ch, 1fr));[m
 		gap: 1rem;[m
 		padding: 0;[m
 	}[m
