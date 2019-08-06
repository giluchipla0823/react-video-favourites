import React from 'react';
import PropTypes from 'prop-types';

const Header = ({onClickAdd}) => (
    <div className="header-content">
	{console.log('COMPONENTE HEADER')}
        <div className="header-title-text" >Mis vídeos favoritos</div>
        <input type="button" onClick={onClickAdd} value="Añadir Video" className="header-button-add"/>
    </div>
);

Header.propTypes = {
    onClickAdd: PropTypes.func.isRequired
};

export default React.memo(Header);