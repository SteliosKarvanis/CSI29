"use client";

import React from "react";
import { Button, Form, Input, Card } from "antd";
import {
  background_color_default,
  background_color_secondary,
  button_color,
} from "@/lib/constants";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export const Login = (): JSX.Element => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Card
      title="Sign In"
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "30%",
        borderBottom: 0,
        textAlign: "center",
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{}}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{
              color: "white",
              borderColor: "rgba(0, 0, 0, 0.2)",
              width: "100%",
              background: button_color,
            }}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
