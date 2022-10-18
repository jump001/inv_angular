import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

import Swal from 'sweetalert2';

declare var $: any

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // สร้างตัวแปรรับข้อมูลจาก API
  dataProduct: any = [];

    // สร้างตัวแปรกำหนดค่าบนฟอร์มเพิ่มหมวดหมู่
    dataProductAdd = {
      UnitPrice: '',
      ProductName: '',
      CategoryID: '',
      UnitInStock: '',
    };
   
 // สร้างตัวแปรสำหรับดึงข้อมูลหมวดหมู่แสดงบนฟอร์มเพื่อแก้ไข
 dataProductEdit = {
  p_id: '',
  ProductName: '',
  UnitPrice: '',
  CategoryID: '',
  UnitInStock: ''
};
  constructor(private api:ProductService) { }

  ngOnInit(): void {
   // Read Product API
   this.fetchProduct();
  }
 
  // ฟังกชันก์ในการโหลดข้อมูลทั้งหมดแสดงในตาราง
  fetchProduct() {
    this.api.getProducts().subscribe((data: any) => {
      console.log(data);
      this.dataProduct = data;
    });
  }
   // ฟังก์ชันการบันทึกรายการหมวดหมู่
   submitAddProduct() {
    if (
      this.dataProductAdd.ProductName == '' ||
      this.dataProductAdd.CategoryID == '' ||
      this.dataProductAdd.UnitPrice == '' ||
      this.dataProductAdd.UnitInStock == ''
    ) {
      Swal.fire({
        icon: 'error',
        title: 'ป้อนข้อมูลให้ครบก่อน',
      });
    } else {
      this.api.createProduct(this.dataProductAdd).subscribe((data: {}) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'เพิ่มสินค้าเรียบร้อยแล้ว',
          showConfirmButton: false,
          timer: 1500,
        });
        this.fetchProduct(); // โหลดข้อมูลใหม่แสดงในตาราง
        // ปิดหน้าต่าง Modal Add สินค้า
        $('#modalAdd').modal('hide');
        // การเคลียร์ค่าจากฟอร์ม
        this.dataProductAdd = {
          ProductName: '',
          UnitPrice: '',
          CategoryID:'',
          UnitInStock:''
        };
      });
    }
  }


  
// ฟังก์ชันแสดงหน้าต่างแก้ไขข้อมูล
editProduct(id: string){
  this.api.getProductID(id).subscribe((data: any) => {
    // console.log(data[0].CategoryName)
    this.dataProductEdit.p_id = data[0]._id
    this.dataProductEdit.ProductName = data[0].ProductName
    this.dataProductEdit.UnitPrice = data[0].UnitPrice
    this.dataProductEdit.CategoryID = data[0].CategoryID
    this.dataProductEdit.UnitInStock = data[0].UnitInStock
    // แสดง Modal 
    $("#modalEdit").modal('show');
  });
}

// ฟังก์ขันสำหรับการแก้ไขข้อมูล
submitEditProduct(){
  this.api.updateProduct((this.dataProductEdit.p_id), this.dataProductEdit).subscribe((data: {}) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'แก้ไขหมวดหมู่เรียบร้อยแล้ว',
      showConfirmButton: false,
      timer: 1500
    })
    // ซ่อน Modal
    $("#modalEdit").modal('hide');
    // โหลดรายการหมวดหมู่ใหม่
    this.fetchProduct(); // โหลดข้อมูลใหม่แสดงในตาราง
  });
}

  // ฟังก์ชันสำหรับการลบข้อมูล
  deleteProduct(id: string) {
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
        this.api.delProduct(id).subscribe((data: any) => {
          // โหลดรายการหมวดหมู่ใหม่
          this.fetchProduct(); // โหลดข้อมูลใหม่แสดงในตาราง
        });
      }
    });
  }

}

