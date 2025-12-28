import TitlesDisplay from './TitlesDisplay'
import ArrowButton from './ArrowButton'
import Slider from './Slider'

type Props = {
  hidden: boolean;
}

const HomeMain = ({hidden}: Props) => {
  return (
    <div id="main-content">
      <div className="carousel">
        <div className="list">
          <TitlesDisplay />
        </div>
        <div className="flex flex-col items-end">
          <div
            className="arrows flex justify-center gap-6 lg:gap-5
          absolute top-[77.8%] md:top-[69.7%] lg:top-[69.5%] xl:top-[72.5%] left-[12%] md:left-[20.7%] lg:left-[15.5%] xl:right-[55.5%] 2xl:right-[38%] z-10"
          >
            {/* Prev ArrowButton is hidden but the transition animation works, since the arrows className is applied to both prev and next. */}
            <ArrowButton id="prev" direction="<" aria-label="Previous Slide" />
            <ArrowButton id="next" direction=">" aria-label="Next Slide" />
          </div>
          <a
            href="/cv"
            className="w-[4rem] rounded-bl-3xl z-10 py-[1rem] text-center text-stone-100 text-xl cormorant-infant-regular mobile-only moving-card-gradient cursor-pointer"
            >CV</a
          >
        </div>

        <Slider />
        {/* Running Border Effect */}
        <div className="time"></div>
      </div>
    </div>
  )
}

export default HomeMain