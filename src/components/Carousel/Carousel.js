import React, { useState } from 'react';
import { Image, Images, SmallImage, CarouselButton, ImageContainer, ImageCredit } from "./CarouselComponents";
import image1 from '../../images/1.jpg'
import image2 from '../../images/2.jpg'
import image3 from '../../images/3.jpg'
import image4 from '../../images/4.jpg'
import image5 from '../../images/5.jpg'
import image6 from '../../images/6.jpg'
import image7 from '../../images/7.jpg'
import image8 from '../../images/8.jpg'
import image9 from '../../images/9.jpg'
import image10 from '../../images/10.jpg'
import image11 from '../../images/11.jpg'

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11]

const Carousel = () => {
    const [imageIndex, setImageIndex] = useState(0);
    return (
        <>
            <ImageContainer>
                <CarouselButton style={{ left: 0 }} onClick={() => (imageIndex > 0) && setImageIndex(imageIndex - 1)}>{"<"}
                </CarouselButton>
                <CarouselButton style={{ right: 0 }} onClick={() => (imageIndex < images.length - 1) && setImageIndex(imageIndex + 1)}>{">"}
                </CarouselButton>
                <Image src={images[imageIndex]}>
                </Image>
                <ImageCredit> Image by <a style={{ color: "white" }} href="https://pixabay.com/users/ajs1980518-11074902/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4822595">Jaesung An</a> from <a style={{ color: "white" }} href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4822595">Pixabay</a></ImageCredit>
            </ImageContainer>
            <Images>
                {images.map((image, index) => (
                    <SmallImage src={image} key={index} onClick={() => { setImageIndex(index) }}></SmallImage>
                ))}
            </Images>
        </>
    )
}
export default Carousel;