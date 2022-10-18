import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../../services/category.service';

import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  // สร้างตัวแปรรับข้อมูลจาก API
  dataCategory: any = [];

  // สร้างตัวแปรกำหนดค่าบนฟอร์มเพิ่มหมวดหมู่
  dataCategoryAdd = {
    CategoryName: '',
    CategoryStatus: '',
  };
  // สร้างตัวแปรสำหรับดึงข้อมูลหมวดหมู่แสดงบนฟอร์มเพื่อแก้ไข
  dataCategoryEdit = {
    cat_id: '',
    CategoryName: '',
    CategoryStatus: '',
  };
  // ฟังก์ชันแสดงหน้าต่างแก้ไขข้อมูล
  editCategory(id: string) {
    this.api.getCategory(id).subscribe((data: any) => {
      // console.log(data[0].CategoryName)
      this.dataCategoryEdit.cat_id = data[0]._id;
      this.dataCategoryEdit.CategoryName = data[0].CategoryName;
      this.dataCategoryEdit.CategoryStatus = data[0].CategoryStatus;
      // แสดง Modal
      $('#modalEdit').modal('show');
    });
  }

  // ฟังก์ขันสำหรับการแก้ไขข้อมูล
  submitEditCategory() {
    this.api
      .updateCategory(this.dataCategoryEdit.cat_id, this.dataCategoryEdit)
      .subscribe((data: {}) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'แก้ไขหมวดหมู่เรียบร้อยแล้ว',
          showConfirmButton: false,
          timer: 1500,
        });
        // ซ่อน Modal
        $('#modalEdit').modal('hide');
        // โหลดรายการหมวดหมู่ใหม่
        this.fetchCategory(); // โหลดข้อมูลใหม่แสดงในตาราง
      });
  }
  constructor(private api: CategoryService) {}

  ngOnInit(): void {
    // Read Product API
    this.fetchCategory();
  }

  // ฟังกชันก์ในการโหลดข้อมูลทั้งหมดแสดงในตาราง
  fetchCategory() {
    this.api.getCategories().subscribe((data: any) => {
      console.log(data);
      this.dataCategory = data;
    });
  }
  // ฟังก์ชันการบันทึกรายการหมวดหมู่
  submitAddCategory() {
    if (
      this.dataCategoryAdd.CategoryName == '' ||
      this.dataCategoryAdd.CategoryStatus == ''
    ) {
      Swal.fire({
        icon: 'error',
        title: 'ป้อนข้อมูลให้ครบก่อน',
      });
    } else {
      this.api.createCategory(this.dataCategoryAdd).subscribe((data: {}) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'เพิ่มหมวดหมู่ใหม่เรียบร้อยแล้ว',
          showConfirmButton: false,
          timer: 1500,
        });
        this.fetchCategory(); // โหลดข้อมูลใหม่แสดงในตาราง
        // ปิดหน้าต่าง Modal Add สินค้า
        $('#modalAdd').modal('hide');
        // การเคลียร์ค่าจากฟอร์ม
        this.dataCategoryAdd = {
          CategoryName: '',
          CategoryStatus: '',
        };
      });
    }
  }

  // ฟังก์ชันสำหรับการลบข้อมูล
  deleteCategory(id: string) {
    Swal.fire({
      title: 'ยืนยันการลบรายการนี้',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#cbced4',
      confirmButtonText: 'ใช่ ลบเลย',
      cancelButtonText: 'ไม่เก็บไว้ก่อน',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'ลบรายการเรียบร้อยแล้ว',
          showConfirmButton: false,
          timer: 1500,
        });
        this.api.deleteCategory(id).subscribe((data: any) => {
          // โหลดรายการหมวดหมู่ใหม่
          this.fetchCategory(); // โหลดข้อมูลใหม่แสดงในตาราง
        });
      }
    });
  }
}
