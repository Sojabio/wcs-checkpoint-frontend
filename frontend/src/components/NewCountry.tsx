import { CountriesDocument, useAddCountryMutation } from '@/graphql/generated/schema';
import { Button, Form, Input } from 'antd';
import React from 'react'
import ContinentSelect from './ContinentsSelect';

export default function NewCountry() {
    const [form] = Form.useForm()

    const [addCountry] = useAddCountryMutation({
        onCompleted(data) {
          console.log("mutation completed data", data);
        },
        onError(error) {
          console.log("error after executing mutation", error);
        },
        refetchQueries: [ CountriesDocument],
      });

    const onFinish = async (values: any) => {
    const formJson = {
        ...values,
        continent: values.continent.id};

    await addCountry({
        variables: {
        data: formJson,
        },
    });
    };
    

    return (
          <Form
            layout= 'inline'
            onFinish={onFinish}
            name=""
          >
            <Form.Item
              label="Name:"
              name="name"
              rules={[
                { required: true, message: "Name must be provided" },
              ]}
            >
              <Input className="text-field" />
            </Form.Item>
            <Form.Item
              label="Emoji"
              name="emoji"
              rules={[
                { required: true, message: "Emoji must be provided" },
              ]}
            >
              <Input className="text-field" />
            </Form.Item>
            <Form.Item
              label="Code"
              name="code"
              rules={[
                { required: true, message: "Code must be provided" },
              ]}
            >
              <Input className="text-field" />
            </Form.Item>
            <Form.Item
              label="Continent"
              name="continent"
            >
              <ContinentSelect onChange={(value : any) => form.setFieldsValue({ continent: value })}/>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
      );
    };
