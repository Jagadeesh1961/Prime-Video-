import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movies} = props

  const settings = {
    slidesToScroll: 1,
    slidesToShow: 4,
    dots: true,
  }
  return (
    <>
      <Slider {...settings}>
        {movies.map(eachItem => (
          <MovieItem eachMovie={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
