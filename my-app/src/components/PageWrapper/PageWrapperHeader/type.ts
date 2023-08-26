import { ReactElement } from "react";
import { TFunction } from "../../../types";

export type TWrapperPAgeHeader = {
    renderHeader: TFunction<ReactElement>;
    renderBackTo?: TFunction<ReactElement>
}