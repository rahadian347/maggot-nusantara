import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';


class SignInMain extends Component {
    
    render() {
        return (
            <main>
                <section className="signup__area po-rel-z1 pt-100 pb-145">
                    <div className="sign__shape">
                        <img className="man-1" src="assets/img/icon/sign/man-1.png" alt="img not found"/>
                        <img className="man-2" src="assets/img/icon/sign/man-2.png" alt="img not found"/>
                        <img className="circle" src="assets/img/icon/sign/circle.png" alt="img not found"/>
                        <img className="zigzag" src="assets/img/icon/sign/zigzag.png" alt="img not found"/>
                        <img className="dot" src="assets/img/icon/sign/dot.png" alt="img not found"/>
                        <img className="bg" src="assets/img/icon/sign/sign-up.png" alt="img not found"/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                                <div className="section__title-wrapper text-center mb-55">
                                    <h2 className="section__title">Mohon maaf <br/>  kami akan kembali secepatnya</h2>
                                    <p>Saat ini kami sedang melakukan maintenance untuk kembali dengan tampilan
                                        dan sistem yang lebih baik <Link href="#"><a>Ditunggu ya teman - teman!</a></Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                                <div className="sign__wrapper white-bg">
                                    <div className="sign__header mb-35">
                                    <div className="sign__in text-center">
                                    <a href="#" className="sign__social g-plus text-start mb-15"><i><FontAwesomeIcon icon={['fab', 'google']} /></i>Masuk dengan Google</a>
                                        <p><span>........</span> atau, <Link href="/sign-in"><a>masuk</a></Link> dengan email anda<span> ........</span> </p>
                                    </div>
                                    </div>
                                    <div className="sign__form">
                                    <form action="#">
                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Email</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="masukan alamat email"/>
                                                <i><FontAwesomeIcon icon={['fas', 'envelope']} /></i>
                                            </div>
                                        </div>
                                        <div className="sign__input-wrapper mb-10">
                                            <h5>Kata sandi</h5>
                                            <div className="sign__input">
                                                <input type="text" placeholder="masukan kata sandi"/>
                                                <i><FontAwesomeIcon icon={['fas', 'lock']} /></i>
                                            </div>
                                        </div>
                                        <div className="sign__action d-sm-flex justify-content-between mb-30">
                                            <div className="sign__agree d-flex align-items-center">
                                                <input className="m-check-input" type="checkbox" id="m-agree"/>
                                                <label className="m-check-label"  htmlFor="m-agree">Biarkan tetap masuk</label>
                                            </div>
                                            <div className="sign__forgot">
                                                <a href="#">lupa password anda ?</a>
                                            </div>
                                        </div>
                                        <button className="e-btn  w-100"> <span></span> Masuk</button>
                                        <div className="sign__new text-center mt-20">
                                            <p>Baru di Maggot Nusantara? <Link href="#"><a>Daftar</a></Link></p>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

        	</main>
        );
    }
}

export default SignInMain;