<head>
	<link rel='stylesheet' id='montserrat-css'  href='http://fonts.googleapis.com/css?family=Montserrat%3A400%2C700&#038;ver=4.1' type='text/css' media='all' />
	<link rel='stylesheet' id='roboto-css'  href='http://fonts.googleapis.com/css?family=Roboto%3A400%2C300italic%2C300%2C500%2C400italic%2C500italic%2C700%2C700italic&#038;ver=4.1' type='text/css' media='all' />
	<link rel='stylesheet' id='merriweather-css'  href='http://fonts.googleapis.com/css?family=Merriweather%3A400%2C700%2C300%2C900&#038;ver=4.1' type='text/css' media='all' />
	<link rel='stylesheet' id='milonga-css'  href='http://fonts.googleapis.com/css?family=Milonga&#038;ver=4.1' type='text/css' media='all' />
</head>

<body></body>

<template name="layoutHome">
	<!-- BEGIN #wrap -->
	<div id="wrap">
		<!-- BEGIN .container -->
		<div class="container">
			{{> header}}
			{{> navigation}}
			{{> yield}}
		</div>
		{{> footer}}
	</div>
</template>

<template name="layout">
	<!-- BEGIN #wrap -->
	<div id="wrap">
		<!-- BEGIN .container -->
		<div class="container">
			{{> header}}
			{{> navigation}}
			<div class="post type-post status-publish format-standard has-post-thumbnail hentry category-category">
				<div class="row">
					<div class="eleven columns">
						<div class="postarea">
							{{> yield}}
						</div>
					</div>
				</div>
			</div>
		</div>
		{{> footer}}
	</div>
</template>

<template name="home">
	<div class="row">
		<!-- BEGIN .homepage -->
		<div class="homepage">
			<!-- BEGIN .featured-pages -->
			<div class="featured-pages radius-full">
				<div class="holder third first">
					<!-- BEGIN .information -->
					<div class="information radius-full shadow">
						<div class="img-holder">
							<a class="feature-img radius-top" href="/about/" rel="bookmark" title="O škôlke"><img src="/gallery/2014/domcek.jpg" class="attachment-featured-small wp-post-image"></a>
						</div>
						<!-- BEGIN .article -->
						<div class="article">
							<div class="text-holder">
								<h2 class="title text-center">O čo ide?</h2>
								<p>Pripravujeme prvú “lesnú detskú škôlku” v Nových Zámkoch, v ktorej by naše deti mohli vyrastať v prírode, žiť aktívne a stravovať sa poriadne. …</p>
							</div>
							<div class="align-center text-center">
								<a class="button" href="/o-skolke" rel="bookmark" title="O škôlke">Prečítajte si viac</a>
							</div>
							<!-- END .article -->
						</div>
						<!-- END .information -->
					</div>
				</div>
				<div class="holder third">
					<!-- BEGIN .information -->
					<div class="information radius-full shadow">
						<div class="img-holder">
							<a class="feature-img radius-top" href="/history/" rel="bookmark" title="Permalink to History"><img src="/gallery/2014/domcek.jpg" class="attachment-featured-small wp-post-image" alt="page-06"></a>
						</div>
						<!-- BEGIN .article -->
						<div class="article">
							<div class="text-holder">
								<h2 class="title text-center">Hľadáme učiteľov</h2>
								<p>Hľadáme pedagógov, ktorí majú chuť viesť deti k tradíciám a trvalo udržateľným hodnotám. Pedagógov, ktorí sa nebudú báť učiť od detí prirodzenosti, slobode, láske a rešpektu. Ľudí, ktorý sa bude spolupodielať na chode DLŠ ako vlastnej domácnosti. Ľudí, ktorý bude rád úzko spolupracovať s rodičmi.…</p>
							</div>
							<div class="align-center text-center">
								<a class="button" href="/clanok/hladame-ucitelov" rel="bookmark" title="Hľadáme učiteľov">Prečítajte si viac</a>
							</div>
							<!-- END .article -->
						</div>
						<!-- END .information -->
					</div>
				</div>
				<div class="holder third last">
					<!-- BEGIN .information -->
					<div class="information radius-full shadow">
						<div class="img-holder">
							<a class="feature-img radius-top" href="/company/" rel="bookmark" title="Permalink to Company"><img src="/gallery/2014/domcek.jpg" class="attachment-featured-small wp-post-image" alt="page-08"></a>
						</div>
						<!-- BEGIN .article -->
						<div class="article">
							<div class="text-holder">
								<h2 class="title text-center">Hľadáme<br>kuchára / kuchárku</h2>
								<p>This is some example content. WordPress is an extremely user friendly content management system for websites and blogs. Users can easily add and update text, images, video, audio and more using the WordPress platform. Curabitur lacinia porta purus. Mauris laoreet dignissim imperdiet. Proin tempor…</p>
							</div>
							<div class="align-center text-center">
								<a class="button" href="/company/" rel="bookmark" title="Permalink to Company">Learn More</a>
							</div>
							<!-- END .article -->
						</div>
						<!-- END .information -->
					</div>
				</div>
				<!-- END .featured-pages -->
			</div>
			<!-- BEGIN .featured-posts -->
			<div class="featured-posts">
				<!-- BEGIN .sixteen columns -->
				<div class="sixteen columns">
					<!-- BEGIN .home-news -->
					<div class="home-news radius-full shadow padding-big">
						<!-- BEGIN .information -->
						<div class="information">
							<!-- BEGIN .six columns -->
							<div class="six columns">
								<a class="feature-img background-cover" style="height: 278px; background-image: url(/files/2013/09/post-06.png);" href="/the-finest-maui-coffee/" rel="bookmark" title="Permalink to The Finest Maui Coffee"></a>
								<!-- END .six columns -->
							</div>
							<!-- BEGIN .twelve columns -->
							<div class="ten columns">
								<div class="holder">
									<!-- BEGIN .article -->
									<div class="article">
										<h2 class="title"><a href="/the-finest-maui-coffee/" rel="bookmark">The Finest Maui Coffee</a></h2>
										<div class="excerpt">
											<p>This is some example content. WordPress is an extremely user friendly content management system for websites and blogs. Users can easily add and update text, images, video, audio and more using the WordPress platform. Curabitur lacinia porta purus. Mauris laoreet dignissim imperdiet. Proin tempor…</p>
										</div>
										<div class="post-author">
											<p class="align-left"><i class="icon-time"></i> &nbsp;Posted on September 18, 2013</p>
											<p class="align-right"><i class="icon-comment"></i> &nbsp;<a href="/the-finest-maui-coffee/#comments">Comment</a></p>
										</div>
										<!-- END .article -->
									</div>
								</div>
								<!-- END .twelve columns -->
							</div>
							<!-- END .information -->
						</div>
						<!-- BEGIN .information -->
						<div class="information">
							<!-- BEGIN .six columns -->
							<div class="six columns">
								<a class="feature-img background-cover" style="height: 278px; background-image: url(/files/2013/09/post-03.png);" href="/top-12-socal-surf-spots/" rel="bookmark" title="Permalink to Top 12 SoCal Surf Spots"></a>
								<!-- END .six columns -->
							</div>
							<!-- BEGIN .twelve columns -->
							<div class="ten columns">
								<div class="holder">
									<!-- BEGIN .article -->
									<div class="article">
										<h2 class="title"><a href="/top-12-socal-surf-spots/" rel="bookmark">Top 12 SoCal Surf Spots</a></h2>
										<div class="excerpt">
											<p>This is some example content. WordPress is an extremely user friendly content management system for websites and blogs. Users can easily add and update text, images, video, audio and more using the WordPress platform. Curabitur lacinia porta purus. Mauris laoreet dignissim imperdiet. Proin tempor…</p>
										</div>
										<div class="post-author">
											<p class="align-left"><i class="icon-time"></i> &nbsp;Posted on September 18, 2013</p>
											<p class="align-right"><i class="icon-comment"></i> &nbsp;<a href="/top-12-socal-surf-spots/#comments">Comment</a></p>
										</div>
										<!-- END .article -->
									</div>
								</div>
								<!-- END .twelve columns -->
							</div>
							<!-- END .information -->
						</div>
						<!-- BEGIN .information -->
						<div class="information">
							<!-- BEGIN .six columns -->
							<div class="six columns">
								<a class="feature-img background-cover" style="height: 278px; background-image: url(/files/2011/09/post-04.png);" href="/your-garden/" rel="bookmark" title="Permalink to Your Garden"></a>
								<!-- END .six columns -->
							</div>
							<!-- BEGIN .twelve columns -->
							<div class="ten columns">
								<div class="holder">
									<!-- BEGIN .article -->
									<div class="article">
										<h2 class="title"><a href="/your-garden/" rel="bookmark">Your Garden</a></h2>
										<div class="excerpt">
											<p>This is some example content. WordPress is an extremely user friendly content management system for websites and blogs. Users can easily add and update text, images, video, audio and more using the WordPress platform. Curabitur lacinia porta purus. Mauris laoreet dignissim imperdiet. Proin tempor…</p>
										</div>
										<div class="post-author">
											<p class="align-left"><i class="icon-time"></i> &nbsp;Posted on September 27, 2011</p>
											<p class="align-right"><i class="icon-comment"></i> &nbsp;<a href="/your-garden/#comments">2 Comments</a></p>
										</div>
										<!-- END .article -->
									</div>
								</div>
								<!-- END .twelve columns -->
							</div>
							<!-- END .information -->
						</div>
						<!-- END .home-news -->
					</div>
					<!-- END .sixteen columns -->
				</div>
				<!-- END .featured-posts -->
			</div>
			<!-- END .homepage -->
		</div>
		<!-- END .row -->
	</div>
</template>

<template name="header">
	<!-- BEGIN #header -->
	<div id="header">
		<!-- BEGIN .row -->
		<div class="row">
			<!-- BEGIN .sixteen columns -->
			<div class="sixteen columns">
				<div id="masthead">
					<h1 class="site-title"><span><a href="/" rel="home">Lesný detský klub Berek</a></span></h1>
					<h2 class="site-description">V prírode. S prírodou.</h2>
				</div>
				<div id="custom-header"><img src="/images/header.png" height="180" width="1080" alt="Lesný detský klub Berek" /></div>
				<!-- END .sixteen columns -->
			</div>
			<!-- END .row -->
		</div>
		<!-- END #header -->
	</div>
</template>

<template name="navigation">
	<!-- BEGIN #navigation -->
	<nav id="navigation" class="navigation-main shadow radius-top" role="navigation">
		<!-- BEGIN .row -->
		<div class="row">
			<h1 class="menu-toggle">Menu</h1>
			<div class="menu-main-menu-container">
				<ul id="menu-main-menu" class="menu">
					<li class="menu-item {{isActive ''}}"><a href="/">Domov</a></li>
					<li class="menu-item {{isActive 'about'}}"><a href="/o-skolke">O škôlke</a></li>
					<li class="menu-item {{isActive 'news'}}"><a href="/aktuality">Aktuality</a></li>
					<li class="menu-item {{isActive 'gallery'}}"><a href="/fotografie">Fotografie</a></li>
					<li class="menu-item {{isActive 'applications'}}"><a href="/prihlasky">Prihlášky</a></li>
					<!--<li class="menu-item menu-item-has-children ">
						<a href="#">Aktuality</a>
						<ul class="sub-menu">
							<li class="menu-item"><a href="/portfolio/">Portfolio</a></li>
							<li class="menu-item"><a href="/full-width/">Full Width</a></li>
						</ul>
					</li>-->
 					<li class="menu-item {{isActive 'contacts'}}"><a href="/kontakty">Kontakty</a></li>
				</ul>
			</div>
			<!-- END .row -->
		</div>
		<!-- END #navigation -->
	</nav>
	<div class="clear"></div>
</template>

<template name="footer">
	<!-- BEGIN .footer -->
	<div class="footer radius-top">
		<!-- BEGIN .row -->
		<div class="row">
			<!-- BEGIN .footer-information -->
			<div class="footer-information">
				<!-- BEGIN .footer-content -->
				<div class="footer-content">
					<div class="align-left">
						<p>Copyright &copy; 2015 &middot; Lesný detský klub Berek</p>
						<!-- <p><a href="http://www.organicthemes.com/themes/" target="_blank">Natural Theme v3</a> by <a href="http://www.organicthemes.com" target="_blank">Organic Themes</a> &middot; <a href="http://kahunahost.com" target="_blank" title="WordPress Hosting">WordPress Hosting</a> &middot; <a href="/feed/">RSS Feed</a> &middot; <a href="/wp-login.php">Log in</a></p> -->
					</div>
					<div class="align-right">
						<ul class="social-icons">
							<li><a class="link-facebook" href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
							<li><a class="link-youtube" href="#" target="_blank"><i class="fa fa-youtube"></i></a></li>
							<li><a class="link-email" href="mailto:#" target="_blank"><i class="fa fa-envelope"></i></a></li>
							<!-- <li><a class="link-twitter" href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
							<li><a class="link-linkedin" href="#" target="_blank"><i class="fa fa-linkedin"></i></a></li>
							<li><a class="link-dribbble" href="#" target="_blank"><i class="fa fa-dribbble"></i></a></li>
							<li><a class="link-skype" href="#" target="_blank"><i class="fa fa-skype"></i></a></li>
							<li><a class="link-google" href="#" target="_blank"><i class="fa fa-google-plus"></i></a></li>
							<li><a class="link-pinterest" href="#" target="_blank"><i class="fa fa-pinterest"></i></a></li>
							<li><a class="link-github" href="#" target="_blank"><i class="fa fa-github"></i></a></li>
							<li><a class="link-instagram" href="#" target="_blank"><i class="fa fa-instagram"></i></a></li> -->
 						</ul>
					</div>
					<!-- END .footer-content -->
				</div>
				<!-- END .footer-information -->
			</div>
			<!-- END .row -->
		</div>
		<!-- END .footer -->
	</div>
</template>