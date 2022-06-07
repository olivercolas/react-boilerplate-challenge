import * as icons from "../../../assets";

export const iconProps = Object
        .keys(icons)
        .map(iconName =>
            iconName.replace('Icon', '')
        )
