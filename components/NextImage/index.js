import Image from 'next/image';

import cls from './nextImage.module.scss'

export default function NextImage({ src, alt, width }) {
    return (
        <div className={cls.nextImage} style={width && { width: width + 'px' }}>
            <Image src={src} alt={alt} layout="fill" />
        </div>
    );
}
