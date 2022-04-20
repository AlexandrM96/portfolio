import React from "react";
import "./ContactInformation.scss";

function ContactInformation() {
    return (
        <div className="Contact-Information">
            <ul className="Contact-Information__List">
                <li className="list__Info">
                    <span className="list__Title">
                        ФИО:
                    </span>
                    Александр М
                </li>
                <li className="list__Info">
                    <span className="list__Title">
                        Адрес:
                    </span>
                    Московская область
                </li>
                <li className="list__Info">
                    <span className="list__Title">
                        Телефон:
                    </span>
                    +7(9777)-777-77-77
                </li>
                <li className="list__Info">
                    <span className="list__Title">
                        Почта:
                    </span>
                    super@yandex.ru
                </li>
            </ul>
        </div>
    );
}

export default ContactInformation;