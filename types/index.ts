import { MouseEventHandler } from "react";

export interface CustomButtonProps {

    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;

}

export interface CustomFilter {
    title: string

}

export interface SearchManufacturerProps {

    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;

}

export interface CarProps {
    kml: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
    image: typeof import("*.jpg")
 //   gallery: string[];
}


export interface FilterProps {
    manufacturer: string
    year: number
    fuel: string
    limit: string
    model: string
}

export interface OptionProps{
    title: string;
    value: string
}

export interface CustomFilterProps {
    title: string,
    options: OptionProps[];

}