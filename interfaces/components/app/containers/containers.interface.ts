import { ReactNode } from "react";

export interface ContainerPropsI {
    children: ReactNode
    title: String
    subTitle: Function | String
}