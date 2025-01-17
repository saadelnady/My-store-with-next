import { useRouter } from "next/router";
import React from "react";
import { listData } from "./listData";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import Link from "next/link";
import styles from "./styles/styles.module.scss";
import ProfileWrapper from "./profileWrapper";
const Profile = () => {
  const { locale, query, push } = useRouter();
  const selectedTitle = listData?.filter(
    (i) => i?.id === query["profile"][1]
  )?.[0]?.label;
  return (
    <div>
      <div className={styles["profile-component"]}>
        <Container fluid className={`p-4 ${locale === "en" && "locale-en"}`}>
          <Container>
            <Row>
              <Col sm={12} xl={3} className="py-2 px-3">
                {/* Sidebar */}

                <aside className="d-none d-md-inline">
                  <ul>
                    {listData.map((listItem) => (
                      <li
                        key={listItem.id}
                        className={`mb-2 list-item ${
                          query["profile"][1] === listItem.id &&
                          listItem.withEffect
                            ? "list-active"
                            : ""
                        }`}
                      >
                        <Link href={`/profile/${listItem.id}`} legacyBehavior>
                          <a className="d-flex align-items-center gap-3 ">
                            {<listItem.icon />} <p>{listItem.label}</p>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </aside>
                {/* Mobile Dropdown */}
                <DropdownButton
                  id="dropdown-item-button"
                  title={selectedTitle}
                  className="d-block d-md-none"
                >
                  {listData.map((listItem) => (
                    <Dropdown.Item
                      as="button"
                      key={listItem.id}
                      className="list-item-mobile"
                      onClick={() => {
                        push(`/profile/${listItem.id}`);
                      }}
                    >
                      {<listItem.icon />} <p>{listItem.label}</p>
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </Col>
              <Col sm={12} xl={9} className="py-2 px-3">
                <ProfileWrapper />
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  );
};

export default Profile;
