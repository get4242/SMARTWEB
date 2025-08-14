# SMIG Smart Energy Website

เว็บไซต์บริษัท SMIG Smart Energy - ผู้นำด้านพลังงานแสงอาทิตย์ในไทย

## เกี่ยวกับโปรเจกต์

เว็บไซต์นี้เป็นหน้าแรกของบริษัท SMIG Smart Energy ที่ให้บริการด้านโซลาร์เซลล์และพลังงานแสงอาทิตย์อย่างครบวงจร ตั้งแต่การวางแผน ออกแบบ ติดตั้ง จนถึงการดูแลรักษา

## คุณสมบัติหลัก

- 🏠 **หน้าแรก**: แสดงข้อมูลภาพรวมและสถิติของบริษัท
- 🏢 **เกี่ยวกับเรา**: ประวัติและจุดเด่นของ SMIG Smart Energy
- ⚡ **ผลิตภัณฑ์**: รายละเอียดแผงโซลาร์เซลล์และอินเวอร์เตอร์
- 📦 **แพคเกจ**: แพคเกจโซลาร์เซลล์สำหรับความต้องการต่างๆ
- 🧮 **เครื่องคำนวณ**: คำนวณแพคเกจที่เหมาะสมตามค่าไฟฟ้า
- 📱 **แอปพลิเคชัน**: PSI Energy App สำหรับติดตามการผลิตไฟฟ้า
- 🏗️ **ผลงาน**: แสดงผลงานการติดตั้งจริง
- 📞 **ติดต่อเรา**: ข้อมูลการติดต่อและฟอร์มสอบถาม

## เทคโนโลยีที่ใช้

- **HTML5**: โครงสร้างเว็บไซต์
- **CSS3**: การออกแบบและ Responsive Design
- **JavaScript**: ฟังก์ชันการทำงานและ Interactive Elements
- **Font Awesome**: ไอคอนต่างๆ
- **Google Fonts**: ฟอนต์ Kanit สำหรับภาษาไทย

## โครงสร้างไฟล์

```
smig-website/
├── index.html          # หน้าหลักของเว็บไซต์
├── css/
│   └── style.css       # ไฟล์ CSS หลัก
├── js/
│   └── script.js       # ไฟล์ JavaScript หลัก
├── assets/
│   └── images/         # รูปภาพต่างๆ
└── README.md           # ไฟล์นี้
```

## การติดตั้งและใช้งาน

1. Clone repository นี้:
   ```bash
   git clone https://github.com/get4242/SMARTWEB.git
   ```

2. เปิดไฟล์ `index.html` ในเว็บเบราว์เซอร์

3. หรือใช้ Local Server:
   ```bash
   # ใช้ Python
   python -m http.server 8000
   
   # ใช้ Node.js
   npx serve .
   ```

## การ Deploy บน GitHub Pages

1. ไปที่ Settings ของ Repository
2. เลื่อนลงไปที่ส่วน "Pages"
3. เลือก Source เป็น "Deploy from a branch"
4. เลือก Branch เป็น "main" และ Folder เป็น "/ (root)"
5. คลิก "Save"

เว็บไซต์จะสามารถเข้าถึงได้ที่: `https://get4242.github.io/SMARTWEB/`

## การเชื่อมต่อ Custom Domain

หากต้องการใช้โดเมนของตัวเอง (เช่น simgsolar.asia):

1. เพิ่มไฟล์ `CNAME` ใน root directory ของ repository
2. ใส่ชื่อโดเมนในไฟล์ `CNAME` (เช่น `simgsolar.asia`)
3. ตั้งค่า DNS ที่ผู้ให้บริการโดเมน:
   - เพิ่ม CNAME record: `www` → `get4242.github.io`
   - เพิ่ม A records สำหรับ root domain:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

## ข้อมูลติดต่อ

- **บริษัท**: SMIG Smart Energy
- **เว็บไซต์**: [simgsolar.asia](https://simgsolar.asia)
- **อีเมล**: info@smig.co.th

## License

© 2024 SMIG Smart Energy. All rights reserved.

