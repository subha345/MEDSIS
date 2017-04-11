import React from 'react';

const MultiDropdownList = ({ name }) =>
    <li><a href="#">{name}</a></li>

const DropdownList = ({ name, options }) => {
    if ({ options }.options === "null") {
        return <li><a href="#">{name}</a></li>
    } else {
        return (<li className="dropdown-submenu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">{name}</a>
            <ul className="dropdown-menu">
                {options.map((value, index) =>
                <MultiDropdownList key={index} {...value} />
            )}
            </ul>
        </li>
        )
    }
}
const Tab = ({ name, options }) =>
    <li><a href="#" className="dropdown-toggle" data-toggle="dropdown">{name}</a>
        <ul className="dropdown-menu dropdown-text">
            {options.map((value, index) =>
                <DropdownList key={index} {...value} />
            )}
        </ul>
    </li>

export default Tab;