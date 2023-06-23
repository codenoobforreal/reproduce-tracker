/* 
* https://formilyjs.org/zh-CN/guide/quick-start#%E5%85%B7%E4%BD%93%E7%94%A8%E4%BE%8B
*/

import { createForm } from "@formily/core";
import { FormProvider, FormConsumer, Field } from "@formily/react";
import {
  FormItem,
  FormLayout,
  Input,
  FormButtonGroup,
  Submit,
} from "@formily/antd";
import "./App.css";

const form = createForm();

function App() {
  return (
    <div className="App">
      <FormProvider form={form}>
        <FormLayout layout="vertical">
          <Field
            name="input"
            title="输入框"
            required
            initialValue="Hello world"
            decorator={[FormItem]}
            component={[Input]}
          />
        </FormLayout>
        <FormConsumer>
          {() => (
            <div
              style={{
                marginBottom: 20,
                padding: 5,
                border: "1px dashed #666",
              }}
            >
              实时响应：{form.values.input}
            </div>
          )}
        </FormConsumer>
        <FormButtonGroup>
          <Submit onSubmit={console.log}>提交</Submit>
        </FormButtonGroup>
      </FormProvider>
    </div>
  );
}

export default App;
