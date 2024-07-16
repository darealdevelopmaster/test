import { useEffect, useState } from "react";
import { Button, Table } from "../components";

const booksData = [
  {
    "#": 1,
    "اسم الكتاب": "كتاب الشهر الأول",
    الصف: "الثاني الثانوي",
    السعر: 120,
    العدد: 5,
  },
  {
    "#": 2,
    "اسم الكتاب": "كتاب الشهر الرابع",
    الصف: "الثالث الثانوي",
    السعر: 120,
    العدد: 6,
  },
  {
    "#": 3,
    "اسم الكتاب": "المراجعة النهائية لشهر نوفمبر",
    الصف: "الثالث الثانوي",
    السعر: 150,
    العدد: 7,
  },
  {
    "#": 4,
    "اسم الكتاب": "كتاب الشهر الثاني",
    الصف: "الأول الثانوي",
    السعر: 100,
    العدد: 8,
  },
  {
    "#": 5,
    "اسم الكتاب": "المراجعة النهائية لشهر أكتوبر",
    الصف: "الثاني الثانوي",
    السعر: 120,
    العدد: 1,
  },
];

const Books = () => {
  const [totalAmount, setTotalAmount] = useState({});
  let totalPrice = 0;

  useEffect(() => {
    document
      .querySelectorAll("input[type=number]")
      .forEach((numberInput, index) => {
        numberInput.id = index + 1;
      });
  }, [totalAmount]);

  for (const key in totalAmount) {
    totalPrice += totalAmount[key]?.price ?? 0; // Access price for each object
  }

  const handleSubmit = () => {
    if (totalPrice != 0) {
      alert("Payment Successful");
      console.log(totalAmount);
    }
  };

  return (
    <div className="container">
      <section className="min-h-screen grid lg:grid-cols-5 grid-cols-3 gap-x-4 gap-y-6 items-start">
        {/* Books Table */}
        <div className="books-box books-table col-span-3 bg-[#eee] p-10 rounded-2xl lg:order-2">
          <h4 className="text-right mb-8">يرجى وضع عدد الكتب المطلوب شراءها</h4>
          <Table
            data={booksData}
            setTotalAmount={setTotalAmount}
            totalAmount={totalAmount}
          />
        </div>

        {/* Payment Form */}
        <div className="books-box books-orders col-span-3 lg:col-span-2 bg-[#eee] p-10 rounded-2xl order-1">
          <h4 className="text-right mb-8">ملخص الطلب</h4>
          <div className="item flex items-center justify-between flex-row-reverse mb-6">
            <p className="text-xl">مصاريف الشحن</p>
            <span className="text-xl">
              {Math.abs(Number(totalPrice * 0.15)).toFixed(2)} L.E.
            </span>
          </div>
          <div className="item flex items-center justify-between flex-row-reverse mb-8">
            <p className="text-xl">الاجمالي</p>
            <span className="text-xl">
              {Math.abs(Number(totalPrice)).toFixed(2)} L.E.
            </span>
          </div>
          <Button
            color="orange"
            onClick={handleSubmit}
            label="الدفع من خلال فوري"
            fullWidth
            small
            disabled={totalPrice == 0 ? true : false}
          />
        </div>
      </section>
    </div>
  );
};

export default Books;
