import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  HomeOutlined,
  CalendarOutlined,
  UserOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import logo_img from "../assets/image.png";
import { Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Dashboard", "1", <HomeOutlined />),
  getItem("Audience", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Posts", "9", <FileOutlined />),
  getItem("Schedules", "9", <CalendarOutlined />),
  getItem("Income", "sub2", <BarChartOutlined />, [
    getItem("Earnings", "6"),
    getItem("Refunds", "8"),
    getItem("Declines", "8"),
    getItem("Payouts", "8"),
  ]),
];

const DashboardPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={270}
      >
        <div className="demo-logo-vertical" />
        <div className="rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <img
              className="w-16 h-16 rounded-full"
              src={logo_img}
              alt="Profile picture of Bob Smith"
            />
            <div className="ml-4">
              <p className="text-sm text-white">DESIGN MANAGER</p>
              <h3 className="text-lg font-semibold text-white">Bob Smith</h3>
            </div>
          </div>
          <hr className="my-4 border-muted" />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
        <hr className="my-4 border-muted mx-5" />
      </Sider>
      <Layout>
        <div
          style={{
            background: colorBgContainer,
            marginBottom: 20,
          }}
          className="flex items-center justify-end p-4 bg-background gap-4"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search here"
              className="border border-border rounded-full py-2 px-4 focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground">Super Admin</span>
            <img
              undefinedhidden="true"
              alt="User Avatar"
              src="https://placehold.co/40x40"
              className="rounded-full"
            />
          </div>
        </div>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              marginBottom: 20,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div className="flex items-center justify-between">
              <div>Add License</div>
              <div>
                <a href="#" className="text-primary hover:underline">
                  Home
                </a>
                <span className="mx-2">/</span>
                <a href="#" className="text-primary hover:underline">
                  License
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg text-foreground mb-4 border-b border-gray-300 pb-2">
              Organizational Fields
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <label
                  htmlFor="organization-name"
                  className="block text-sm font-medium text-muted-foreground"
                >
                  Name of Organization <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="organization-name"
                  placeholder="Enter organization name"
                  className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="gstin"
                  className="block text-sm font-medium text-muted-foreground"
                >
                  GSTIN
                </label>
                <input
                  type="text"
                  id="gstin"
                  placeholder="Enter GSTIN number"
                  className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="pan-card"
                  className="block text-sm font-medium text-muted-foreground"
                >
                  Pan Card <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="pan-card"
                  placeholder="Enter company pan card number"
                  className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                  required
                />
              </div>
            </div>

            <div>
              <h2 className="text-lg text-foreground mb-4 border-b border-gray-300 pb-2">
                Contact Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="mb-4">
                  <label
                    htmlFor="organization-name"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Contact Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    placeholder="Enter Name"
                    className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="gstin"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Designation
                  </label>
                  <input
                    type="text"
                    id="Designation"
                    placeholder="Enter Designation"
                    className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="pan-card"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Contact Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="Contact Phone"
                    placeholder="Enter contact number"
                    className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="pan-card"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Contact Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="Contact Email"
                    placeholder="Enter email address"
                    className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg text-foreground mb-4 border-b border-gray-300 pb-2">
                Admin User Info
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Title
                  </label>
                  <select
                    id="title"
                    className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                  >
                    <option value="" disabled selected>
                      Select title
                    </option>
                    <option value="mr">Mr.</option>
                    <option value="mrs">Mrs.</option>
                    <option value="ms">Ms.</option>
                    <option value="dr">Dr.</option>
                    <option value="prof">Prof.</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="pan-card"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    User Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="User Name"
                    placeholder="Enter user name"
                    className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="pan-card"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="First Name"
                    placeholder="Enter admin first name"
                    className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="pan-card"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="Last Name"
                    placeholder="Enter admin last name"
                    className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="pan-card"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="Mobile Number"
                    placeholder="Enter admin mobile number"
                    className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="pan-card"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Email Id<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="Email Id"
                    placeholder="Enter admin email address"
                    className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="pan-card"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Password<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    id="Password"
                    placeholder="Enter password"
                    className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg text-foreground mb-4 border-b border-gray-300 pb-2">
                Address Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="mb-4">
                  <label
                    htmlFor="address-line1"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Address Line 1 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address-line1"
                    placeholder="Enter address here"
                    className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="address-line2"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Address Line 2 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address-line2"
                    placeholder="Enter address here"
                    className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="landmark"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Landmark
                  </label>
                  <input
                    type="text"
                    id="landmark"
                    placeholder="Enter landmark"
                    className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="zip-code"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Zip Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="zip-code"
                    placeholder="Enter zip code number"
                    className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="mb-4">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    City <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="city"
                    className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                  >
                    <option value="" disabled selected>
                      Select your city
                    </option>
                    <option value="new_york">Bengaluru</option>
                    <option value="new_york">New York</option>
                    <option value="los_angeles">Los Angeles</option>
                    <option value="chicago">Chicago</option>
                    <option value="houston">Houston</option>
                    <option value="phoenix">Phoenix</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    State <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="state"
                    className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                  >
                    <option value="" disabled selected>
                      Select your state
                    </option>
                    <option value="ny">Karnataka</option>
                    <option value="ny">New York</option>
                    <option value="ca">California</option>
                    <option value="il">Illinois</option>
                    <option value="tx">Texas</option>
                    <option value="az">Arizona</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="country"
                    className="mt-1 block w-full p-2 border border-border rounded-md focus:ring focus:ring-ring"
                  >
                    <option value="" disabled selected>
                      Select your country
                    </option>
                    <option value="in">India</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="gb">United Kingdom</option>
                    <option value="au">Australia</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg text-foreground mb-4 border-b border-gray-300 pb-2">
                Other Details
              </h2>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <label
                    htmlFor="acting-cfo"
                    className="mr-4 text-sm font-medium text-muted-foreground"
                  >
                    Acting as CFO
                  </label>
                  <input
                    type="checkbox"
                    id="acting-cfo"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded-none focus:ring-blue-500"
                  />
                </div>

                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <label
                      htmlFor="acting-cfo"
                      className="mr-4 text-sm font-medium text-muted-foreground"
                    >
                      Status
                    </label>
                    <input
                      type="radio"
                      id="status-active"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded-full focus:ring-blue-500"
                    />
                    <label
                      htmlFor="status-active"
                      className="ml-2 text-sm font-medium text-[#1A1A1A]"
                    >
                      Active
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="status-inactive"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded-full focus:ring-blue-500"
                    />
                    <label
                      htmlFor="status-inactive"
                      className="ml-2 text-sm font-medium text-muted-foreground"
                    >
                      Inactive
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          ©{new Date().getFullYear()} Created by Nischit D S
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
