import Refueling from './refueling'
import CarService from './car-service'

export class Car {
  brand: String
  model: String
  refueling: Refueling[]
  carService: CarService[]
}