import { IsNumber, IsOptional, IsString, } from "class-validator";

export class CreateCourseDto {
    @IsNumber()
    @IsOptional()
    readonly id: number;

    @IsString()
    readonly name: string;

    @IsString()
    readonly description: string;

    @IsString({ each: true })
    readonly tags: string[];

    @IsNumber()
    readonly price: number;
}
