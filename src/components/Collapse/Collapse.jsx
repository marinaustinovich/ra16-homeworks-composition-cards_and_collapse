import React, { useState } from 'react';

function Collapse({ collapsedLabel = 'Развернуть', expandedLabel = 'Свернуть' }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="container d-flex justify-content-center">
            <button className="btn btn-primary" onClick={toggleCollapse}>
                {isCollapsed ? collapsedLabel : expandedLabel}
            </button>
            <div className={`collapse ${isCollapsed ? '' : 'show'}`}>
                <div className="card card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec felis ultrices, elementum neque sit amet,
                    efficitur velit. Nullam in est vitae leo facilisis malesuada eu et nunc.
                </div>
            </div>
        </div>
    );
}

export default Collapse;
