import React, { Component, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }) // disable ssr
import { Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from 'next/link';
import { getAllCourse } from '../../../helpers/courseDummy'


export default () => {
   const [courses, setCourses] = useState([]);

   useEffect(() => {
      setCourses(getAllCourse())

      return () => {
         null
      }
   }, [])


   return (
      <section className="course__area pt-115 pb-120 grey-bg">
         <Tabs variant="enclosed" id="react-tabs-276">
            <div className="container">
               <div className="row align-items-end">
                  <div className="col-xxl-5 col-xl-6 col-lg-6">
                     <div className="section__title-wrapper mb-60">
                        <h2 className="section__title">Cari kurusus yang<br />paling <span className="yellow-bg yellow-bg-big">tepat
                           <img src="assets/img/shape/yellow-bg.png" alt="img not found" /></span> untukmu
                        </h2>
                        <p>Para instruktur akan siap membantumu</p>
                     </div>
                  </div>
                  <div className="col-xxl-7 col-xl-6 col-lg-6">
                     <div className="course__menu d-flex justify-content-lg-end mb-60">
                        <div className="masonary-menu filter-button-group">
                           <TabList>
                              <Tab><button>Lihat semua <span className="tag">baru</span></button></Tab>
                           </TabList>
                        </div>
                     </div>
                  </div>
               </div>
               <TabPanel>
                  <div className="row">
                     {
                        courses.map(course => {
                           return (
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6" key={Math.random()}>
                                 <div className="course__item white-bg mb-30 fix">
                                    <div className="course__thumb w-img p-relative fix">
                                       <Link href="/course-details"><a>
                                          <img src={course.img} alt="img not found" />
                                       </a></Link>
                                       <div className="course__tag">
                                          <Link href="/course-details"><a className="sky-blue">{course.category}</a></Link>
                                       </div>
                                    </div>
                                    <div className="course__content">
                                       <div className="course__meta d-flex align-items-center justify-content-between">
                                          <div className="course__lesson">
                                             <span><i><FontAwesomeIcon icon={['fas', 'book']} /></i>{course.totalLessons}</span>
                                          </div>
                                          <div className="course__rating">
                                             <span><i><FontAwesomeIcon icon={['fas', 'star']} /></i>{course.rating}</span>
                                          </div>
                                       </div>
                                       <h3 className="course__title"><Link href="/course-details"><a>{course.title}</a></Link></h3>
                                       <div className="course__teacher d-flex align-items-center">
                                          <div className="course__teacher-thumb mr-15">
                                             <img src={course.author_img} alt="img not found" />
                                          </div>
                                          <h6><Link href="/instructor-details"><a>{course.author}</a></Link></h6>
                                       </div>
                                    </div>
                                    <div className="course__more d-flex justify-content-between align-items-center">
                                       <div className="course__status">
                                          <span className={course.vip ? 'orange' : 'sky-blue'}>{course.vip ? 'VIP' : 'Gratis'}</span>
                                       </div>
                                       <div className="course__btn">
                                          <Link href="/course-details"><a className="link-btn">
                                             Lebih detail
                                             <i><FontAwesomeIcon icon={['fas', 'arrow-right']} /></i>
                                             <i><FontAwesomeIcon icon={['fas', 'arrow-right']} /></i>
                                          </a></Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           )
                        })
                     }
                  </div>
               </TabPanel>
            </div>
         </Tabs>
      </section>
   );
}