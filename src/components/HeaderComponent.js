import React from 'react';

function HeaderComponent(props) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="row justify-content-center">
                    <div className="col-2">
                        <a className="navbar-brand" href="#"> Vani Property</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default HeaderComponent;