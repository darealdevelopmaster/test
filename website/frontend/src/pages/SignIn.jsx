import { Form, Input } from "../components/Form";
import { Button } from "../components";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="container">
      <section className="min-h-screen">
        <ul className="form-tabs" role="list">
          <li className="active">
            <Link to="/sign-in" replace>
              تسجيل الدخول
            </Link>
          </li>
          <li>
            <Link to="/sign-up" replace>
              انشئ حسابك
            </Link>
          </li>
        </ul>
        <Form onSubmit={() => {}}>
          <Form.Title
            label={"تسجيل الدخول"}
            desc={
              "ادخل البيانات بشكل صحيح لتتمكن من الدخول على المنصة والحصول على افضل تجربة"
            }
          />
          <div className="flex flex-col gap-8">
            <Input.Group>
              <Input id={"email"} label={"ادخل بريدك الالكتروني"} />
            </Input.Group>
            <Input.Group>
              <Input id={"password"} type={"password"} label={"كلمة المرور"} />
            </Input.Group>
            <Button fullWidth type="submit" label={"ارسل"} />
          </div>
          <div className="text-2xl text-center mt-12">
            ليس لديك حساب؟{" "}
            <Link replace className="underline text-red" to={"/sign-up"}>
              انشئ حسابك الان
            </Link>
          </div>
        </Form>
      </section>
    </div>
  );
};

export default SignIn;
