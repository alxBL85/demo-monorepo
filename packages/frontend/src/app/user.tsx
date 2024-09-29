import React from "react";
import { BaseDTO, validateBaseDTO } from "utilities/src";

export default function User ()
 {
    const base:BaseDTO = {
        id: 111,
        data: {
            nombre: "Alex",
            email: "Im@lex.com"
        }
    }

    const validation = validateBaseDTO(base)
    if(validation.result)
        return <p>{base.id} - {base.data.nombre}</p>

    return <p>There is an error</p>
 }