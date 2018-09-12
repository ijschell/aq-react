import React, {Components} from 'react';

import './style.css';

const Form = () => {
    return (
        <div>
            <form action="#" method="#">
                <div>
                    <label>Nombre completo</label>
                    <input type="text" name="fullName" />
                </div>
                <div>
                    <label>Teléfono o Email</label>
                    <input type="text" name="phone" />
                </div>
                <div>
                    <label>Comentario</label>
                    <textarea></textarea>
                </div>
                <div className="contentSubmit">
                    <input type="submit" value="Enviar" className="action" />
                </div>
            </form>
        </div>
    );
}

export default Form;
