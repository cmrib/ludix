import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Flex } from '@chakra-ui/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

export function Slider() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            navigation
            autoplay={true}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <Flex
                    width="100%"
                    h="600px"
                    backgroundImage="banner1.png"
                    bgSize="cover"
                >
                </Flex>
            </SwiperSlide>
            <SwiperSlide>
                <Flex
                    width="100%"
                    h="600px"
                    backgroundImage="banner2.png"
                    bgSize="cover"
                >
                </Flex>
            </SwiperSlide>
            <SwiperSlide>
                <Flex
                    width="100%"
                    h="600px"
                    backgroundImage="banner3.png"
                    bgSize="cover"
                >
                </Flex>
            </SwiperSlide>
        </Swiper>
    )
}