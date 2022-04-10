import { UserI } from "../user/user.interface"

export interface BannerI {
    title: String
    description: String
    minutesPreparation: 30,
    typeFood: String
    createAt: Date
    bgColor: String
    image: String
    chef: UserI
}