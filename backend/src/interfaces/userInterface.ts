export interface IUser {
  type: null | string,
  message: string,
}

export interface IResult {
  dataValues: {
    id: number,
    name: string,
  }
}