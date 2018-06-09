import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
    const name = `wiz__${props.name}`;
    return (
        <div className="input">
            <input
                name={name}
                onChange={props.onChange}
                placeholder={props.name}
                value={props.state[name]}
            />
            <button onClick={() => props.select(name)}>Add</button>
        </div>
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
};

export default Input;