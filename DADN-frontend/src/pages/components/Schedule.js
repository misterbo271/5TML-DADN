import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faPalette } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  Col,
  Row,
  Nav,
  Tab,
  Card,
  Container,
} from "@themesberg/react-bootstrap";
import { Table } from "@themesberg/react-bootstrap";

export default () => {
  return (
    <article>
      <Container className="px-0">
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <h1 className="h2">Lập lịch</h1>
            <p className="mb-0">
              Xem và theo dõi và lập lịch bật/tắt tất cả các đèn ở tất cả các
              tầng
            </p>
          </Col>
        </Row>
        <Tab.Container defaultActiveKey="floor1">
          <Nav fill variant="pills" className="flex-column flex-sm-row">
            <Nav.Item>
              <Nav.Link eventKey="floor1" className="mb-sm-3 mb-md-0">
                Tầng 1
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="floor2" className="mb-sm-3 mb-md-0">
                Tầng 2
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="floor3" className="mb-sm-3 mb-md-0">
                Tầng 3
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="floor4" className="mb-sm-3 mb-md-0">
                Tầng 4
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="floor5" className="mb-sm-3 mb-md-0">
                Tầng 5
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            {/* Table */}
            <Tab.Pane eventKey="floor1" className="py-4">
              <Table>
                <thead className="thead-light">
                  <tr>
                    <th className="border-0">Tên đèn</th>
                    <th className="border-0">Phòng</th>
                    <th className="border-0">Lập lịch theo mốc thời gian</th>
                    <th className="border-0">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-0">
                      <a>
                        <div>
                          <span className="h5">Đèn 1</span>
                        </div>
                      </a>
                    </td>
                    <td className="border-0 fw-bold">101</td>
                    <td className="border-0 fw-bold">101</td>
                    <td className="border-0 text-success">
                      <FontAwesomeIcon className="me-1" />
                      <span className="fw-bold">
                        <i size="9x" class="fas fa-lightbulb"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-0">
                      <a href="#Canada" className="d-flex align-items-center">
                        <div>
                          <span className="h5">Đèn 2</span>
                        </div>
                      </a>
                    </td>
                    <td className="border-0 fw-bold">102</td>
                    <td className="border-0 fw-bold">101</td>
                    <td className="border-0 text-success">
                      <FontAwesomeIcon className="me-1" />
                      <span className="fw-bold">
                        <i class="far fa-lightbulb"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-0">
                      <a
                        href="#United Kingdom"
                        className="d-flex align-items-center"
                      >
                        <div>
                          <span className="h5">Đèn 3</span>
                        </div>
                      </a>
                    </td>
                    <td className="border-0 fw-bold">103</td>
                    <td className="border-0 fw-bold">101</td>
                    <td className="border-0 text-success">
                      <FontAwesomeIcon className="me-1" />
                      <span className="fw-bold">
                        <i class="fas fa-lightbulb"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-0">
                      <a href="#France" className="d-flex align-items-center">
                        <div>
                          <span className="h5">Đèn 4</span>
                        </div>
                      </a>
                    </td>
                    <td className="border-0 fw-bold">103</td>
                    <td className="border-0 fw-bold">101</td>
                    <td className="border-0 text-success">
                      <FontAwesomeIcon className="me-1" />
                      <span className="fw-bold">
                        <i class="far fa-lightbulb"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-0">
                      <a href="#Japan" className="d-flex align-items-center">
                        <div>
                          <span className="h5">Đèn 5</span>
                        </div>
                      </a>
                    </td>
                    <td className="border-0 fw-bold">105</td>
                    <td className="border-0 fw-bold">101</td>
                    <td className="border-0 text-success">
                      <FontAwesomeIcon className="me-1" />
                      <span className="fw-bold">
                        <i class="far fa-lightbulb"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-0">
                      <a href="#Germany" className="d-flex align-items-center">
                        <div>
                          <span className="h5">Đèn 6</span>
                        </div>
                      </a>
                    </td>
                    <td className="border-0 fw-bold">106</td>
                    <td className="border-0 fw-bold">101</td>
                    <td className="border-0 text-success">
                      <FontAwesomeIcon className="me-1" />
                      <span className="fw-bold">
                        <i class="fas fa-lightbulb"></i>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tab.Pane>
            <Tab.Pane eventKey="floor2" className="py-4">
              <p>Data for Floor 2</p>
            </Tab.Pane>
            <Tab.Pane eventKey="floor3" className="py-4">
              <p>Data for Floor 3</p>
            </Tab.Pane>
            <Tab.Pane eventKey="floor4" className="py-4">
              <p>Data for Floor 4</p>
            </Tab.Pane>
            <Tab.Pane eventKey="floor5" className="py-4">
              <p>Data for Floor 5</p>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>

        {/* <Documentation
          // title="Example"
          // description={
          //   <>
          //     <p>
          //       The <code>&#x3C;Tab&#x3E;</code> component is great if you want
          //       to show multiple resources of content with an easy partitioning
          //       using nav tabs. First you need to use the{" "}
          //       <code>&#x3C;Tab.Container&#x3E;</code> component to wrap around
          //       the content.
          //     </p>
          //     <p>
          //       The first part of the component will be the{" "}
          //       <code>&#x3C;Nav&#x3E;</code> component where you can add as many{" "}
          //       <code>&#x3C;NavItem&#x3E;</code> components as you'd like. The{" "}
          //       <code>&#x3C;Nav.Link&#x3E;</code> component can then be used to
          //       set the tab panel that it should open up when clicking on it.
          //     </p>
          //     <p>
          //       The <code>&#x3C;Tab.Content&#x3E;</code> component and its
          //       subcomponents are the content that will be shown based on which{" "}
          //       <code>&#x3C;Nav.Link&#x3E;</code> is being clicked on. The{" "}
          //       <code>eventKey="*"</code> attribute should be used for both the{" "}
          //       <code>&#x3C;Nav.Link&#x3E;</code> and{" "}
          //       <code>&#x3C;Tab.Content&#x3E;</code> to link the two together.
          //     </p>
          //   </>
          // }
          scope={{ Nav, Tab }}
          imports={`import { Nav, Tab } from '@themesberg/react-bootstrap';`}
          example={`<Tab.Container defaultActiveKey="home">
  <Nav fill variant="pills" className="flex-column flex-sm-row">
    <Nav.Item>
      <Nav.Link eventKey="home" className="mb-sm-3 mb-md-0">
        Home
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="profile" className="mb-sm-3 mb-md-0">
        Profile
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="messages" className="mb-sm-3 mb-md-0">
        Messages
      </Nav.Link>
    </Nav.Item>
  </Nav>
  <Tab.Content>
    <Tab.Pane eventKey="home" className="py-4">
      <p>
        Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.
      </p>
      <p>
        Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
      </p>
    </Tab.Pane>
    <Tab.Pane eventKey="profile" className="py-4">
      <p>
        Photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.
      </p>
      <p>
        Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
      </p>
    </Tab.Pane>
    <Tab.Pane eventKey="messages" className="py-4">
      <p>
        Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.
      </p>
      <p>
        Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
      </p>
    </Tab.Pane>
  </Tab.Content>
</Tab.Container>`}
        /> */}

        {/* <Documentation
          title="Example with icons"
          description={
            <p>
              The following example shows how you can add an icon using the{" "}
              <code>&#x3C;FontAwesomeIcon&#x3E;</code> component inside the
              navigation item component.
            </p>
          }
          scope={{
            Row,
            Col,
            Nav,
            Tab,
            FontAwesomeIcon,
            faPalette,
            faLaptopCode,
            faUser,
          }}
          imports={`import { Row, Col, Nav, Tab } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faPalette } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";`}
          example={`<Tab.Container defaultActiveKey="visual_design">
  <Row>
    <Col lg={12}>
      <Nav fill variant="pills" className="flex-column flex-sm-row">
        <Nav.Item>
          <Nav.Link eventKey="visual_design" className="mb-sm-3 mb-md-0">
            <FontAwesomeIcon icon={faPalette} className="me-2" /> Visual Design
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="code_friendly" className="mb-sm-3 mb-md-0">
            <FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Code Friendly
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="user_experience" className="mb-sm-3 mb-md-0">
            <FontAwesomeIcon icon={faUser} className="me-2" /> User Experience
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="visual_design" className="py-4">
          <p>
            Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.
          </p>
          <p>
            Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
          </p>
        </Tab.Pane>
        <Tab.Pane eventKey="code_friendly" className="py-4">
          <p>
            Photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.
          </p>
          <p>
            Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
          </p>
        </Tab.Pane>
        <Tab.Pane eventKey="user_experience" className="py-4">
          <p>
            Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.
          </p>
          <p>
            Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
          </p>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>`}
        />

        <Documentation
          title="Classic"
          description=""
          scope={{ Col, Row, Card, Nav, Tab }}
          imports={`import { Col, Row, Card, Nav, Tab } from '@themesberg/react-bootstrap';`}
          example={`<Tab.Container defaultActiveKey="home">
  <Row>
    <Col lg={12}>
      <Nav className="nav-tabs">
        <Nav.Item>
          <Nav.Link eventKey="home" className="mb-sm-3 mb-md-0">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="profile" className="mb-sm-3 mb-md-0">
            Profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="messages" className="mb-sm-3 mb-md-0">
            Messages
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col lg={12}>
      <Tab.Content>
        <Tab.Pane eventKey="home" className="py-4">
          <p>
            Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.
          </p>
          <p>
            Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
          </p>
        </Tab.Pane>
        <Tab.Pane eventKey="profile" className="py-4">
          <p>
            Photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.
          </p>
          <p>
            Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
          </p>
        </Tab.Pane>
        <Tab.Pane eventKey="messages" className="py-4">
          <p>
            Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.
          </p>
          <p>
            Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
          </p>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>`}
        /> */}
      </Container>
    </article>
  );
};
