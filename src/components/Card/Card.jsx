
import "./Card.scss"
import Tag from '../Tag/Tag';
import Author from '../Author/Author';
import Paragraph from '../Paragraph/Paragraph';
import Time from '../Time/Time';




const Card = ({unsplashId, 
	unsplashAlt, 
	tags, 
	title, 
	date,
	extract, 
	author, 
	readTime,
isExtended = false,
isReversed = false, }) => {
    return (
        
        <article className={`card ${isExtended ? "is-extended" : ""} ${isReversed ? "is-reversed" : ""}`}>
						<img src={`https://source.unsplash.com/${unsplashId}`} alt={unsplashAlt}/>
						<section>
							<div className="card-content">
								<header>
									<div className="tags">
										{tags?.map((tag, index) => (
                                            <Tag type={isExtended ? "secondary" : "primary"} key={index}>{tag}</Tag>
                                        ))}
									</div>
									<h2 className="heading heading-sm font-bold">{title}</h2>
									<Time>{date}</Time>
								</header>
								<Paragraph>{extract}</Paragraph>
        </div>
        <footer>
          <Author name={author} />
          <Paragraph size="xs" isHelpText as="span">
            {readTime}
          </Paragraph>
							</footer>
						</section>
					</article>
        
    )
};

export default Card;
