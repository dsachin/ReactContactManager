import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


const AddContactInput = ({ label, name, type, value, placeholder, onChange, error }) => {
    return (
        <div className="form-group">
            <label htmlFor={label} >Name</label>
            <input type={type} name={name} className={classnames("form-control form-control-lg", { 'is-invalid': error })} placeholder={placeholder} value={value} onChange={onChange} />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

AddContactInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string

}

AddContactInput.defaultProps = {
    type: 'text'
}

export default AddContactInput;