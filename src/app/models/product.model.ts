import { CategoryModel } from "./category.model";

export class ProductModel {
    _id!:            string;
    ProductID!:      number;
    CategoryID!:     number;
    ProductName!:    string;
    UnitPrice!:      number;
    ProductPicture!: string;
    UnitInStock!:    number;
    CreatedDate!:    Date;
    ModifiedDate!:   Date;
    category!:       CategoryModel[];
}