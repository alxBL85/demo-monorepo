export type BaseType = Record<string, any>;

export enum Status {
    SUCCESS=1, FAIL=0, UNKNOW=-1
}

export interface BaseDTO {
    id: number,
    data: BaseType,
    other?: any
}

export interface ValidateResult {
    result: Status,
    data?: BaseDTO,
    errors?: string[]
}

export function validateBaseDTO(object:any): ValidateResult
{   const validation = (object?.id && object.id > 0)
    return {
        result: validation? Status.SUCCESS : Status.FAIL,
        data: object as BaseDTO,
        errors: validation? [] : ["is is incorrect"]
    }
     
} 