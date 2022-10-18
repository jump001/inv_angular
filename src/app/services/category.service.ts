import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConstantService } from './common/constant.service';

// model
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };
  constructor(private http: HttpClient, private constant: ConstantService) {}

  // อ่านข้อมูล Category ทั้งหมด (Method GET)
  getCategories(): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(
      this.constant.baseAPIURL + 'categories'
    );
  }

  // อ่านข้อมูล Category By ID (Method GET)
  getCategory(id: string): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(
      this.constant.baseAPIURL + 'category/' + id
    );
  }

  // เพิ่มข้อมูลหมวดหมู่ใหม่ (Method POST)
  createCategory(category: any): Observable<CategoryModel> {
    return this.http.post<CategoryModel>(
      this.constant.baseAPIURL + 'create_category',
      JSON.stringify(category),
      this.httpOptions
    );
  }

  // แก้ไขข้อมุล Category (Method PUT)
  updateCategory(id: string, category: any): Observable<CategoryModel> {
    return this.http.put<CategoryModel>(
      this.constant.baseAPIURL + 'edit_category/' + id,
      JSON.stringify(category),
      this.httpOptions
    );
  }

  // ลบรายการ Category (Method DELETE)
  deleteCategory(id: string) {
    return this.http.delete<CategoryModel>(
      this.constant.baseAPIURL + 'delete_category/' + id,
      this.httpOptions
    );
  }
}
