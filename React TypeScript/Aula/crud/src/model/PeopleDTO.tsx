export interface PeopleDTO {
  pessoa: {
    idPessoa: number,
    nome: string,
    email: string,
    cpf: string,
    dataNascimento: string
  }[]
}