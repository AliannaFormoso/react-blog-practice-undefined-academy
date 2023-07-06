import Card from './components/Card/Card'
import Button from './components/Button/Button'
import Link from './components/Link/Link'
import TagsFilter from './components/TagsFilter/TagsFilter';

import articles from './data/articles.json';
import filters from './data/filters.json';


function App() {
  
  return (
    <>
     <div className="main-container">
		<header className="main-navbar">
			<img src="/Logo.png" alt="Logo de Undefined Shell"/>
			<nav>
				<ul className="nav-list">
					<li><Link isActive={true}>Home</Link></li>
					<li><Link>Subscribe</Link></li>
					<li><Button>Undefined Academy</Button></li>
					<li><Button type='secondary'>Discord</Button></li>
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

			<TagsFilter filters={filters}/>
				<div className="post-list">

        {articles.map((article, index) =>  {
          const isExtended =(index + 1) % 4 ===0;
          const isReversed =(index + 1) % 8 ===0 ;
          return <Card key={index} {...article} isExtended={isExtended}
        isReversed={isReversed}/>
        
      })}
        


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
