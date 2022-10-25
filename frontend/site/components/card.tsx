import type { NextPage } from 'next'
import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/card.module.css';

type Props = {
    title: string,
    imgSrc: string | null,
}

const Card: FC<PropsWithChildren<Props>> = ({ title, children, imgSrc } ) => {
    return(
        <div className="card" style={{ width: "16rem" }}>
        { imgSrc && <img src={ imgSrc } className="card-img-top" alt="..." style={{ width: "13rem", alignSelf: "center" }} /> }
        <div className="card-body">
            <h5 className="card-title">{ title }</h5>
            <div className="card-text">{ children }</div>
        </div>
        </div>
    );
}

export default Card