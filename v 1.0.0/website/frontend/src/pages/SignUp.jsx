import { Form, Input, Select } from "../components/Form";
import { Button } from "../components";

import "../styles/components/form.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container">
      <section className="min-h-screen">
        <ul className="form-tabs" role="list">
          <li>
            <Link to="/sign-in" replace>
              تسجيل الدخول
            </Link>
          </li>
          <li className="active">
            <Link to="/sign-up" replace>
              انشئ حسابك
            </Link>
          </li>
        </ul>
        <Form onSubmit={() => {}}>
          <Form.Title
            label={"انشئ حسابك"}
            desc={"املأ البيانات بشكل صحيح لتضمن أفضل تجربة في المنصة"}
          />
          <div className="flex flex-col gap-8">
            <div className="flex flex-col xs:flex-row-reverse gap-8">
              <Input.Group>
                <Input id={"first_name"} label={"الاسم الاول"} type={"text"} />
              </Input.Group>
              <Input.Group>
                <Input id={"last_name"} label={"الاسم الاخير"} type={"text"} />
              </Input.Group>
            </div>
            <Select.Group>
              <Select
                id={"city"}
                options={[
                  "القاهرة",
                  "الاسكندرية",
                  "الجيزة",
                  "القليوبية",
                  "بور سعيد",
                  "السويس",
                  "الغربية",
                  "الأقصر",
                  "أسيوط",
                  "الدقهلية",
                  "الفيوم",
                  "الشرقية",
                  "الاسماعيلية",
                  "البحيرة",
                  "أسوان",
                  "قنا",
                  "المنيا",
                  "سوهاج",
                  "بني سويف",
                  "المنوفية",
                  "كفر الشيخ",
                  "دمياط",
                  "البحر الأحمر",
                  "جنوب سيناء",
                  "مطروح",
                ]}
              />
            </Select.Group>
            <Select.Group>
              <Select
                id={"school_year"}
                options={[
                  "الصف الأول الثانوي",
                  "الصف الثاني الثانوي",
                  "الصف الثالث الثانوي",
                ]}
              />
            </Select.Group>
            <Input.Group>
              <Input
                id={"email"}
                required
                type={"email"}
                label={"البريد الالكتروني"}
              />
            </Input.Group>
            <div className="flex flex-col xs:flex-row-reverse gap-8">
              <Input.Group>
                <Input
                  id={"password"}
                  type={"password"}
                  label={"كلمة المرور"}
                />
              </Input.Group>
              <Input.Group>
                <Input
                  id={"password2"}
                  type={"password"}
                  label={"تأكيد كلمة المرور"}
                />
              </Input.Group>
            </div>
            <div className="flex justify-center">
              <Button fullWidth label={"ارسل"} />
            </div>
            <div className="text-2xl text-center mt-12">
              هل لديك حساب؟{" "}
              <Link replace className="underline text-red" to={"/sign-in"}>
                سجل دخولك
              </Link>
            </div>
          </div>
        </Form>
      </section>
    </div>
  );
};

export default SignUp;
