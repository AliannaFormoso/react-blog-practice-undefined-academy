import Card from './components/Card'

const articles = [{
  unsplashId: "JSQkuSalhH4",
  unsplashAlt: "Post Image",
  title:"Design tokens evolution",
  extract:"It has been some months since my first article about Design Tokens, and since then, they not just evolved but they adapt and become a main part of a system design. Today I want to share the keys of this evolution",
  author:"Author Name",
  readTime:"7 min",
  date:"2023-07-01",
},
{
  unsplashId: "JVPkkplpaLLI",
  unsplashAlt: "Post Image",
  title:"Static, dynamic, single-page,multiple-page, and   JAMstack",
  extract:"Nowadays we hear terms such as static pages, dynamic, SPA, Multi-pages and lately, the term JAMStack. ¿What does all this mean?...",
  author:"Author Name",
  readTime:"7 min",
  date:"2023-07-01",
},

];


function App() {
  
  return (
    <>
     <div className="main-container">
		<header className="main-navbar">
			<img src="/Logo.png" alt="Logo de Undefined Shell"/>
			<nav>
				<ul className="nav-list">
					<li><a href="#" className="text-button text-button-md font-bold is-active">Home</a></li>
					<li><a href="#" className="text-button text-button-md font-bold">Subscribe</a></li>
					<li><button className="button button-primary">Undefined Academy</button></li>
					<li><button className="button button-secondary">Discord</button></li>
				</ul>
			</nav>
		</header>
		<main>
			<section className="featured-posts">
				<article></article>
				<div className="button-container">
					<button>back</button>
					<button>forward</button>
				</div>
			</section>
			<section className="post-list-container">
				<nav className="tags-filter">
					<div className="filter-list-scroll-hider">
						<ul className="nav-list filter-list">
							<li className="is-active-filter"><a className="filter paragraph paragraph-sm font-bold"
									href="#">All</a></li>
							<li><a className="filter paragraph paragraph-sm font-bold" href="#">HTML</a></li>
							<li><a className="filter paragraph paragraph-sm font-bold" href="#">CSS</a></li>
							<li><a className="filter paragraph paragraph-sm font-bold" href="#">Javascript</a></li>
							<li><a className="filter paragraph paragraph-sm font-bold" href="#">Web components</a></li>
							<li><a className="filter paragraph paragraph-sm font-bold" href="#">Design System</a></li>
						</ul>
					</div>
					<input className="input" type="search" placeholder="Search"/>
				</nav>
				<div className="post-list">

        {articles.map((article, index) => (
          <Card key={index} {...article}/>
        )
        )}
        


				</div>
			</section>
		</main>
	</div>
	<footer>
	</footer>
    </>
  )
}

export default App
