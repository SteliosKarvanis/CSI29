import { InboxOutlined } from "@ant-design/icons";
import { Form, Slider, Upload } from "antd";

export interface SliderProps {
  min: number;
  max: number;
  show_dots: boolean;
}
const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export const SliderCustom = (props: any): JSX.Element => {
  const { min, max, show_dots } = props;
  const customMarks: { [key: number]: string } = {};
  for (let i = min; i < max; i++) {
    customMarks[i] = i.toString();
  }
  customMarks[max] = max + "+";
  return (
    <Slider
      min={min}
      max={max}
      dots={show_dots}
      range
      defaultValue={[min, max]}
      marks={show_dots ? customMarks : {}}
    />
  );
};

export const Dragger = (props: any): JSX.Element => {
  return (
    <Form.Item label="Dragger">
      <Form.Item
        name="dragger"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        noStyle
      >
        <Upload.Dragger name="files" action="/upload.do">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload.
          </p>
        </Upload.Dragger>
      </Form.Item>
    </Form.Item>
  );
};
