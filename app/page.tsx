import { Hero } from "@/components"
import { CarCard } from "@/components"
import data from "./../Data/data.module";
import styles from './page.module.css'


export default function Home() {
  const carsData = data.map(car => ({
    kml: car.kml,
    class: car.class,
    combination_mpg: car.combination_mpg,
    cylinders: car.cylinders,
    displacement: car.displacement,
    drive: car.drive,
    fuel_type: car.fuel_type,
    highway_mpg: car.highway_mpg,
    make: car.make,
    model: car.model,
    transmission: car.transmission,
    year: car.year,
    image: car.image,
  
  }));

  return (
    <main className="overflow-hidden">
      <div style={{marginBottom:"-60px"}}>
        <Hero />
      </div>
      <div className="mt-12 padding-x max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div 
          className={`${styles['car-list-row']} car-list`}
          >
          {carsData.map((car, index) => (
            <CarCard key={index} car={car}  />
          ))}
        </div>
      </div>
    </main>
  )
}
