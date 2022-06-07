import PropTypes from 'prop-types';

import * as icons from '../../../assets';
import { iconProps } from "./utils";

const Icon = ({ name }) => {
    const src = icons[`${name}Icon`];

    return <img alt={name + ' Icon'} src={src} />
}


Icon.propTypes = {
    name: PropTypes.oneOf(iconProps)
}

export default Icon

