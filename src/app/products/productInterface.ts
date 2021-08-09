export interface Product{
    id: number,
    name: string,
    description: string,
    status: boolean,
    image: File | null,
    categoryId: number,
}

export interface Category{
    id:number,
    name: string
}