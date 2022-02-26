import React from 'react';
import FooterBottom from './FooterBottom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Footer = () => {

    return (
        <footer>
            <div className="footer__area footer-bg">
               <div className="footer__top pt-190 pb-40">
                  <div className="container">
                     <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                           <div className="footer__widget mb-50">
                              <div className="footer__widget-head mb-22">
                                 <div className="footer__logo">
                                    <Link href="#"><a><img src="assets/img/maggot-eco/logo-2.png" alt="img not found"/></a></Link>
                                 </div>
                              </div>
                              <div className="footer__widget-body">
                                 <p>Mulai hari ini untuk menyiapkan hari esok yang lebih baik</p>

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
                                 <h3 className="footer__widget-title">Perusahaan</h3>
                              </div>
                              <div className="footer__widget-body">
                                 <div className="footer__link">
                                    <ul>
                                       <li><Link href="#"><a>Tentang kami</a></Link></li>
                                       <li><Link href="#"><a>Kursus</a></Link></li>
                                       <li><Link href="#"><a>Events</a></Link></li>
                                       <li><Link href="#"><a>Instruktur</a></Link></li>
                                       <li><Link href="#"><a>Karir</a></Link></li>
                                       <li><Link href="#"><a>Menjadi Instruktur</a></Link></li>
                                       <li><Link href="#"><a>Kontak</a></Link></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 offset-lg-0 col-md-3 offset-md-1 col-sm-6">
                           <div className="footer__widget mb-50">
                              <div className="footer__widget-head mb-22">
                                 <h3 className="footer__widget-title">Platform</h3>
                              </div>
                              <div className="footer__widget-body">
                                 <div className="footer__link">
                                    <ul>
                                       <li><Link href="#"><a>Cari kursus</a></Link></li>
                                       <li><Link href="#"><a>Library</a></Link></li>
                                       <li><Link href="#"><a>Partner</a></Link></li>
                                       <li><Link href="#"><a>Blog dan Berita</a></Link></li>
                                       <li><Link href="#"><a>FAQs</a></Link></li>
                                       <li><Link href="#"><a>Jasa</a></Link></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-6">
                           <div className="footer__widget footer__pl-70 mb-50">
                              <div className="footer__widget-head mb-22">
                                 <h3 className="footer__widget-title">Subscribe</h3>
                              </div>
                              <div className="footer__widget-body">
                                 <div className="footer__subscribe">
                                    <form action="#">
                                       <div className="footer__subscribe-input mb-15">
                                          <input type="email" placeholder="Email anda"/>
                                          <button type="submit">
                                             <i><FontAwesomeIcon icon={['fas', 'arrow-right']} /></i>
                                             <i><FontAwesomeIcon icon={['fas', 'arrow-right']} /></i>
                                          </button>
                                       </div>
                                    </form>
                                    <p>Dapatkan berita menarik langsung ke inbox anda.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <FooterBottom />
            </div>
         </footer>
    );
}

export default Footer;