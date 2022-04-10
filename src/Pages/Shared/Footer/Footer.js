import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <p>
                    <small>copyright &copy; {(new Date().getFullYear())} </small>
                </p>
            </footer>
        </div>
    );
};

export default Footer;