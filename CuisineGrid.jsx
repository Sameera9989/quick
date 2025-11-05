import { Link } from 'react-router-dom'

const cuisines = ['North Indian','South Indian','American','Mexican','Asian','Chinese','Japanese']
const images = {
  'North Indian': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN78Sui2LTN-Xt1K-15nMQoj2o31T5wbJDzQ&s',
  'South Indian': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhbjqQVLUFWAve4S-kaWOR8TFNoXPjcp5ng&s',
  'American': 'https://media.istockphoto.com/id/531564300/photo/homemade-memorial-day-hamburger-picnic.jpg?s=612x612&w=0&k=20&c=GnsgW8Yy3Sw2jNBLhSV5tWxNZIw-mCeK4J-ZcDoS-cs=',
  'Mexican': 'https://media.istockphoto.com/id/1421774574/photo/mexican-festive-food-for-independence-day-independencia-chiles-en-nogada-tacos-al-pastor.jpg?s=612x612&w=0&k=20&c=xC0K5-imOW123YxiLW6qvNAeXrFDSRBovUthdcngRvc=',
  'Asian': 'https://t3.ftcdn.net/jpg/02/60/12/88/360_F_260128861_Q2ttKHoVw2VrmvItxyCVBnEyM1852MoJ.jpg',
  'Chinese': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB32-no76Q6_UJn2pFLGjUQIia3fAreXVrug&s',
  'Japanese': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOIlaMooFuagbYaoAWtan7cWqD_bzRLb7rNQ&s'
}

export default function CuisineGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
      {cuisines.map((c) => (
        <Link key={c} to={`/cuisine/${encodeURIComponent(c)}`} className="group rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white dark:bg-zinc-900">
          <div className="relative aspect-[4/3]">
            <img src={images[c]} alt={c} className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.03] transition"/>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"/>
            <div className="absolute bottom-2 left-2 right-2 text-white text-sm md:text-base font-semibold drop-shadow">{c}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
