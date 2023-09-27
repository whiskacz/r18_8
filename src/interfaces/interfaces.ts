export interface DataInterface {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
}
export interface ExternalFuncion {
    breakfastHandle : () => void;
    lunchHandle : () => void;
    shakeHandle : () => void;
}
