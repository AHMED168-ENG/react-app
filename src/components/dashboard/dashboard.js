import React from 'react'
import "../../scss/dashboard/dashboard/dashboard.scss"
import { BsArrowDownLeft , BsArrowUpRight } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { Dropdown, Select } from 'antd';
import { Link } from 'react-router-dom';
import { TiArrowUnsorted } from "react-icons/ti";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className='mb-5 px-3 d-flex align-items-center justify-content-between'>
        <h2 className='text-capitalize'>Dashboard</h2>
        <div className='head-right d-flex gap-2'>
          <Select
            suffixIcon={<TiArrowUnsorted />}
            defaultValue="7 october 2022"
            // onChange={}
            options={[
              {
                value: '7 october 2022',
                label: '7 october 2022',
              },
              {
                value: '7 october 2022',
                label: '7 october 2022',
              },
              {
                value: 'Yiminghe',
                label: 'yiminghe',
              },
              {
                value: 'disabled',
                label: 'Disabled',
                disabled: true,
              },
            ]}
          />
          <button className='text-capitalize'>Export</button>
        </div>
      </header>
      <div className="statistics">
        <div className="row">
          <div className="col-md-3">
            <div className="content p-4">
                <div className="content-header mb-3 d-flex justify-content-between">
                    <h5 className='text-capitalize'>total sales</h5>
                    <Dropdown
                      align={{ offset: [0, 40] }}
                        menu={{
                          items : [{
                              key: 'notification1',
                              label: (
                                <Link to="">
                                  notification1
                                </Link>
                              ),
                            },
                            {
                              key: 'notification2',
                              label: (
                                <Link to="">
                                  notification2
                                </Link>
                              ),
                            },
                            {
                              key: 'notification3',
                              label: (
                                <Link to="">
                                  notification3
                                </Link>
                              ),
                            }]
                        }}
                        placement="right"
                      >
                        <CiMenuKebab></CiMenuKebab>
                      </Dropdown>
                </div>
                <div className="content-body d-flex align-items-end justify-content-between">
                    <div className="content-price">
                      <span>$25536.025</span>
                    </div>
                    <div className="content-percentage d-flex flex-column align-items-end">
                      <div className='icon'>
                        <BsArrowDownLeft></BsArrowDownLeft>
                        <span>32.5%</span>
                      </div>
                      <div className="date">
                        <span className='text-uppercase'>Compared to april 2023</span>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content p-4">
                <div className="content-header mb-3 d-flex justify-content-between">
                    <h5 className='text-capitalize'>average total value</h5>
                              <Dropdown
                      align={{ offset: [0, 40] }}
                        menu={{
                          items : [{
                              key: 'notification1',
                              label: (
                                <Link to="">
                                  notification1
                                </Link>
                              ),
                            },
                            {
                              key: 'notification2',
                              label: (
                                <Link to="">
                                  notification2
                                </Link>
                              ),
                            },
                            {
                              key: 'notification3',
                              label: (
                                <Link to="">
                                  notification3
                                </Link>
                              ),
                            }]
                        }}
                        placement="right"
                      >
                        <CiMenuKebab></CiMenuKebab>
                      </Dropdown>
                </div>
                <div className="content-body d-flex align-items-end justify-content-between">
                    <div className="content-price">
                    <span>$36336.025</span>
                    </div>
                    <div className="content-percentage d-flex flex-column align-items-end">
                      <div className='icon'>
                        <BsArrowUpRight></BsArrowUpRight>
                        <span>32%</span>
                      </div>
                      <div className="date">
                        <span className='text-uppercase'>Compared to april 2023</span>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content p-4">
                <div className="content-header mb-3 d-flex justify-content-between">
                    <h5 className='text-capitalize'>total orders</h5>
                              <Dropdown
                      align={{ offset: [0, 40] }}
                        menu={{
                          items : [{
                              key: 'notification1',
                              label: (
                                <Link to="">
                                  notification1
                                </Link>
                              ),
                            },
                            {
                              key: 'notification2',
                              label: (
                                <Link to="">
                                  notification2
                                </Link>
                              ),
                            },
                            {
                              key: 'notification3',
                              label: (
                                <Link to="">
                                  notification3
                                </Link>
                              ),
                            }]
                        }}
                        placement="right"
                      >
                        <CiMenuKebab></CiMenuKebab>
                      </Dropdown>
                </div>
                <div className="content-body d-flex align-items-end justify-content-between">
                    <div className="content-price">
                      <span>$9736.025</span>
                    </div>
                    <div className="content-percentage d-flex flex-column align-items-end">
                      <div className='icon'>
                        <BsArrowDownLeft></BsArrowDownLeft>
                        <span>49.2%</span>
                      </div>
                      <div className="date">
                        <span className='text-uppercase'>Compared to april 2023</span>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content p-4">
                <div className="content-header mb-3 d-flex justify-content-between">
                    <h5 className='text-capitalize'>total orders</h5>
                              <Dropdown
                      align={{ offset: [0, 40] }}
                        menu={{
                          items : [{
                              key: 'notification1',
                              label: (
                                <Link to="">
                                  notification1
                                </Link>
                              ),
                            },
                            {
                              key: 'notification2',
                              label: (
                                <Link to="">
                                  notification2
                                </Link>
                              ),
                            },
                            {
                              key: 'notification3',
                              label: (
                                <Link to="">
                                  notification3
                                </Link>
                              ),
                            }]
                        }}
                        placement="right"
                      >
                        <CiMenuKebab></CiMenuKebab>
                      </Dropdown>
                </div>
                <div className="content-body d-flex align-items-end justify-content-between">
                    <div className="content-price">
                      <span>$9736.025</span>
                    </div>
                    <div className="content-percentage d-flex flex-column align-items-end">
                      <div className='icon'>
                        <BsArrowDownLeft></BsArrowDownLeft>
                        <span>49.2%</span>
                      </div>
                      <div className="date">
                        <span className='text-uppercase'>Compared to april 2023</span>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
