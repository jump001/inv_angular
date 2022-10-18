import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConstantService } from './common/constant.service';

// model
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };
  constructor(private http: HttpClient, private constant: ConstantService) {}

  // อ่านข้อมูล Category ทั้งหมด (Method GET)
  getProducts(): Observable<ProductModel> {
    return this.http.get<ProductModel>(
      this.constant.baseAPIURL + 'products'
    );
  }

  // อ่านข้อมูล Category By ID (Method GET)
  getProductID(id: string): Observable<ProductModel> {
    return this.http.get<ProductModel>(
      this.constant.baseAPIURL + 'product/' + id
    );
  }

  // เพิ่มข้อมูล(Method POST)
  createProduct(product: any): Observable<ProductModel> {
    return this.http.post<ProductModel>(
      this.constant.baseAPIURL + 'create_product',
      JSON.stringify(product),
      this.httpOptions
    );
  }

  // // แก้ไขข้อมุล product (Method PUT)
  updateProduct(id: string, product: any): Observable<ProductModel> {
    return this.http.put<ProductModel>(
      this.constant.baseAPIURL + 'edit_product/' + id,
      JSON.stringify(product),
      this.httpOptions
    );
  }

  // // ลบรายการ Category (Method DELETE)
  delProduct(id: string) {
    return this.http.delete<ProductModel>(
      this.constant.baseAPIURL + 'delete_product/' + id,
      this.httpOptions
    );
  }
}
