import { Form, Input, TextArea } from "../components/Form";
import { Button } from "../components";

const Contact = () => {
  return (
    <div className="container">
      <section className="min-h-screen">
        <Form onSubmit={() => {}}>
          <Form.Title
            label={"تواصل معنا"}
            desc={"لديك أي سؤال أو شكوى أو اقتراح؟ لا تتردد"}
          />
          <div className="flex flex-col gap-8">
            <div className="flex flex-row-reverse gap-8">
              <Input.Group>
                <Input id={"first_name"} label={"الاسم الاول"} type={"text"} />
              </Input.Group>
              <Input.Group>
                <Input id={"last_name"} label={"الاسم الاخير"} type={"text"} />
              </Input.Group>
            </div>
            <Input.Group>
              <Input id={"email"} required label={"ادخل بريدك الالكتروني"} />
            </Input.Group>
            <TextArea.Group>
              <TextArea id={"message"} placeholder={"اكتب رسالتك هنا. رأيك يهمنا"} />
            </TextArea.Group>
            <Button fullWidth type="submit" label={"ارسل"} />
          </div>
        </Form>
      </section>
    </div>
  );
};

export default Contact;
