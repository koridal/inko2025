import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
  const upperMarquee = [
    '/images/marquee/seoil.jpg',
    '/images/marquee/samjin.jpg',
    '/images/marquee/cjfoods.jpg',
    '/images/marquee/dhi.jpg',
    '/images/marquee/cheil.jpg',
    '/images/marquee/posco.jpg',
    '/images/marquee/hansae.jpg',
    '/images/marquee/juahn.jpg',
  ];

  const lowerMarquee = [
    '/images/marquee/lgelec.jpg',
    '/images/marquee/saea.jpg',
    '/images/marquee/samick.jpg',
    '/images/marquee/ceramic.jpg',
    '/images/marquee/hankook.jpg',
    '/images/marquee/bumjin.jpg',
    '/images/marquee/wintex.jpg',
    '/images/marquee/pan.jpg',
  ];

  return (
    <div className="container mx-auto">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
};

export default Marquee;