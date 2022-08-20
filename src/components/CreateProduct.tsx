import React, {useState} from "react";
import {IProduct} from "../models";
import axios from "axios";
import {ErrorMessage} from "./ErrorMessage";

const productData:IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 5
    }
}

interface CreateProductProps {
    onCreate: (product:IProduct) => void
}


export function CreateProduct ({ onCreate }: CreateProductProps){
    const [value,setValue] = useState('')
    const [error, setError] = useState('')


    const SubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
        setError('')

        if(value.trim(). length === 0){
            setError('Ошибка, введите товар?')
            return
        }
        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(response.data)
}


const changeHandler = (event:React.KeyboardEvent<HTMLInputElement>) => {
    setValue(event.target.value)}
    return(

        <form onSubmit={SubmitHandler}>
            <input type="text"
            className="border py-2 px-4 mb-2 w-full btn-outline-danger "
            placeholder="Введите имя товара..."
            value={value}
            // onChange={event => setValue(event.target.value)}   так тоже можно
            onChange={changeHandler}
            />

            {error && <ErrorMessage error={error}/>}

            <button type="submit" className="px-4 py-2 border bg-blue-400 hover:text-white">
                {
                    'Создать'
                }
            </button>

        </form>
    )
}