import PropTypes from 'prop-types'

const Button = ({ color, text, handleClickAdd }) => {

    return (
        <button onClick={handleClickAdd} style={{ backgroundColor: color }} className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    handleClickAdd: PropTypes.func,
}
export default Button