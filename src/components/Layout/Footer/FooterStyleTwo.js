import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const FooterStyleTwo = () => {

    return (
        <footer>
            <div className="footer__area grey-bg-2">
               <div className="footer__top pt-190 pb-40">
                  <div className="container">
                     <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                           <div className="footer__widget mb-50">
                              <div className="footer__widget-head mb-22">
                                 <div className="footer__logo">
                                    <Link href="/"><a><img src="assets/img/logo/logo.png" alt="img not found"/></a></Link>
                                 </div>
                              </div>
                              <div className="footer__widget-body footer__widget-body-2">
                                 <p>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>

                                 <div className="footer__social">
                                    <ul>
                                        <li><a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a></li>
                                       <li><a href="#" className="tw"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a></li>
                                       <li><a href="#" className="pin"><i><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></i></a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 offset-lg-0 col-md-2 offset-md-1 col-sm-5 offset-sm-1">
                           <div className="footer__widget mb-50">
                              <div className="footer__widget-head mb-22">
                                 <h3 className="footer__widget-title footer__widget-title-2">Company</h3>
                              </div>
                              <div className="footer__widget-body">
                                 <div className="footer__link footer__link-2">
                                    <ul>
                                       <li><Link href="/about"><a>About</a></Link></li>
                                       <li><Link href="/course-grid"><a>Courses</a></Link></li>
                                       <li><Link href="/event-details"><a>Events</a></Link></li>
                                       <li><Link href="/instructor"><a>Instructor</a></Link></li>
                                       <li><Link href="/instructor"><a>Career</a></Link></li>
                                       <li><Link href="/instructor"><a>Become a Teacher</a></Link></li>
                                       <li><Link href="/contact"><a>Contact</a></Link></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 offset-lg-0 col-md-3 offset-md-1 col-sm-6">
                           <div className="footer__widget mb-50">
                              <div className="footer__widget-head mb-22">
                                 <h3 className="footer__widget-title footer__widget-title-2">Platform</h3>
                              </div>
                              <div className="footer__widget-body">
                                 <div className="footer__link footer__link-2">
                                    <ul>
                                       <li><Link href="/instructor"><a>Browse Library</a></Link></li>
                                       <li><Link href="/instructor"><a>Library</a></Link></li>
                                       <li><Link href="/instructor"><a>Partners</a></Link></li>
                                       <li><Link href="/blog"><a>News & Blogs</a></Link></li>
                                       <li><Link href="/about"><a>FAQs</a></Link></li>
                                       <li><Link href="/course-grid"><a>Tutorials</a></Link></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-6">
                           <div className="footer__widget footer__pl-70 mb-50">
                              <div className="footer__widget-head mb-22">
                                 <h3 className="footer__widget-title footer__widget-title-2">Subscribe</h3>
                              </div>
                              <div className="footer__widget-body">
                                 <div className="footer__subscribe footer__subscribe-2">
                                    <form action="#">
                                       <div className="footer__subscribe-input mb-15">
                                          <input type="email" placeholder="Your email address" />
                                          <button type="submit">
                                             <i><FontAwesomeIcon icon={['fas', 'arrow-right']} /></i>
                                             <i><FontAwesomeIcon icon={['fas', 'arrow-right']} /></i>
                                          </button>
                                       </div>
                                    </form>
                                    <p>Get the latest news and updates right at your inbox.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="footer__bottom footer__bottom-2">
                  <div className="container">
                     <div className="row">
                        <div className="col-xxl-12">
                           <div className="footer__copyright footer__copyright-2 text-center">
                              <p>© 2022 PT. Maggot Edukasi Nusantara, All Rights Reserved.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
    );
}

export default FooterStyleTwo;