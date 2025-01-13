export default interface ResultData<T> {
    code: number
    msg: string
    data: Array<T>
}
export enum ErrorCode {

}

export enum HTTPMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH'
}

export enum currentPage {
    USER = 1,
    COMPANY,
    ROLE,
    MISSION,
    MENU
}