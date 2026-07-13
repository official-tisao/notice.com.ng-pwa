import { CarouselData } from "../../data/carousel";
import OwlItem from "./OwlItem";

const Carousel = (data: any, setData: any) => {
	return (
		<>
			<section className="section carousel-hero">
				<div className="owl-carousel owl-loaded owl-drag">
					<div className="owl-stage-outer">
						<div
							className="owl-stage"
							style={{
								transform: "translate3d(-2698px, 0px, 0px)",
								transition: "all 1s ease 0s",
								width: "9443px",
							}}>
							{/*
							 {
  "title" : "Download Comedy Video: NDU baby the greatest Picker",
  "uniqueKey" : "65e7127746791491934742",
  "description" : "Download Comedy Video:- NDU baby the greatest Picker...",
  "content" : "Download Comedy Video:- NDU baby the greatest Picker",
  "thumbImg" : "assets/images/post_thumb/music-base.jpg",
  "commentNo" : 0,
  "superCategory" : "video",
  "categories" : "comedy",
  "tags" : "comedy , video , ndu baby the greatest picker , download page",
  "postedBy" : "Tiamiyu Saheed Oluwatosin",
  "url" : "post.php?title=video/download-comedy-video-ndu-baby-the-greatest-picker",
  "slug" : "video/download-comedy-video-ndu-baby-the-greatest-picker",
  "views" : 16,
  "likes" : 0,
  "dislikes" : 0,
  "shares" : 0,
  "dateModified" : "2024-03-05 13:39:20",
  "dateCreated" : "2024-03-05 12:25:06",
  "timeInt" : 1709642360,
  "_links" : {
    "self" : {
      "href" : "http://tisaoserver.question.ng:2345/post/218806"
    },
    "post" : {
      "href" : "http://tisaoserver.question.ng:2345/post/218806"
    }
  }
}
							 */}
							{data.data.map((owl: any) => {
								return (
									<div key={"home-carousel-"+owl.slug} className="owl-item cloned" style={{width: "1349px"}}>
										<OwlItem
											bgImage={"https://www.notice.com.ng/"+owl.thumbImg}
											category={owl.categories}
											title={owl.title}
											author={{
												authorImage: CarouselData[0].author.authorImage,
												authorName: owl.postedBy,
											}}
											timeInt={owl.dateModified.split(" ")[0]}
											time={owl.dateModified.split(" ")[0]}
										/>
									</div>
								);
							})}
						</div>
					</div>

					{/* carousel nav */}
					<div className="owl-nav">
						<button type="button" role="presentation" className="owl-prev">
							<span aria-label="Previous">‹</span>
						</button>
						<button type="button" role="presentation" className="owl-next">
							<span aria-label="Next">›</span>
						</button>
					</div>
					<div className="owl-dots disabled"></div>
				</div>
			</section>
		</>
	);
};

export default Carousel;
