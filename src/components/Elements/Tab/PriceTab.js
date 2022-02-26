import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }) // disable ssr
import { Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from 'next/link';

export default () => (

    <section className="price__area pt-60 pb-130">
        <Tabs>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4 offset-xxl-4">
                        <div className="section__title-wrapper mb-60 text-center">
                            <h2 className="section__title">Harga <br /> kursus <span className="yellow-bg yellow-bg-big">yang fleksibel<img src="assets/img/shape/yellow-bg.png" alt="img not found" /></span></h2>
                            <p>Tidak ada kontrak, tidak ada biaya tambahan</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="price__tab-btn text-center mb-50">
                            <div className="nav-tabs">
                                <TabList>
                                    <Tab><button className="nav-link" id="nav-monthly-tab" type="button">UMKM</button></Tab>
                                    <Tab><button className="nav-link" id="nav-annually-tab" type="button">Perusahaan</button></Tab>
                                </TabList>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                        <div className="price__tab-content">
                            <TabPanel>
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                        <div className="price__item grey-bg mb-30 p-relative">
                                            <div className="price__head">
                                                <h3>Bulanan</h3>
                                                <p>Cocok untuk tim kecil dan baru memulai</p>
                                            </div>
                                            <div className="price__tag mb-25">
                                                <h4>Rp. 150k<span> / bulan</span></h4>
                                            </div>
                                            <div className="price__features mb-40">
                                                <ul>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Diskusi online dengan instruktur</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'lock']} /></i>Offline konsultasi</li>
                                                    <li><i className='not_included'><FontAwesomeIcon icon={['fas', 'lock']} /></i>Customer care 24/7</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'lock']} /></i>Jaringan Pegiat seluruh Indonesia</li>
                                                </ul>
                                            </div>
                                            <Link href="/contact"><a className="e-btn e-btn-4">Pilih</a></Link>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                        <div className="price__item grey-bg mb-30 p-relative">
                                            <div className="price__offer">
                                                <span>Best Value</span>
                                            </div>
                                            <div className="price__head">
                                                <h3>Tahunan</h3>
                                                <p>Cocok untuk skala perusahaan dan instansi</p>
                                            </div>
                                            <div className="price__tag mb-25">
                                                <h4>Rp. 1500k<span> / tahun</span></h4>
                                            </div>
                                            <div className="price__features mb-40">
                                                <ul>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Diskusi online dengan instruktur</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Offline konsultasi</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Customer care 24/7</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Jaringan Pegiat seluruh Indonesia</li>
                                                </ul>
                                            </div>
                                            <Link href="/contact"><a className="e-btn e-btn-border">Pilih</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                        <div className="price__item grey-bg mb-30 p-relative">
                                            <div className="price__head">
                                                <h3>Bulanan</h3>
                                                <p>Cocok untuk tim kecil dan baru memulai</p>
                                            </div>
                                            <div className="price__tag mb-25">
                                                <h4>Rp. 600k<span> / bulan</span></h4>
                                            </div>
                                            <div className="price__features mb-40">
                                                <ul>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Diskusi online dengan instruktur</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'fa-xmark']} /></i>Offline konsultasi</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Customer care 24/7</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Jaringan Pegiat seluruh Indonesia</li>
                                                </ul>
                                            </div>
                                            <Link href="/contact"><a className="e-btn e-btn-4">Pilih</a></Link>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                        <div className="price__item grey-bg mb-30 p-relative">
                                            <div className="price__offer">
                                                <span>Rekomendasi</span>
                                            </div>
                                            <div className="price__head">
                                                <h3>Tahunan</h3>
                                                <p>Cocok untuk skala perusahaan dan instansi</p>
                                            </div>
                                            <div className="price__tag mb-25">
                                                <h4>Hubungi kami</h4>
                                            </div>
                                            <div className="price__features mb-40">
                                                <ul>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Diskusi online dengan instruktur</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Offline konsultasi</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Customer care 24/7</li>
                                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i>Jaringan Pegiat seluruh Indonesia</li>
                                                </ul>
                                            </div>
                                            <Link href="/contact"><a className="e-btn e-btn-border">Pilih</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                </div>
            </div>
        </Tabs>
    </section>
);