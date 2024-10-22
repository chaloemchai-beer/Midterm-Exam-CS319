## รายละเอียดโปรเจกต์
โปรเจกต์นี้เป็นแอปพลิเคชันที่ใช้ในการดึงข้อมูลผลิตภัณฑ์จาก API ของ [DummyJSON](https://dummyjson.com/) โดยสามารถแสดงและกรองผลิตภัณฑ์ตามเงื่อนไขที่กำหนด รวมถึงเพิ่มสินค้าเข้าไปใน Inventory ได้

## ฟีเจอร์
- ดึงข้อมูลผลิตภัณฑ์จาก DummyJSON API
- แสดงรายการผลิตภัณฑ์
- กรองผลิตภัณฑ์ตามเงื่อนไขที่กำหนด
- โครงสร้างไฟล์ที่ชัดเจนและมีระเบียบ

## ไลบรารีและเครื่องมือที่ใช้

โปรเจกต์นี้สร้างขึ้นโดยใช้ไลบรารีและเครื่องมือดังต่อไปนี้:

- **Node.js**: Runtime ที่ใช้สำหรับรันโปรเจกต์
- **TypeScript**: ภาษาที่มีการตรวจสอบประเภทข้อมูล ซึ่งสร้างขึ้นจาก JavaScript
- **Nodemon**: ยูทิลิตี้ที่ช่วยตรวจสอบการเปลี่ยนแปลงของซอร์สโค้ดและรีสตาร์ทเซิร์ฟเวอร์อัตโนมัติ

### **โฟลเดอร์และไฟล์สำคัญ:**

- **`dist/`**: ไฟล์ JavaScript ที่ถูกคอมไพล์จาก TypeScript ซึ่งจะถูกใช้โดย Node.js เพื่อรันแอปพลิเคชัน
  
- **`src/models/`**: ประกอบด้วยโมเดลหลักของแอปพลิเคชัน
  - `DiscountedProduct.ts`: โมเดลสินค้าแบบมีส่วนลด
  - `Inventory.ts`: จัดการข้อมูลสินค้าคงคลัง
  - `Product.ts`: โมเดลสินค้าแบบพื้นฐาน

- **`src/services/`**: ไฟล์สำหรับการเชื่อมต่อกับ API
  - `api.ts`: ฟังก์ชันสำหรับการดึงข้อมูลสินค้าจาก API ภายนอก

- **`src/types/`**: เก็บไฟล์กำหนดประเภทข้อมูลที่ใช้ในโปรเจกต์
  - `types.ts`: กำหนดประเภทต่างๆ เช่น `Customer` เพื่อการตรวจสอบประเภทที่เข้มงวดใน TypeScript

- **`src/utils/`**: ฟังก์ชันยูทิลิตี้ต่างๆ
  - `helpers.ts`: ฟังก์ชันช่วยเหลือต่างๆ เช่น `getCustomerInfo`, `createPriceMultiplier`, และ `formatPrice`

- **`index.ts`**: จุดเริ่มต้นของแอปพลิเคชันที่รวมการทำงานของโมดูลต่างๆ และเรียกใช้งาน

- **`package.json`**: รายการ dependencies ของโปรเจกต์และสคริปต์ที่ใช้ในการรันหรือคอมไพล์โปรเจกต์

- **`tsconfig.json`**: ไฟล์การตั้งค่าของ TypeScript สำหรับการคอมไพล์โค้ด

---

### วิธีการเริ่มต้นใช้งาน

1. **ติดตั้ง dependencies**:
   ```bash
   npm install
2. **รัน npm run dev เพื่อให้ tsc อัพเดตทุกครั้งที่เปลี่ยนโค้ด**:
   ```bash
   npm run dev
3. **รันแอปพลิเคชัน เพื่อเช็ดผลลัพธ์**:
   ```bash
   npm run start

---

### แหล่งที่มา
ข้อมูลและความช่วยเหลือในการพัฒนาแอปนี้ได้รับการสนับสนุนจาก [ChatGpt](https://chatgpt.com/)
