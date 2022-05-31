import PropTypes from 'prop-types';
import * as icons from '../../../assets';

const Icon = ({ name }) => {
    const src = icons[`${name}Icon`];

    return <img alt={name + ' Icon'} src={src} />
}

Icon.propTypes = {
    name: PropTypes.oneOf([
        'DS',
        'Ayden',
        'Amex',
        'ApplePay',
        'BrainTree',
        'DirectDebit',
        'Discovery',
        'GoCardless',
        'GooglePay',
        'Jcb',
        'Klarna',
        'Mastercard',
        'PaymentCard',
        'Paypal',
        'Primer',
        'Ravelin',
        'Sift',
        'Stripe',
        'Visa'
    ])
}

export default Icon

