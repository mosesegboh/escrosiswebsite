import React, { useState } from 'react';
import TermsOfService from '../Pages/TermsOfService.jsx';
import PrivacyPolicy from '../Pages/PrivacyPolicy.jsx';
import TermsAndConditions from '../Pages/TermsAndConditions.jsx';
import '../modal.css';

function Footer() {
    // State to track if the modals are open
    const [showModal, setShowModal] = useState(false);
    const [showModalPrivacyPolicy, setShowModalPrivacyPolicy] = useState(false);
    const [showModalTermsAndConditions, setShowModalTermsAndConditions] = useState(false);

    // Open and close handlers for Terms of Service
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <footer className="footer_section" id="footer-section">
                <p>
                    &copy; 2017 Escrosis | {' '}
                    <span
                        className="terms-link"
                        onClick={openModal}
                        style={{ textDecoration: 'none', cursor: 'pointer' }}
                    >
                        Terms Of Service
                    </span> | {' '}
                    <span
                        className="terms-link"
                        onClick={() => setShowModalPrivacyPolicy(true)}
                        style={{ textDecoration: 'none', cursor: 'pointer' }}
                    >
                        Privacy Policy
                    </span> | {' '}
                    <span
                        className="terms-link"
                        onClick={() => setShowModalTermsAndConditions(true)}
                        style={{ textDecoration: 'none', cursor: 'pointer' }}
                    >
                        Terms and conditions
                    </span>
                </p>
            </footer>

            <a data-scroll href="#header" id="scroll-to-top">
                <i className="arrow_carrot-up"></i>
            </a>

            {/* Render Terms of Service modal */}
            {showModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside the content area
                    >
                        <button onClick={closeModal}>Close</button>
                        <TermsOfService />
                    </div>
                </div>
            )}

            {/* Render Privacy Policy modal using the correct state variable */}
            {showModalPrivacyPolicy && (
                <div className="modal-overlay" onClick={() => setShowModalPrivacyPolicy(false)}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={() => setShowModalPrivacyPolicy(false)}>Close</button>
                        <PrivacyPolicy />
                    </div>
                </div>
            )}

            {/* Render Terms and conditions modal using the correct state variable */}
            {showModalTermsAndConditions && (
                <div className="modal-overlay" onClick={() => setShowModalTermsAndConditions(false)}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={() => setShowModalTermsAndConditions(false)}>Close</button>
                        <TermsAndConditions />
                    </div>
                </div>
            )}
        </>
    );
}

export default Footer;
