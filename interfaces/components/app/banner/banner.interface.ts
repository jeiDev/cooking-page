import { BannerI } from "~/interfaces/data/banner/banner.interface"

export interface BannerPropsI{
    items?: Array<BannerI>
    error: Boolean
}

export interface ItemBannerPropsI extends BannerI{
    showChef?: Boolean
}