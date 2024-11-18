import { Col, Row, Splitter } from "antd";
import { Body, Header } from "./components";

export const App = () => {
  return (
    <main>
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Body />
        </Col>
      </Row>
    </main>
  );
};
