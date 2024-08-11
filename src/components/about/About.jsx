export const About = () => {
    return (
            <div className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="about_taital">About Our shop</h1>
                            <div className="bulit_icon">
                                <img src="images/bulit-icon.png" />
                            </div>
                        </div>
                    </div>
                    <div className="about_section_2 layout_padding">
                        <div className="image_iman">
                            <img src="images/about-img.png" className="about_img" />
                        </div>
                        <div className="about_taital_box">
                            <h1 className="about_taital_1">Coffee distribution </h1>
                            <p className=" about_text">
                                has a more-or-less normal distribution of letters, as opposed to
                                using Content here, content here, making it look like readable
                                English. Many desktop publishing packages and web page editorhas a
                                more-or-less normal distribution of letters, as opposed to using
                                Content here, content here, making it look like readable English.
                                Many desktop publishing packages and web page editor
                            </p>
                            <div className="readmore_btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
    );
};