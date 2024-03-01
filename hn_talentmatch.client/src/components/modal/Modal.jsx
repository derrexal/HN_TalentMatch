import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { ModalOverlay, ModalContainer, CloseButton } from '../../styles/ModalStyles';
import {ActionButton} from "../../styles/CardStyles.js"; // Импортируем стилизованные компоненты из файла ModalStyles

const Modal = ({ onClose, children, handleCloseDetails }) => {
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.modal-container')) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [onClose]);

    return ReactDOM.createPortal(
        <ModalOverlay>
            <ModalContainer className="modal-container">
                <CloseButton onClick={onClose}>X</CloseButton>
                {children}
                <ActionButton onClick={onClose}>Закрыть</ActionButton>
            </ModalContainer>
        </ModalOverlay>,
        document.getElementById('modal-root')
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;
