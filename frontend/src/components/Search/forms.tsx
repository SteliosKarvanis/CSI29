import { Button, Form, Select, Switch } from "antd";
import { SliderCustom } from "../FormsUtils";

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const onFinish = (values: any) => {
  console.log("Received values of form: ", values);
};

export const SearchForms = (): JSX.Element => {
  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{}}
      style={{
        width: "100%",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Form.Item
        name="select-multiple"
        label="Select[multiple]"
        rules={[
          {
            required: true,
            message: "Please select your favourite colors!",
            type: "array",
          },
        ]}
      >
        <Select mode="multiple" placeholder="Please select favourite colors">
          <Option value="red">Red</Option>
          <Option value="green">Green</Option>
          <Option value="blue">Blue</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="pronta_entrega"
        label="Pronta Entrega"
        valuePropName="checked"
      >
        <Switch defaultChecked />
      </Form.Item>

      <Form.Item name="quartos" label="Quartos">
        <SliderCustom min={1} max={5} show_dots />
      </Form.Item>

      <Form.Item name="banheiros" label="Banheiros">
        <SliderCustom min={1} max={5} show_dots />
      </Form.Item>

      <Form.Item name="garagem" label="Garagem">
        <SliderCustom min={1} max={5} show_dots />
      </Form.Item>

      <Form.Item name="tamanho" label="Tamaho">
        <SliderCustom min={1} max={500} />
      </Form.Item>

      <Form.Item name="valor" label="Valor">
        <SliderCustom min={1000} max={1e6} />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button htmlType="submit">Submit</Button>
        <Button htmlType="reset">reset</Button>
      </Form.Item>
    </Form>
  );
};
