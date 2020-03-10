import cats from '../data/cats' // '..' can be replaced by short hand '@'
import dogs from '@/data/dogs'

export default {
  cats,
  dogs,
  pets: [...cats, ...dogs]
}
